import {
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsDateString,
  IsUUID,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CreateFormItemDto } from './create-form-item.dto';

export class CreateFormDto {
  @ApiProperty({ example: 'Site Survey Form' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Form for conducting site surveys' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 'a012x00000X4rKzAAJ' })
  @IsString()
  @IsOptional()
  salesforceId?: string;

  @ApiProperty({ example: '2024-12-31T23:59:59Z' })
  @IsDateString()
  @IsOptional()
  expiresAt?: Date;

  @ApiProperty({ type: [CreateFormItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFormItemDto)
  formItems: CreateFormItemDto[];

  @ApiProperty({
    description: 'User IDs of contractors to assign this form to (optional)',
    type: [String],
    required: false,
    example: ['123e4567-e89b-12d3-a456-426614174000'],
  })
  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  assigneeIds?: string[];

  @ApiProperty({
    description: 'Due date for form completion by assignees (optional)',
    required: false,
    type: String,
    format: 'date-time',
    example: '2023-12-31T23:59:59Z',
  })
  @IsDateString()
  @IsOptional()
  assignmentDueDate?: string;
}
