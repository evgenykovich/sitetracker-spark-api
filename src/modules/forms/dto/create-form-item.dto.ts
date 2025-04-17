import {
  IsString,
  IsOptional,
  IsBoolean,
  IsEnum,
  IsJSON,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { FormItemType } from '@prisma/client';

export class CreateFormItemDto {
  @ApiProperty({ example: 'Site Address' })
  @IsString()
  label: string;

  @ApiProperty({ enum: FormItemType, example: FormItemType.TEXT })
  @IsEnum(FormItemType)
  type: FormItemType;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsOptional()
  required?: boolean;

  @ApiProperty({ example: { options: ['Option 1', 'Option 2'] } })
  @IsJSON()
  @IsOptional()
  options?: any;

  @ApiProperty({ example: { minLength: 10, maxLength: 100 } })
  @IsJSON()
  @IsOptional()
  validation?: any;

  @ApiProperty({ example: 'a012x00000X4rKzAAJ' })
  @IsString()
  @IsOptional()
  salesforceId?: string;
}
