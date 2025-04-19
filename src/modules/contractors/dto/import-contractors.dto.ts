import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ImportContractorsDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Excel file containing contractor data (.xlsx or .csv)',
  })
  file: any; // Will be populated by Multer

  @ApiProperty({
    description:
      'Default password to set for imported contractors (random if not provided)',
    required: false,
  })
  @IsString()
  @IsOptional()
  defaultPassword?: string;
}
