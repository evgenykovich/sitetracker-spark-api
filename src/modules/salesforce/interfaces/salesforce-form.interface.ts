import { SalesforceForm, SalesforceFormField } from './salesforce.types';

export interface ISalesforceFormService {
  getForms(userId: string): Promise<SalesforceForm[]>;
  getFormFields(formId: string, userId: string): Promise<SalesforceFormField[]>;
  syncForm(formId: string, salesforceId: string): Promise<void>;
  deleteForm(salesforceId: string): Promise<void>;
  syncResponse(
    responseId: string,
    formId: string,
    salesforceId: string,
  ): Promise<void>;
}
