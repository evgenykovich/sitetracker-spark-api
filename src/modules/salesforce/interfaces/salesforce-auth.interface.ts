export interface ISalesforceAuthService {
  authorizeWithSession(
    sessionId: string,
    instanceUrl: string,
    userId: string,
  ): Promise<any>;
  refreshToken(userId: string): Promise<any>;
  getConnection(userId: string): Promise<any>;
}
