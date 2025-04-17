import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class FormItemResponseDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  formItemId: string;

  @ApiProperty({ example: { value: 'Response text' } })
  value: any;
}

export class SubmitFormResponseDto {
  @ApiProperty({ type: [FormItemResponseDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FormItemResponseDto)
  items: FormItemResponseDto[];
}
