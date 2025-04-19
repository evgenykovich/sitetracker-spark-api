# Contractor Import Feature

The Contractor Import feature allows you to import multiple contractors from an Excel file (`.xlsx` or `.csv`) into your system. This saves time when onboarding many contractors at once.

## Creating Your Excel File

Your Excel file must include the following columns:

### Required Columns

- **First Name** - The contractor's first name
- **Last Name** - The contractor's last name
- **Email** - The contractor's email address (must be unique)

### Optional Columns

- **Password** - A password for the contractor (if not provided, a random secure password will be generated)
- **Phone** - The contractor's phone number
- **Company** - The contractor's company name
- **Street** - Street address
- **City** - City
- **State** - State or province
- **Zip Code** - Postal or ZIP code

## Column Name Flexibility

The system supports multiple variations of column names:

| Data           | Accepted Column Names                                                                         |
| -------------- | --------------------------------------------------------------------------------------------- |
| Email          | `email`, `Email`, `E-mail`, `email_address`                                                   |
| First Name     | `firstName`, `First Name`, `first_name`                                                       |
| Last Name      | `lastName`, `Last Name`, `last_name`                                                          |
| Password       | `password`, `Password`                                                                        |
| Phone          | `phone`, `Phone`, `Phone Number`, `phone_number`, `phoneNumber`                               |
| Company        | `company`, `Company`, `company_name`, `companyName`, `Company Name`                           |
| Street Address | `street`, `Street`, `address`, `Address`, `street_address`, `streetAddress`, `Street Address` |
| City           | `city`, `City`                                                                                |
| State          | `state`, `State`, `province`, `Province`                                                      |
| ZIP Code       | `zipCode`, `Zip Code`, `zip`, `Zip`, `postal_code`, `Postal Code`, `postalCode`               |

## Sample Excel File

| First Name | Last Name | Email            | Phone        | Company     | Street        | City        | State | Zip Code |
| ---------- | --------- | ---------------- | ------------ | ----------- | ------------- | ----------- | ----- | -------- |
| John       | Doe       | john@example.com | 555-123-4567 | Acme Inc.   | 123 Main St   | Springfield | IL    | 12345    |
| Jane       | Smith     | jane@example.com | 555-987-6543 | XYZ Corp    | 456 Oak Ave   | Riverdale   | CA    | 54321    |
| Bob        | Johnson   | bob@example.com  | 555-555-5555 | ABC Company | 789 Pine Blvd | Lakeside    | NY    | 67890    |

## Import Process

The import process follows these steps:

1. The system validates all required fields in the Excel file
2. For each contractor:
   - Check if the email already exists in the system
   - Skip existing contractors to avoid duplicates
   - Create new contractors with the provided information
   - Set up their profile with additional details

## API Endpoint

```
POST /contractors/import
```

**Requirements:**

- Admin role required
- Multipart/form-data content type
- Maximum file size: 5MB

**Parameters:**

- `file`: The Excel file (.xlsx or .csv)
- `defaultPassword`: (Optional) Default password to use for contractors that don't have a password specified

## Response

The API returns a summary of the import:

```json
{
  "imported": 5,
  "skipped": 2,
  "errors": [
    "Skipped john@example.com: User already exists",
    "Error importing invalid@example..com: Invalid email format"
  ]
}
```

## Best Practices

1. **Prepare data carefully** - Ensure all required fields are filled, and data is properly formatted
2. **Use templates** - Start with the sample Excel template to ensure proper formatting
3. **Test with a small file** - Start with a few rows to test your import before adding many contractors
4. **Set default passwords** - Using the default password option makes it easier to communicate initial credentials
