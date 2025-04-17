import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../../common/prisma.service';
import * as jsforce from 'jsforce';
import { ISalesforceAuthService } from '../interfaces/salesforce-auth.interface';
import { LoggerService } from '../../../common/services/logger.service';
import { Connection, OAuth2, TokenResponse } from 'jsforce';
import { SalesforceConfig } from '@prisma/client';

interface SalesforceTokenResponse extends TokenResponse {
  instance_url?: string;
  instanceUrl?: string;
}

@Injectable()
export class SalesforceAuthService implements ISalesforceAuthService {
  private readonly logger = new LoggerService(SalesforceAuthService.name);

  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {}

  private createConnection(
    accessToken: string,
    instanceUrl: string,
  ): Connection {
    return new Connection({
      instanceUrl,
      accessToken,
    });
  }

  private async refreshTokenInternal(
    config: SalesforceConfig,
  ): Promise<SalesforceConfig> {
    try {
      const oauth2 = new OAuth2({
        clientId: this.configService.get<string>('SALESFORCE_CLIENT_ID'),
        clientSecret: this.configService.get<string>(
          'SALESFORCE_CLIENT_SECRET',
        ),
        redirectUri: this.configService.get<string>('SALESFORCE_CALLBACK_URL'),
      });

      const userInfo = await oauth2.refreshToken(config.refreshToken);

      // Update the config in the database with the new access token
      const updatedConfig = await this.prisma.salesforceConfig.update({
        where: { id: config.id },
        data: {
          accessToken: userInfo.access_token,
          updatedAt: new Date(),
        },
      });

      return updatedConfig;
    } catch (error) {
      this.logger.error(
        `Failed to refresh Salesforce token:`,
        error instanceof Error ? error.stack : String(error),
        SalesforceAuthService.name,
      );
      throw new UnauthorizedException('Failed to refresh Salesforce token');
    }
  }

  // This method matches the interface
  async refreshToken(userId: string): Promise<any> {
    const config = await this.prisma.salesforceConfig.findFirst({
      where: { userId },
    });

    if (!config) {
      throw new UnauthorizedException('Salesforce configuration not found');
    }

    return this.refreshTokenInternal(config);
  }

  async getConnection(userId: string): Promise<Connection> {
    this.logger.log(`Getting Salesforce connection for user ${userId}`);

    const config = await this.prisma.salesforceConfig.findFirst({
      where: { userId },
    });

    if (!config) {
      this.logger.warn(`No Salesforce connection found for user ${userId}`);
      throw new UnauthorizedException('Salesforce connection not found');
    }

    // Create connection with OAuth2 config
    const oauth2 = new OAuth2({
      clientId: this.configService.get<string>('SALESFORCE_CLIENT_ID'),
      clientSecret: this.configService.get<string>('SALESFORCE_CLIENT_SECRET'),
      redirectUri: this.configService.get<string>('SALESFORCE_CALLBACK_URL'),
    });

    try {
      // First try with existing token
      const conn = new jsforce.Connection({
        instanceUrl: config.instanceUrl,
        accessToken: config.accessToken,
        oauth2, // Include OAuth2 config for potential refresh
      });

      // Test the connection by making a lightweight call
      try {
        await conn.identity();
        return conn;
      } catch (identityError) {
        const errorMessage = String(identityError).toLowerCase();

        // Check for specific API access error
        if (errorMessage.includes('not valid for use with the rest api')) {
          this.logger.warn(
            `Session does not have API access. User needs to use OAuth flow for API access.`,
          );

          throw new UnauthorizedException({
            message:
              'Current session does not have API access. Please use OAuth to get proper API access.',
            oauthUrl: oauth2.getAuthorizationUrl({
              scope: 'api refresh_token',
            }),
          });
        }

        // For other errors, continue to refresh flow
        throw identityError;
      }
    } catch (error) {
      // Only attempt refresh if it's not an API access error
      if (
        error instanceof UnauthorizedException &&
        error.message.includes('API access')
      ) {
        throw error; // Re-throw API access errors without attempting refresh
      }

      this.logger.warn(
        `Salesforce connection failed, attempting token refresh for user ${userId}`,
        error instanceof Error ? error.message : String(error),
      );

      // If the token is expired, try to refresh it
      if (config.refreshToken) {
        try {
          const refreshedConfig = await this.refreshTokenInternal(config);
          return new jsforce.Connection({
            oauth2,
            accessToken: refreshedConfig.accessToken,
            refreshToken: refreshedConfig.refreshToken,
            instanceUrl: refreshedConfig.instanceUrl,
          });
        } catch (refreshError) {
          this.logger.error(
            `Failed to refresh Salesforce token for user ${userId}`,
            refreshError instanceof Error
              ? refreshError.stack
              : String(refreshError),
            SalesforceAuthService.name,
          );

          throw new UnauthorizedException({
            message:
              'Salesforce session expired. Please reconnect your Salesforce account.',
            oauthUrl: oauth2.getAuthorizationUrl({
              scope: 'api refresh_token',
            }),
          });
        }
      } else {
        throw new UnauthorizedException({
          message:
            'Salesforce session expired and no refresh token available. Please reconnect using OAuth.',
          oauthUrl: oauth2.getAuthorizationUrl({ scope: 'api refresh_token' }),
        });
      }
    }
  }

  async authorizeWithSession(
    sessionId: string,
    instanceUrl: string,
    userId: string,
  ) {
    this.logger.log(
      `Authorizing Salesforce connection with session ID for user ${userId}`,
    );

    // Create connection using session ID
    const conn = new jsforce.Connection({
      serverUrl: instanceUrl,
      sessionId: sessionId,
    });

    try {
      // Verify the connection works by getting user info
      this.logger.log('Verifying Salesforce connection...');
      const userInfo = await conn.identity();
      this.logger.log('Successfully verified Salesforce connection');

      // Store the connection info
      const existingConfig = await this.prisma.salesforceConfig.findFirst({
        where: { userId },
      });

      if (existingConfig) {
        this.logger.log('Updating existing Salesforce connection');
        await this.prisma.salesforceConfig.update({
          where: { id: existingConfig.id },
          data: {
            accessToken: sessionId,
            instanceUrl: instanceUrl,
            // We'll keep any existing refresh token if there is one
            refreshToken: existingConfig.refreshToken || '',
            updatedAt: new Date(),
          },
        });
      } else {
        this.logger.log('Creating new Salesforce connection');
        await this.prisma.salesforceConfig.create({
          data: {
            accessToken: sessionId,
            instanceUrl: instanceUrl,
            refreshToken: '', // New connections need OAuth flow for refresh token
            user: {
              connect: {
                id: userId,
              },
            },
          },
        });
      }

      // If we don't have a refresh token, we should recommend using the OAuth flow
      const hasRefreshToken = existingConfig?.refreshToken;
      if (!hasRefreshToken) {
        this.logger.warn(
          'No refresh token available. Consider using OAuth flow for automatic token refresh.',
        );
      }

      return {
        ...userInfo,
        hasRefreshToken: !!hasRefreshToken,
        oauthUrl: conn.oauth2.getAuthorizationUrl({
          scope: 'api refresh_token',
        }),
      };
    } catch (error) {
      this.logger.error(
        'Failed to connect to Salesforce:',
        error instanceof Error ? error.stack : String(error),
        SalesforceAuthService.name,
      );
      throw new UnauthorizedException('Failed to connect to Salesforce');
    }
  }

  // Add method for OAuth2 flow
  async authorizeWithCode(code: string, userId: string): Promise<any> {
    this.logger.log(
      `Authorizing Salesforce connection with OAuth code for user ${userId}`,
    );

    const oauth2 = new OAuth2({
      clientId: this.configService.get<string>('SALESFORCE_CLIENT_ID'),
      clientSecret: this.configService.get<string>('SALESFORCE_CLIENT_SECRET'),
      redirectUri: this.configService.get<string>('SALESFORCE_CALLBACK_URL'),
    });

    try {
      // Exchange code for tokens
      const userInfo = (await oauth2.requestToken(
        code,
      )) as SalesforceTokenResponse;

      // Get instance URL from response
      const instanceUrl = userInfo.instance_url || userInfo.instanceUrl;
      if (!instanceUrl) {
        throw new Error('No instance URL returned from Salesforce');
      }

      // Create connection with the new tokens
      const conn = new jsforce.Connection({
        oauth2,
        accessToken: userInfo.access_token,
        refreshToken: userInfo.refresh_token,
        instanceUrl,
      });

      // Verify the connection
      const identity = await conn.identity();

      // Store or update the connection info
      const existingConfig = await this.prisma.salesforceConfig.findFirst({
        where: { userId },
      });

      if (existingConfig) {
        await this.prisma.salesforceConfig.update({
          where: { id: existingConfig.id },
          data: {
            accessToken: userInfo.access_token,
            refreshToken: userInfo.refresh_token,
            instanceUrl,
            updatedAt: new Date(),
          },
        });
      } else {
        await this.prisma.salesforceConfig.create({
          data: {
            accessToken: userInfo.access_token,
            refreshToken: userInfo.refresh_token,
            instanceUrl,
            user: {
              connect: {
                id: userId,
              },
            },
          },
        });
      }

      return {
        ...identity,
        hasRefreshToken: true,
      };
    } catch (error) {
      this.logger.error(
        'Failed to authorize with OAuth code:',
        error instanceof Error ? error.stack : String(error),
        SalesforceAuthService.name,
      );
      throw new UnauthorizedException(
        'Failed to authorize with Salesforce OAuth',
      );
    }
  }
}
