import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ISalesforceFormService } from '../interfaces/salesforce-form.interface';
import { SalesforceAuthService } from './salesforce-auth.service';
import { LoggerService } from '../../../common/services/logger.service';
import { CacheService } from '../../../common/services/cache.service';
import {
  SalesforceForm,
  SalesforceFormField,
} from '../interfaces/salesforce.types';

@Injectable()
export class SalesforceFormService implements ISalesforceFormService {
  private readonly logger = new LoggerService(SalesforceFormService.name);

  constructor(
    private salesforceAuthService: SalesforceAuthService,
    private cacheService: CacheService,
  ) {}

  async getForms(userId: string): Promise<SalesforceForm[]> {
    const cacheKey = this.cacheService.generateKey('forms', userId);
    return this.cacheService.getOrSet(
      cacheKey,
      async () => {
        this.logger.log(`Fetching forms from Salesforce for user ${userId}`);
        const conn = await this.salesforceAuthService.getConnection(userId);

        // First, discover the correct object name
        const describeSObjects = await conn.describeGlobal();

        // Log all Salesforce objects for debugging
        const allFormObjects = describeSObjects.sobjects.filter(
          (obj) =>
            // Explicitly look for Checklist objects
            obj.name.includes('Checklist') &&
            // Exclude share, event, and change event objects
            !obj.name.includes('__Share') &&
            !obj.name.includes('__e') &&
            !obj.name.includes('__ChangeEvent') &&
            // Ensure the object is queryable
            obj.queryable,
        );

        this.logger.log(
          'Filtered Form/Checklist objects discovered:',
          JSON.stringify(
            allFormObjects.map((obj) => ({
              name: obj.name,
              queryable: obj.queryable,
              retrieveable: obj.retrieveable,
            })),
            null,
            2,
          ),
        );

        // Prioritize objects in this order
        const prioritizedFormObjects = [
          // Explicitly prioritize st_ci__Checklist__c
          (obj) => obj.name === 'st_ci__Checklist__c',
          // Fallback to other Checklist objects
          (obj) => obj.name.includes('Checklist__c'),
        ];

        // Find the first matching form object
        let selectedFormObject = null;
        for (const priorityCheck of prioritizedFormObjects) {
          selectedFormObject = allFormObjects.find(priorityCheck);
          if (selectedFormObject) break;
        }

        if (!selectedFormObject) {
          this.logger.error(
            'No suitable Checklist objects found in Salesforce',
            'NoChecklistObjectsError',
            SalesforceFormService.name,
          );
          throw new Error('No suitable Checklist objects found in Salesforce');
        }

        // Use the selected object name
        const formObjectName = selectedFormObject.name;
        this.logger.log(`Using Salesforce object: ${formObjectName}`);

        // Dynamically describe the selected object to get available fields
        const objectDescription = await conn.describe(formObjectName);
        const availableFields = objectDescription.fields.map(
          (field) => field.name,
        );

        this.logger.log(
          'Available fields for selected object:',
          JSON.stringify(availableFields, null, 2),
        );

        // Log detailed information about available fields
        this.logger.log(
          'Detailed object field information:',
          JSON.stringify(
            objectDescription.fields.map((field) => ({
              name: field.name,
              type: field.type,
              nillable: field.nillable,
              createable: field.createable,
              updateable: field.updateable,
              defaultedOnCreate: field.defaultedOnCreate,
            })),
            null,
            2,
          ),
        );

        // Dynamically construct query based on available fields
        const selectFields = [
          'Id',
          // Checklist-specific field names
          availableFields.includes('st_ci__Name__c') ? 'st_ci__Name__c' : null,
          availableFields.includes('Name') ? 'Name' : null,
          availableFields.includes('st_ci__Description__c')
            ? 'st_ci__Description__c'
            : null,
          availableFields.includes('Description__c') ? 'Description__c' : null,
          availableFields.includes('st_ci__Status__c')
            ? 'st_ci__Status__c'
            : null,
          availableFields.includes('Status__c') ? 'Status__c' : null,
          availableFields.includes('st_ci__Expires_At__c')
            ? 'st_ci__Expires_At__c'
            : null,
          availableFields.includes('ExpiresAt__c') ? 'ExpiresAt__c' : null,
          availableFields.includes('CreatedById') ? 'CreatedById' : null,
          availableFields.includes('CreatedDate') ? 'CreatedDate' : null,
          availableFields.includes('LastModifiedById')
            ? 'LastModifiedById'
            : null,
          availableFields.includes('LastModifiedDate')
            ? 'LastModifiedDate'
            : null,
        ].filter((field) => field !== null);

        // Determine appropriate WHERE clause
        let whereClause = '';
        const statusFields = ['st_ci__Status__c', 'Status__c'];
        const statusFieldFound = statusFields.some((field) =>
          availableFields.includes(field),
        );

        if (statusFieldFound) {
          const statusField = statusFields.find((field) =>
            availableFields.includes(field),
          );
          whereClause = `WHERE ${statusField} != null`;
        }

        // Construct the final query
        const query = `SELECT 
            ${selectFields.join(', ')}
            FROM ${formObjectName}
            ${whereClause}
            ORDER BY ${availableFields.includes('CreatedDate') ? 'CreatedDate' : 'Id'} DESC
            LIMIT 100`; // Add a reasonable limit to prevent overwhelming queries

        this.logger.log('Generated Salesforce query:', query);

        // Query the discovered object
        const result = await conn.query<SalesforceForm>(query);

        // Enhance the forms with additional metadata
        const enhancedForms = result.records.map((form) => {
          // Create a base object that includes all available fields
          const enhancedForm: SalesforceForm = {
            // Core fields
            id: form.Id,
            name: form.Name || form['st_ci__Name__c'] || '',

            // Optional fields with fallback
            description:
              form['st_ci__Description__c'] || form.Description__c || null,
            status: form['st_ci__Status__c'] || form.Status__c || null,

            // Metadata fields
            createdById: form.CreatedById,
            createdDate: form.CreatedDate,
            lastModifiedById: form.LastModifiedById,
            lastModifiedDate: form.LastModifiedDate,

            // Include raw Salesforce attributes
            _rawSalesforceData: {
              type: form.attributes?.type,
              url: form.attributes?.url,
            },

            // Preserve original Salesforce fields
            ...form,
          };

          return enhancedForm;
        });

        return enhancedForms;
      },
      300000, // 5 minutes TTL
    );
  }

  async getFormFields(
    formId: string,
    userId: string,
  ): Promise<SalesforceFormField[]> {
    const cacheKey = this.cacheService.generateKey(
      'form-fields',
      formId,
      userId,
    );
    return this.cacheService.getOrSet(
      cacheKey,
      async () => {
        this.logger.log(
          `Fetching form fields from Salesforce for form ${formId}`,
        );
        const conn = await this.salesforceAuthService.getConnection(userId);

        // First, discover the correct object name for Checklist Items
        const describeSObjects = await conn.describeGlobal();

        // Find Checklist Item objects with potential variations
        const checklistItemObjects = describeSObjects.sobjects.filter(
          (obj) =>
            (obj.name.includes('Checklist_Item__c') ||
              obj.name.includes('Checklist_Item__c')) &&
            obj.queryable,
        );

        this.logger.log(
          'Checklist Item objects discovered:',
          JSON.stringify(
            checklistItemObjects.map((obj) => ({
              name: obj.name,
              queryable: obj.queryable,
            })),
            null,
            2,
          ),
        );

        // Select the first queryable Checklist Item object
        if (checklistItemObjects.length === 0) {
          throw new Error('No Checklist Item objects found in Salesforce');
        }

        const checklistItemObjectName = checklistItemObjects[0].name;

        // Extract package namespace (e.g., "st_ci__" from "st_ci__Checklist_Item__c")
        const namespaceRegex = /^([a-zA-Z0-9]+_[a-zA-Z0-9]+__)/; // Matches patterns like "st_ci__"
        const namespaceMatch = checklistItemObjectName.match(namespaceRegex);
        const namespace = namespaceMatch ? namespaceMatch[1] : '';

        this.logger.log(
          `Namespace extraction:`,
          JSON.stringify(
            {
              objectName: checklistItemObjectName,
              extractedNamespace: namespace,
              regexUsed: namespaceRegex.toString(),
            },
            null,
            2,
          ),
        );

        this.logger.log(
          `Using Salesforce Checklist Item object: ${checklistItemObjectName} with namespace: ${namespace}`,
        );

        // Get the correct relationship field name from object description
        const objectDescription = await conn.describe(checklistItemObjectName);

        // Helper function to get field with namespace fallback
        const getFieldValue = (field: any, baseFieldName: string) => {
          const namespacedField = `${namespace}${baseFieldName}`;
          return field[namespacedField] !== undefined
            ? field[namespacedField]
            : field[baseFieldName];
        };

        // Get all available fields from object description
        const availableFields = objectDescription.fields
          .filter(
            (field) =>
              // Include fields that are accessible and not system fields
              field.createable || field.updateable || field.nillable,
          )
          .map((field) => field.name);

        this.logger.log(
          'Available queryable fields:',
          JSON.stringify(availableFields, null, 2),
        );

        // Core fields that we always want to query if available
        const coreFields = [
          'Id',
          'Name',
          'Item_Type__c',
          'Name__c',
          'Label__c',
          'Description__c',
          'Item_Order__c',
          'Options__c',
          'Validation__c',
          'Section__c',
          'Section_Description__c',
          'Subsection__c',
          'Subsection_Description__c',
          'Status__c',
          'Value__c',
          'Required__c',
          'Optional__c',
          'Hidden__c',
          'Read_Only__c',
          'Field_Type__c',
          'st_Item_Required_Uploads__c',
          'st_Photo_Validation_Checklist__c',
        ];

        // Add both namespaced and non-namespaced versions
        const fieldsToQuery = [
          ...new Set([
            ...coreFields,
            ...coreFields.map((field) => `${namespace}${field}`),
            ...availableFields.filter(
              (field) =>
                field.includes('Item_') ||
                field.includes('Section_') ||
                field.includes('Status') ||
                field.includes('Value') ||
                field.includes('Required') ||
                field.includes('Photo') ||
                field.includes('Comment'),
            ),
          ]),
        ].filter((field) => availableFields.includes(field));

        const relationshipField =
          objectDescription.fields.find((field) =>
            field.name.endsWith('Checklist__c'),
          )?.name || `${namespace}Checklist__c`;

        // Construct the query with explicit fields
        const query = `SELECT ${fieldsToQuery.join(', ')}
            FROM ${checklistItemObjectName}
            WHERE ${relationshipField} = '${formId}'
            ORDER BY ${namespace}Item_Order__c ASC
            LIMIT 100`;

        this.logger.log('Generated Salesforce query:', query);

        // Query the Checklist Items
        const result = await conn.query<SalesforceFormField>(query);

        // Enhance the fields with additional metadata
        const enhancedFields = await Promise.all(
          result.records.map(async (field) => {
            // Create a base object that includes all available fields
            const enhancedField: SalesforceFormField = {
              // Core fields with namespace fallback
              Id: field.Id,
              Name: getFieldValue(field, 'Name__c') || field.Name || '',
              Item_Type__c: getFieldValue(field, 'Item_Type__c') || null,
              description: getFieldValue(field, 'Description__c') || null,
              Label__c:
                getFieldValue(field, 'Label__c') ||
                getFieldValue(field, 'Name__c') ||
                field.Name ||
                '',
              Type__c: getFieldValue(field, 'Type__c') || '',
              Required__c: getFieldValue(field, 'Required__c') ?? false,
              Order__c: getFieldValue(field, 'Order__c') ?? 0,
              Options__c: getFieldValue(field, 'Options__c') || undefined,
              Validation__c: getFieldValue(field, 'Validation__c') || undefined,

              // Enhanced section information
              Section: {
                name: getFieldValue(field, 'Section__c') || null,
                description:
                  getFieldValue(field, 'Section_Description__c') || null,
                subsection: {
                  name: getFieldValue(field, 'Subsection__c') || null,
                  description:
                    getFieldValue(field, 'Subsection_Description__c') || null,
                },
              },

              // Additional metadata fields
              Metadata: {
                requiredUploads:
                  Number(getFieldValue(field, 'st_Item_Required_Uploads__c')) ||
                  0,
                photoValidationChecklist:
                  getFieldValue(field, 'st_Photo_Validation_Checklist__c') ||
                  null,
                status: getFieldValue(field, 'Status__c') || null,
                value: getFieldValue(field, 'Value__c') || null,
                itemType: getFieldValue(field, 'Item_Type__c') || null,
              },

              // Raw Salesforce data for reference
              _rawSalesforceData: field,
            };

            // If photo validation checklist is present, fetch its items
            const photoValidationChecklistId = getFieldValue(
              field,
              'st_Photo_Validation_Checklist__c',
            );

            if (photoValidationChecklistId) {
              try {
                // Get validation items with explicit field selection
                const validationItemsQuery = `
                    SELECT Id, Name, ${[
                      'Status__c',
                      'Value__c',
                      'Comment__c',
                      'Photo_Uploaded__c',
                      'Item_Type__c',
                      'Field_Type__c',
                      'Order__c',
                    ]
                      .map((f) => (namespace ? `${namespace}${f}` : f))
                      .join(', ')}
                    FROM ${namespace}st_Photo_Validation_Checklist_Item__c
                    WHERE ${namespace}st_Photo_Validation_Checklist__c = '${photoValidationChecklistId}'
                    ORDER BY ${namespace}Order__c ASC
                  `;

                this.logger.log(
                  'Validation items query:',
                  validationItemsQuery,
                );

                const validationItems = await conn.query<{
                  Id: string;
                  Name: string;
                  [key: string]: any;
                }>(validationItemsQuery);

                if (
                  validationItems.records &&
                  validationItems.records.length > 0
                ) {
                  enhancedField.Metadata.validationItems =
                    validationItems.records.map((item) => ({
                      id: item.Id,
                      name: item.Name,
                      status: getFieldValue(item, 'Status__c') || null,
                      value: getFieldValue(item, 'Value__c') || null,
                      comment: getFieldValue(item, 'Comment__c') || null,
                      photoUploaded:
                        getFieldValue(item, 'Photo_Uploaded__c') || false,
                      itemType: getFieldValue(item, 'Item_Type__c') || null,
                      fieldType: getFieldValue(item, 'Field_Type__c') || null,
                      _rawSalesforceData: item,
                    })) as any;
                } else {
                  enhancedField.Metadata.validationItems = [];
                }
              } catch (error) {
                this.logger.error(
                  `Error fetching validation checklist items for ${photoValidationChecklistId}:`,
                  error instanceof Error ? error.stack : String(error),
                  SalesforceFormService.name,
                );
                enhancedField.Metadata.validationItems = [];
              }
            }

            return enhancedField;
          }),
        );

        return enhancedFields;
      },
      300000, // 5 minutes TTL
    );
  }

  async syncForm(formId: string, salesforceId: string): Promise<void> {
    this.logger.log(
      `Syncing form ${formId} with Salesforce ID ${salesforceId}`,
    );

    // Get the form from our database and sync it to Salesforce
    const conn = await this.salesforceAuthService.getConnection(formId);

    try {
      // Get form data from Salesforce to ensure it exists
      const [form] = await conn
        .sobject('Form__c')
        .find({ Id: salesforceId })
        .execute();

      if (!form) {
        throw new Error(`Form with ID ${salesforceId} not found in Salesforce`);
      }

      // TODO: Get form data from database and update Salesforce
      // For now, just verify the form exists
      this.logger.log(
        `Successfully verified form ${formId} exists in Salesforce`,
      );
    } catch (error) {
      this.logger.error(
        `Error syncing form ${formId} to Salesforce:`,
        error.stack || 'No stack trace',
        SalesforceFormService.name,
      );
      throw error;
    }
  }

  async deleteForm(salesforceId: string): Promise<void> {
    this.logger.log(`Deleting form with Salesforce ID ${salesforceId}`);

    // Get connection using the form's owner ID
    // TODO: Get form owner ID from database
    const ownerId = 'TODO';
    const conn = await this.salesforceAuthService.getConnection(ownerId);

    try {
      // Delete the form in Salesforce
      await conn.sobject('Form__c').destroy(salesforceId);
      this.logger.log(
        `Successfully deleted form ${salesforceId} from Salesforce`,
      );
    } catch (error) {
      this.logger.error(
        `Error deleting form ${salesforceId}:`,
        error.stack || 'No stack trace',
        SalesforceFormService.name,
      );
      throw error;
    }
  }

  async syncResponse(
    responseId: string,
    formId: string,
    salesforceId: string,
  ): Promise<void> {
    this.logger.log(
      `Syncing response ${responseId} for form ${formId} with Salesforce ID ${salesforceId}`,
    );

    // Get connection using the form's owner ID
    // TODO: Get form owner ID from database
    const ownerId = 'TODO';
    const conn = await this.salesforceAuthService.getConnection(ownerId);

    try {
      // Get response data from Salesforce to ensure it exists
      const [response] = await conn
        .sobject('Form_Response__c')
        .find({ Id: salesforceId })
        .execute();

      if (!response) {
        throw new Error(
          `Response with ID ${salesforceId} not found in Salesforce`,
        );
      }

      // TODO: Get response data from database and update Salesforce
      // For now, just verify the response exists
      this.logger.log(
        `Successfully verified response ${responseId} exists in Salesforce`,
      );
    } catch (error) {
      this.logger.error(
        `Error syncing response ${responseId} to Salesforce:`,
        error.stack || 'No stack trace',
        SalesforceFormService.name,
      );
      throw error;
    }
  }
}
