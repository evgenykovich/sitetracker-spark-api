import {
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsDateString,
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
}
