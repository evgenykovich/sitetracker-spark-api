import {
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  Request,
  Body,
  Param,
  BadRequestException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  getSchemaPath,
  ApiQuery,
} from '@nestjs/swagger';
import { SalesforceAuthService } from './services/salesforce-auth.service';
import { SalesforceFormService } from './services/salesforce-form.service';
import { SalesforceContractorService } from './services/salesforce-contractor.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import {
  SalesforceForm,
  SalesforceFormField,
  SalesforceUser,
  SalesforceLocation,
} from './interfaces/salesforce.types';
import { PrismaService } from '../../common/prisma.service';
import { Logger } from '@nestjs/common';

@ApiTags('salesforce')
@Controller('salesforce')
export class SalesforceController {
  private readonly logger = new Logger(SalesforceController.name);

  constructor(
    private readonly salesforceAuthService: SalesforceAuthService,
    private readonly salesforceFormService: SalesforceFormService,
    private readonly salesforceContractorService: SalesforceContractorService,
    private readonly prisma: PrismaService,
  ) {}

  @Get('connection/status')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get Salesforce connection status' })
  @ApiResponse({
    status: 200,
    description: 'Returns the current connection status',
  })
  async getConnectionStatus(@Request() req) {
    try {
      const conn = await this.salesforceAuthService.getConnection(req.user.id);
      return {
        connected: true,
        instanceUrl: conn.instanceUrl,
      };
    } catch (error) {
      return {
        connected: false,
        error: 'Not connected to Salesforce',
      };
    }
  }

  @Post('connect/session')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Connect to Salesforce using session ID' })
  @ApiResponse({ status: 200, description: 'Connection successful' })
  async connectWithSession(
    @Body() body: { sessionId: string; instanceUrl: string },
    @Request() req,
  ) {
    return this.salesforceAuthService.authorizeWithSession(
      body.sessionId,
      body.instanceUrl,
      req.user.id,
    );
  }

  @Post('connect/oauth')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Connect to Salesforce using OAuth tokens' })
  @ApiResponse({ status: 200, description: 'Connection successful' })
  async connectWithOAuth(
    @Body()
    body: {
      accessToken: string;
      refreshToken: string;
      instanceUrl: string;
    },
    @Request() req,
  ) {
    // Store the OAuth tokens
    const existingConfig = await this.prisma.salesforceConfig.findFirst({
      where: { userId: req.user.id },
    });

    if (existingConfig) {
      await this.prisma.salesforceConfig.update({
        where: { id: existingConfig.id },
        data: {
          accessToken: body.accessToken,
          refreshToken: body.refreshToken,
          instanceUrl: body.instanceUrl,
        },
      });
    } else {
      await this.prisma.salesforceConfig.create({
        data: {
          userId: req.user.id,
          accessToken: body.accessToken,
          refreshToken: body.refreshToken,
          instanceUrl: body.instanceUrl,
        },
      });
    }

    return { success: true };
  }

  @Post('disconnect')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Disconnect from Salesforce' })
  @ApiResponse({ status: 200, description: 'Successfully disconnected' })
  async disconnect(@Request() req) {
    await this.prisma.salesforceConfig.deleteMany({
      where: { userId: req.user.id },
    });
    return { success: true };
  }

  @Get('connection/details')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get Salesforce connection details' })
  @ApiResponse({
    status: 200,
    description: 'Returns safe connection details',
  })
  async getConnectionDetails(@Request() req) {
    try {
      const config = await this.prisma.salesforceConfig.findFirst({
        where: { userId: req.user.id },
        select: {
          instanceUrl: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      if (!config) {
        return {
          connected: false,
          message: 'No Salesforce connection found',
        };
      }

      return {
        connected: true,
        instanceUrl: config.instanceUrl,
        connectedAt: config.createdAt,
        lastUpdated: config.updatedAt,
      };
    } catch (error) {
      this.logger.error('Error fetching connection details:', error.stack);
      throw error;
    }
  }

  @Get('forms')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get forms from Salesforce' })
  @ApiResponse({
    status: 200,
    description: 'Return Salesforce forms',
    schema: {
      type: 'array',
      items: {
        properties: {
          Id: { type: 'string' },
          Name: { type: 'string' },
          Description__c: { type: 'string', nullable: true },
        },
      },
    },
  })
  async getForms(@Request() req): Promise<SalesforceForm[]> {
    return this.salesforceFormService.getForms(req.user.id);
  }

  @Get('forms/:formId/fields')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get form fields from Salesforce' })
  @ApiResponse({
    status: 200,
    description: 'Return form fields',
    schema: {
      type: 'array',
      items: {
        properties: {
          Id: { type: 'string' },
          Label__c: { type: 'string' },
          Type__c: { type: 'string' },
          Required__c: { type: 'boolean' },
        },
      },
    },
  })
  async getFormFields(
    @Param('formId') formId: string,
    @Request() req,
  ): Promise<SalesforceFormField[]> {
    // Validate formId is not empty or undefined
    if (!formId) {
      this.logger.error('Form ID is required');
      throw new BadRequestException('Form ID is required');
    }

    return this.salesforceFormService.getFormFields(formId, req.user.id);
  }

  @Get('contractors')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get all contractors with optional filtering',
    description:
      'Retrieves a list of contractors that can be filtered by location, state, type, and status.',
  })
  @ApiQuery({
    name: 'location',
    required: false,
    description: 'Filter by location/city',
    example: 'San Francisco',
  })
  @ApiQuery({
    name: 'state',
    required: false,
    description: 'Filter by state',
    example: 'CA',
  })
  @ApiQuery({
    name: 'type',
    required: false,
    description: 'Filter by contractor type (e.g., Electrician, Plumber)',
    example: 'Electrician',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    description: 'Filter by contractor status (e.g., Active, Inactive)',
    example: 'Active',
  })
  @ApiResponse({
    status: 200,
    description: 'List of contractors matching the filter criteria',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          email: { type: 'string' },
          location: {
            type: 'object',
            properties: {
              city: { type: 'string' },
              state: { type: 'string' },
            },
          },
        },
      },
    },
  })
  async getContractors(
    @Request() req,
    @Query('location') location?: string,
    @Query('state') state?: string,
    @Query('type') type?: string,
    @Query('status') status?: string,
  ): Promise<SalesforceUser[]> {
    return this.salesforceContractorService.getContractors(req.user.id, {
      location,
      state,
      contractorType: type,
      contractorStatus: status,
    });
  }

  @Get('contractors/locations')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get all unique contractor locations',
    description:
      'Retrieves a list of unique locations where contractors are based, including the count of contractors in each location.',
  })
  @ApiResponse({
    status: 200,
    description: 'List of unique contractor locations with counts',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          city: { type: 'string' },
          state: { type: 'string' },
          count: { type: 'number' },
        },
      },
    },
  })
  async getContractorLocations(@Request() req): Promise<SalesforceLocation[]> {
    return this.salesforceContractorService.getContractorLocations(req.user.id);
  }

  @Get('contractors/types')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get all contractor types',
    description: 'Retrieves a list of unique contractor types/categories.',
  })
  @ApiResponse({
    status: 200,
    description: 'List of contractor types',
    type: [String],
  })
  async getContractorTypes(@Request() req): Promise<string[]> {
    return this.salesforceContractorService.getContractorTypes(req.user.id);
  }

  @Get('contractors/statuses')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get all contractor statuses',
    description: 'Retrieves a list of unique contractor statuses.',
  })
  @ApiResponse({
    status: 200,
    description: 'List of contractor statuses',
    type: [String],
  })
  async getContractorStatuses(@Request() req): Promise<string[]> {
    return this.salesforceContractorService.getContractorStatuses(req.user.id);
  }
}
