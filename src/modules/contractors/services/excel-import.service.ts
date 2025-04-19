import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../../common/prisma.service';
import * as xlsx from 'xlsx';
import * as bcrypt from 'bcrypt';
import { UserRole } from '@prisma/client';
import { generateRandomPassword } from '../utils/password.util';

// Updated with additional fields
interface ContractorImportRow {
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  phone?: string;
  company?: string;
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

@Injectable()
export class ExcelImportService {
  private readonly logger = new Logger(ExcelImportService.name);
  private hasContractorProfileModel: boolean | null = null;

  constructor(private readonly prisma: PrismaService) {
    // Check if ContractorProfile model exists
    this.checkContractorProfileModel();
  }

  /**
   * Check if ContractorProfile model exists in the Prisma client
   */
  private async checkContractorProfileModel(): Promise<boolean> {
    if (this.hasContractorProfileModel !== null) {
      return this.hasContractorProfileModel;
    }

    try {
      // Try to access the model dynamically
      const models = Object.keys(this.prisma);
      this.hasContractorProfileModel = models.includes('contractorProfile');

      this.logger.log(
        `ContractorProfile model ${this.hasContractorProfileModel ? 'exists' : 'does not exist'}`,
      );
      return this.hasContractorProfileModel;
    } catch (error) {
      this.logger.warn(
        'Error checking for ContractorProfile model:',
        error.message,
      );
      this.hasContractorProfileModel = false;
      return false;
    }
  }

  /**
   * Parses Excel file and returns contractor data
   */
  parseExcelFile(file: Express.Multer.File): ContractorImportRow[] {
    try {
      // Read the file
      const workbook = xlsx.read(file.buffer, { type: 'buffer' });

      // Get the first worksheet
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Convert to JSON
      const data = xlsx.utils.sheet_to_json(worksheet);

      // Validate required fields
      if (!data || data.length === 0) {
        throw new BadRequestException('Excel file is empty or invalid');
      }

      // Map and validate the data
      return data.map((row: any, index: number) => {
        // Validate required fields
        if (!row.email && !row.Email && !row['E-mail'] && !row.email_address) {
          throw new BadRequestException(
            `Row ${index + 1} is missing required 'Email' field`,
          );
        }

        if (!row.firstName && !row['First Name'] && !row.first_name) {
          throw new BadRequestException(
            `Row ${index + 1} is missing required 'First Name' field`,
          );
        }

        if (!row.lastName && !row['Last Name'] && !row.last_name) {
          throw new BadRequestException(
            `Row ${index + 1} is missing required 'Last Name' field`,
          );
        }

        // Extract all possible email field variations
        const email =
          row.email || row.Email || row['E-mail'] || row.email_address;

        // Extract all possible name field variations
        const firstName = row.firstName || row['First Name'] || row.first_name;
        const lastName = row.lastName || row['Last Name'] || row.last_name;

        // Map all optional fields with common variations
        return {
          email,
          firstName,
          lastName,
          password: row.password || row.Password,
          phone:
            row.phone ||
            row.Phone ||
            row['Phone Number'] ||
            row.phone_number ||
            row.phoneNumber,
          company:
            row.company ||
            row.Company ||
            row.company_name ||
            row.companyName ||
            row['Company Name'],
          street:
            row.street ||
            row.Street ||
            row.address ||
            row.Address ||
            row.street_address ||
            row.streetAddress ||
            row['Street Address'],
          city: row.city || row.City,
          state: row.state || row.State || row.province || row.Province,
          zipCode:
            row.zipCode ||
            row['Zip Code'] ||
            row.zip ||
            row.Zip ||
            row.postal_code ||
            row['Postal Code'] ||
            row.postalCode,
        };
      });
    } catch (error) {
      this.logger.error(
        `Failed to parse Excel file: ${error.message}`,
        error.stack,
      );
      throw new BadRequestException(
        `Failed to parse Excel file: ${error.message}`,
      );
    }
  }

  /**
   * Import contractors from parsed data
   */
  async importContractors(
    contractors: ContractorImportRow[],
    defaultPassword?: string,
  ): Promise<{ imported: number; skipped: number; errors: string[] }> {
    const result = {
      imported: 0,
      skipped: 0,
      errors: [] as string[],
    };

    // Process each contractor
    for (const contractor of contractors) {
      try {
        // Check if contractor with this email already exists
        const existingUser = await this.prisma.user.findUnique({
          where: { email: contractor.email },
        });

        if (existingUser) {
          result.skipped++;
          result.errors.push(
            `Skipped ${contractor.email}: User already exists`,
          );
          continue;
        }

        // Generate or use password
        let password = contractor.password || defaultPassword;
        if (!password) {
          password = generateRandomPassword();
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the contractor
        const newContractor = await this.prisma.user.create({
          data: {
            email: contractor.email,
            firstName: contractor.firstName,
            lastName: contractor.lastName,
            password: hashedPassword,
            role: UserRole.CONTRACTOR,
          },
        });

        // Create a contractor profile if any additional information is provided
        if (
          contractor.phone ||
          contractor.company ||
          contractor.street ||
          contractor.city ||
          contractor.state ||
          contractor.zipCode
        ) {
          await this.createContractorProfile(newContractor.id, contractor);
        }

        result.imported++;
      } catch (error) {
        result.errors.push(
          `Error importing ${contractor.email}: ${error.message}`,
        );
        this.logger.error(
          `Failed to import contractor ${contractor.email}:`,
          error.stack,
        );
      }
    }

    return result;
  }

  /**
   * Create a contractor profile with additional data
   * Gracefully handles case where model doesn't exist yet
   */
  private async createContractorProfile(
    userId: string,
    contractor: ContractorImportRow,
  ): Promise<void> {
    const hasModel = await this.checkContractorProfileModel();

    if (!hasModel) {
      this.logger.warn(
        `ContractorProfile model not available. Profile data for ${contractor.email} will not be saved.`,
      );
      return;
    }

    try {
      // Use type assertion to handle the case where contractorProfile isn't recognized
      const prismaAny = this.prisma as any;

      await prismaAny.contractorProfile.create({
        data: {
          userId,
          phone: contractor.phone,
          company: contractor.company,
          street: contractor.street,
          city: contractor.city,
          state: contractor.state,
          zipCode: contractor.zipCode,
        },
      });

      this.logger.log(`Created profile for contractor: ${contractor.email}`);
    } catch (error) {
      this.logger.error(
        `Failed to create profile for ${contractor.email}: ${error.message}`,
        error.stack,
      );
      // Don't throw the error - we still want the user creation to be considered successful
    }
  }
}
