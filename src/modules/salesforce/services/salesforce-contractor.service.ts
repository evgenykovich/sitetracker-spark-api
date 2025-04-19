import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { SalesforceAuthService } from './salesforce-auth.service';
import { LoggerService } from '../../../common/services/logger.service';
import {
  SalesforceUser,
  SalesforceLocation,
  ContractorFilter,
} from '../interfaces/salesforce.types';

@Injectable()
export class SalesforceContractorService {
  private readonly logger = new LoggerService(SalesforceContractorService.name);
  private readonly inFlightRequests = new Map<string, Promise<any>>();

  constructor(
    private readonly salesforceAuthService: SalesforceAuthService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  /**
   * Get from cache or fetch fresh data
   * Implements stale-while-revalidate pattern
   */
  private async getFromCacheOrFetch<T>(
    key: string,
    fetchFn: () => Promise<T>,
    ttl: number = 3600,
  ): Promise<T> {
    // Check for in-flight request
    if (this.inFlightRequests.has(key)) {
      this.logger.log(`Using in-flight request for ${key}`);
      return this.inFlightRequests.get(key) as Promise<T>;
    }

    try {
      // Check cache first
      const cached = await this.cacheManager.get<T>(key);
      const cacheTime = await this.cacheManager.get<number>(`${key}:time`);
      const now = Date.now();
      const isStale = cacheTime && now - cacheTime > (ttl * 1000) / 2;

      // Return immediately if we have cached data
      if (cached) {
        this.logger.log(`Cache hit for ${key}${isStale ? ' (stale)' : ''}`);

        // If data is stale, trigger background refresh
        if (isStale) {
          this.logger.log(`Refreshing stale data for ${key} in background`);
          this.refreshCacheInBackground(key, fetchFn, ttl);
        }

        return cached;
      }

      this.logger.log(`Cache miss for ${key}, fetching fresh data`);
      return this.fetchAndCache(key, fetchFn, ttl);
    } catch (error) {
      this.logger.error(
        `Error in getFromCacheOrFetch for ${key}:`,
        error.stack,
      );
      throw error;
    }
  }

  /**
   * Refresh cache in background without blocking current request
   */
  private refreshCacheInBackground<T>(
    key: string,
    fetchFn: () => Promise<T>,
    ttl: number,
  ): void {
    // Create a background fetch that doesn't block the current request
    const promise = this.fetchAndCache(key, fetchFn, ttl).catch((error) => {
      this.logger.error(`Background refresh failed for ${key}:`, error.stack);
      // We don't rethrow since this is in the background
    });

    // Prevent this from keeping the process alive
    promise.catch(() => {});
  }

  /**
   * Fetch fresh data and cache it
   */
  private async fetchAndCache<T>(
    key: string,
    fetchFn: () => Promise<T>,
    ttl: number,
  ): Promise<T> {
    // Store promise in inFlightRequests to deduplicate concurrent requests
    const fetchPromise = (async () => {
      try {
        const data = await fetchFn();
        await this.cacheManager.set(key, data, ttl);
        await this.cacheManager.set(`${key}:time`, Date.now(), ttl);
        return data;
      } catch (error) {
        this.logger.error(`Error fetching data for ${key}:`, error.stack);
        throw error;
      } finally {
        // Remove from in-flight requests when done
        this.inFlightRequests.delete(key);
      }
    })();

    this.inFlightRequests.set(key, fetchPromise);
    return fetchPromise;
  }

  /**
   * Build profile filter to identify contractors
   * This checks for profiles that contain 'contractor' or other relevant terms
   */
  private async buildProfileFilter(conn: any): Promise<string> {
    try {
      // Query for profiles that might be contractor profiles
      const profileQuery = `
        SELECT Id, Name 
        FROM Profile 
        WHERE Name LIKE '%contractor%' 
        OR Name LIKE '%Contractor%'
        OR Name LIKE '%vendor%'
        OR Name LIKE '%Vendor%'
        OR Name LIKE '%external%'
        OR Name LIKE '%External%'
      `;

      this.logger.log('Finding contractor profiles with query:', profileQuery);
      const profileResult = await conn.query(profileQuery);

      if (profileResult.records.length === 0) {
        this.logger.warn(
          'No contractor profiles found, using fallback criteria',
        );
        // Return a fallback condition that will be unlikely to match any users
        // This prevents returning all users if no contractor profiles are found
        return "ProfileId = '000000000000000'";
      }

      // Build the filter condition based on profile IDs
      const profileIds = profileResult.records.map(
        (profile: any) => profile.Id,
      );
      const profileFilter = `ProfileId IN ('${profileIds.join("','")}')`;

      this.logger.log(
        `Found ${profileResult.records.length} contractor profiles: ${profileResult.records
          .map((p: any) => p.Name)
          .join(', ')}`,
      );
      this.logger.log(`Generated profile filter: ${profileFilter}`);

      return profileFilter;
    } catch (error) {
      this.logger.error('Error building profile filter:', error.stack);
      // Return a fallback condition
      return "ProfileId = '000000000000000'";
    }
  }

  /**
   * Helper method to discover contractor profiles
   */
  private async discoverContractorProfiles(conn: any): Promise<string[]> {
    try {
      // First try to get all profiles
      this.logger.log('Discovering available profiles in Salesforce');
      const profileQuery =
        "SELECT Id, Name FROM Profile WHERE Name LIKE '%Contractor%' OR Name LIKE '%Partner%' OR Name LIKE '%External%' OR Name LIKE '%Community%'";
      const profileResult = await conn.query(profileQuery);

      const profileNames = profileResult.records.map(
        (record: any) => record.Name,
      );
      this.logger.log(
        `Found ${profileNames.length} potential contractor profiles: ${profileNames.join(', ')}`,
      );

      return profileNames;
    } catch (error) {
      this.logger.error('Error discovering profiles:', error.stack);
      return [];
    }
  }

  /**
   * Get contractors from Salesforce with optional filtering
   */
  async getContractors(
    userId: string,
    filters?: ContractorFilter,
  ): Promise<SalesforceUser[]> {
    const filterStr = filters
      ? Object.entries(filters)
          .filter(([_, v]) => v !== undefined)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([k, v]) => `${k}:${v}`)
          .join(':')
      : '';
    const cacheKey = `contractors:${filterStr}`;

    return this.getFromCacheOrFetch<SalesforceUser[]>(cacheKey, async () => {
      this.logger.log(
        `Fetching Salesforce contractors with filters: ${JSON.stringify(filters)}`,
      );

      try {
        const conn = await this.salesforceAuthService.getConnection(userId);

        // First, describe the User object to get available fields
        this.logger.log('Describing User object to discover available fields');
        const userDescribe = await conn.describe('User');
        const availableFields = new Set(
          userDescribe.fields.map((field) => field.name),
        );

        this.logger.log(
          `Found ${availableFields.size} available fields on User object`,
        );

        // Find contractor profiles first
        const profileQuery = `
          SELECT Id, Name 
          FROM Profile 
          WHERE Name LIKE '%contractor%' 
          OR Name LIKE '%vendor%' 
          OR Name LIKE '%Vendor%'
        `;

        this.logger.log(
          'Finding contractor profiles with query:',
          profileQuery,
        );
        const profileResult = await conn.query(profileQuery);

        if (profileResult.records.length === 0) {
          this.logger.warn('No contractor profiles found, using fallback');
          return []; // Return empty array if no contractor profiles found
        }

        // Build the profile ID list
        const profileIds = profileResult.records.map(
          (profile: any) => profile.Id,
        );
        const profileIdList = `'${profileIds.join("','")}'`;

        this.logger.log(
          `Found ${profileResult.records.length} contractor profiles: ${profileResult.records
            .map((p: any) => p.Name)
            .join(', ')}`,
        );

        // Define standard fields we always want to query
        const standardFields = [
          'Id',
          'Name',
          'Username',
          'Email',
          'UserType',
          'ProfileId',
          'Profile.Name',
          'IsActive',
          'City',
          'State',
          'Country',
          'Title',
          'Department',
          'CompanyName',
          'LastLoginDate',
          'CreatedDate',
          'LastModifiedDate',
        ];

        // Define custom fields we want to query if they exist
        const potentialCustomFields = [
          'Contractor_Type__c',
          'Contractor_Status__c',
          'ContractorType__c',
          'ContractorStatus__c',
          'Location__c',
          'Service_Area__c',
          'MailingCity',
          'MailingState',
          'MailingCountry',
        ];

        // Check which custom fields actually exist
        const existingCustomFields = potentialCustomFields.filter((field) =>
          availableFields.has(field),
        );

        this.logger.log(
          `Found ${existingCustomFields.length} custom fields: ${existingCustomFields.join(', ')}`,
        );

        // Build the query with only available fields
        const allFields = [...standardFields, ...existingCustomFields];

        // Start building the WHERE conditions
        let whereConditions = [
          `IsActive = true`,
          `ProfileId IN (${profileIdList})`,
        ];

        // Add location filters if specified
        if (filters?.location) {
          const locationConditions = [];

          if (availableFields.has('City')) {
            locationConditions.push(`City = '${filters.location}'`);
          }

          if (availableFields.has('MailingCity')) {
            locationConditions.push(`MailingCity = '${filters.location}'`);
          }

          if (availableFields.has('Location__c')) {
            locationConditions.push(`Location__c LIKE '%${filters.location}%'`);
          }

          if (locationConditions.length > 0) {
            whereConditions.push(`(${locationConditions.join(' OR ')})`);
          }
        }

        // Add state filter if specified
        if (filters?.state) {
          const stateConditions = [];

          if (availableFields.has('State')) {
            stateConditions.push(`State = '${filters.state}'`);
          }

          if (availableFields.has('MailingState')) {
            stateConditions.push(`MailingState = '${filters.state}'`);
          }

          if (stateConditions.length > 0) {
            whereConditions.push(`(${stateConditions.join(' OR ')})`);
          }
        }

        // Add type filter with support for either field name format
        if (filters?.contractorType) {
          const typeConditions = [];

          if (availableFields.has('Contractor_Type__c')) {
            typeConditions.push(
              `Contractor_Type__c = '${filters.contractorType}'`,
            );
          }

          if (availableFields.has('ContractorType__c')) {
            typeConditions.push(
              `ContractorType__c = '${filters.contractorType}'`,
            );
          }

          if (typeConditions.length > 0) {
            whereConditions.push(`(${typeConditions.join(' OR ')})`);
          }
        }

        // Add status filter with support for either field name format
        if (filters?.contractorStatus) {
          const statusConditions = [];

          if (availableFields.has('Contractor_Status__c')) {
            statusConditions.push(
              `Contractor_Status__c = '${filters.contractorStatus}'`,
            );
          }

          if (availableFields.has('ContractorStatus__c')) {
            statusConditions.push(
              `ContractorStatus__c = '${filters.contractorStatus}'`,
            );
          }

          if (statusConditions.length > 0) {
            whereConditions.push(`(${statusConditions.join(' OR ')})`);
          }
        }

        // Construct the final query
        const query = `
          SELECT ${allFields.join(', ')}
          FROM User
          WHERE ${whereConditions.join(' AND ')}
          ORDER BY Name ASC
          LIMIT 1000
        `;

        this.logger.log('Generated Salesforce query:', query);

        const result = await conn.query<any>(query);
        this.logger.log(`Query returned ${result.records.length} records`);

        // Enhance the users with additional metadata
        const enhancedUsers = result.records.map((user) => {
          // Create the base user object
          const enhancedUser: SalesforceUser = {
            id: user.Id,
            name: user.Name,
            username: user.Username,
            email: user.Email,
            userType: user.UserType,
            profileId: user.ProfileId,
            profileName: user.Profile?.Name,
            isActive: user.IsActive,
            location: {
              city: user.City || user.MailingCity,
              state: user.State || user.MailingState,
              country: user.Country || user.MailingCountry,
              serviceArea: user.Service_Area__c,
            },
            lastLoginDate: user.LastLoginDate,
            createdDate: user.CreatedDate,
            lastModifiedDate: user.LastModifiedDate,
          };

          // Add optional fields if they exist
          if (user.ContactId) enhancedUser.contactId = user.ContactId;
          if (user.Contact?.AccountId)
            enhancedUser.accountId = user.Contact.AccountId;
          if (user.Contact?.Account?.Name)
            enhancedUser.accountName = user.Contact.Account.Name;
          if (user.Title) enhancedUser.title = user.Title;
          if (user.Department) enhancedUser.department = user.Department;
          if (user.CompanyName) enhancedUser.companyName = user.CompanyName;

          // Support both field naming conventions
          if (user.Contractor_Type__c || user.ContractorType__c)
            enhancedUser.contractorType =
              user.Contractor_Type__c || user.ContractorType__c;
          if (user.Contractor_Status__c || user.ContractorStatus__c)
            enhancedUser.contractorStatus =
              user.Contractor_Status__c || user.ContractorStatus__c;

          // Add raw data for reference
          enhancedUser._rawSalesforceData = user;

          return enhancedUser;
        });

        this.logger.log(`Found ${enhancedUsers.length} contractors`);
        return enhancedUsers;
      } catch (error) {
        this.logger.error(
          'Error fetching contractors from Salesforce:',
          error.stack,
        );

        // If all else fails, use the absolute minimal query
        this.logger.warn('Using minimal fallback query');
        const conn = await this.salesforceAuthService.getConnection(userId);

        try {
          // Try querying all Standard users
          const minimalQuery = `
            SELECT Id, Name, Username, Email, IsActive, 
                   Title, Department, CompanyName, Profile.Name
            FROM User 
            WHERE IsActive = true 
            AND UserType = 'Standard'
            ORDER BY Name ASC 
            LIMIT 1000
          `;

          this.logger.log('Generated minimal fallback query:', minimalQuery);
          const minimalResult = await conn.query<any>(minimalQuery);
          this.logger.log(
            `Minimal query returned ${minimalResult.records.length} records`,
          );

          return minimalResult.records.map((user) => ({
            id: user.Id,
            name: user.Name,
            username: user.Username,
            email: user.Email,
            userType: 'Standard',
            profileId: user.ProfileId || '',
            profileName: user.Profile?.Name || 'Standard User',
            isActive: user.IsActive,
            location: {
              city: null,
              state: null,
              country: null,
              serviceArea: null,
            },
            title: user.Title,
            department: user.Department,
            companyName: user.CompanyName,
            lastLoginDate: null,
            createdDate: null,
            lastModifiedDate: null,
            _rawSalesforceData: user,
          }));
        } catch (finalError) {
          this.logger.error('Final fallback query failed:', finalError.stack);
          return []; // Return empty array instead of throwing error
        }
      }
    });
  }

  /**
   * Get locations with contractor counts
   */
  async getContractorLocations(userId: string): Promise<SalesforceLocation[]> {
    return this.getFromCacheOrFetch('contractor:locations', async () => {
      try {
        const conn = await this.salesforceAuthService.getConnection(userId);

        // First, check which fields are available
        const userDescribe = await conn.describe('User');
        const availableFields = new Set(
          userDescribe.fields.map((field) => field.name),
        );

        // Get profile filter to identify contractors
        const profileFilter = await this.buildProfileFilter(conn);

        // Check if we have City field
        if (!availableFields.has('City')) {
          this.logger.warn('City field not available on User object');
          return [];
        }

        // Query using discovered profile filter
        const query = `
          SELECT City, State, COUNT(Id) UserCount
          FROM User
          WHERE IsActive = true 
          AND City != null
          ${profileFilter}
          GROUP BY City, State
          ORDER BY UserCount DESC, City ASC
          LIMIT 100
        `;

        this.logger.log('Using location query with profile filter:', query);
        const result = await conn.query<any>(query);
        this.logger.log(
          `Location query returned ${result.records.length} records`,
        );

        return result.records.map((record) => ({
          city: record.City,
          state: record.State,
          count: record.UserCount,
        }));
      } catch (error) {
        this.logger.error('Error fetching contractor locations:', error.stack);

        // Return empty result on error
        return [];
      }
    });
  }

  /**
   * Get all contractor types
   */
  async getContractorTypes(userId: string): Promise<string[]> {
    return this.getFromCacheOrFetch('contractor:types', async () => {
      try {
        const conn = await this.salesforceAuthService.getConnection(userId);

        // Describe User object to check available fields
        const userDescribe = await conn.describe('User');
        const availableFields = new Set(
          userDescribe.fields.map((field) => field.name),
        );

        // Get profile filter to identify contractors
        const profileFilter = await this.buildProfileFilter(conn);

        // Check if we have the Contractor_Type__c field
        if (!availableFields.has('Contractor_Type__c')) {
          this.logger.warn(
            'Contractor_Type__c field not available on User object',
          );
          return [];
        }

        // Query for unique contractor types
        const query = `
          SELECT Contractor_Type__c
          FROM User
          WHERE IsActive = true 
          AND Contractor_Type__c != null
          ${profileFilter}
          GROUP BY Contractor_Type__c
          ORDER BY Contractor_Type__c ASC
        `;

        this.logger.log('Fetching contractor types with query:', query);
        const result = await conn.query<any>(query);
        this.logger.log(`Found ${result.records.length} contractor types`);

        return result.records.map((record) => record.Contractor_Type__c);
      } catch (error) {
        this.logger.error('Error fetching contractor types:', error.stack);
        return [];
      }
    });
  }

  /**
   * Get all contractor statuses
   */
  async getContractorStatuses(userId: string): Promise<string[]> {
    return this.getFromCacheOrFetch('contractor:statuses', async () => {
      try {
        const conn = await this.salesforceAuthService.getConnection(userId);

        // Describe User object to check available fields
        const userDescribe = await conn.describe('User');
        const availableFields = new Set(
          userDescribe.fields.map((field) => field.name),
        );

        // Get profile filter to identify contractors
        const profileFilter = await this.buildProfileFilter(conn);

        // Check if we have the Contractor_Status__c field
        if (!availableFields.has('Contractor_Status__c')) {
          this.logger.warn(
            'Contractor_Status__c field not available on User object',
          );
          return [];
        }

        // Query for unique contractor statuses
        const query = `
          SELECT Contractor_Status__c
          FROM User
          WHERE IsActive = true 
          AND Contractor_Status__c != null
          ${profileFilter}
          GROUP BY Contractor_Status__c
          ORDER BY Contractor_Status__c ASC
        `;

        this.logger.log('Fetching contractor statuses with query:', query);
        const result = await conn.query<any>(query);
        this.logger.log(`Found ${result.records.length} contractor statuses`);

        return result.records.map((record) => record.Contractor_Status__c);
      } catch (error) {
        this.logger.error('Error fetching contractor statuses:', error.stack);
        return [];
      }
    });
  }
}
