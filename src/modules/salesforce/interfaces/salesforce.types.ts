export interface SalesforceForm {
  id: string;
  name: string;
  description?: string | null;
  status?: string | null;
  createdById: string;
  createdDate: string;
  lastModifiedById: string;
  lastModifiedDate: string;
  _rawSalesforceData?: {
    type?: string;
    url?: string;
    originalFields?: {
      Id?: string;
      Name?: string;
      Description__c?: string;
      Status__c?: string;
      CreatedById?: string;
      CreatedDate?: string;
      LastModifiedById?: string;
      LastModifiedDate?: string;
      attributes?: any;
    };
  };
  // Allow additional Salesforce-specific fields
  [key: string]: any;
}

export interface SalesforceFormField {
  Id: string;
  Name: string;
  Label__c: string;
  Type__c: string;
  Required__c: boolean;
  Order__c: number;
  Options__c?: string; // JSON string
  Validation__c?: string; // JSON string
  Section__c?: string; // Section name or identifier
  attributes?: any; // Salesforce metadata

  // Enhanced section information
  Section: {
    name: string | null;
    description: string | null;
    subsection: {
      name: string | null;
      description: string | null;
    };
  };

  // Additional metadata fields
  Metadata: {
    requiredUploads: number;
    photoValidationChecklist: string | null;
    status: string | null;
    value: string | null;
    itemType: string | null;
    validationItems?: Array<{
      id: string;
      name: string;
      description: string | null;
      required: boolean;
      order: number;
      status: string | null;
      value: string | null;
      comment: string | null;
      photoUploaded: boolean;
      itemType: string | null;
      fieldType: string | null;
      _rawSalesforceData: any;
    }>;
  };

  // Raw Salesforce data for reference
  _rawSalesforceData: any;

  // Allow additional Salesforce-specific fields
  [key: string]: any;
}

// Interface for Salesforce User/Contractor
export interface SalesforceUser {
  id: string;
  name: string;
  username: string;
  email: string;
  userType: string;
  profileId: string;
  profileName: string;
  isActive: boolean;
  location: SalesforceUserLocation;
  contactId?: string;
  accountId?: string;
  accountName?: string;
  title?: string;
  department?: string;
  companyName?: string;
  lastLoginDate: string;
  createdDate: string;
  lastModifiedDate: string;
  contractorType?: string;
  contractorStatus?: string;
  _rawSalesforceData?: any;
}

// Interface for User/Contractor Location
export interface SalesforceUserLocation {
  city?: string;
  state?: string;
  country?: string;
  serviceArea?: string;
}

// Interface for Location with count (for grouping contractors by location)
export interface SalesforceLocation {
  city: string;
  state: string;
  count: number;
}

// Interface for Contractor Filter
export interface ContractorFilter {
  location?: string;
  state?: string;
  contractorType?: string;
  contractorStatus?: string;
}
