import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class AssignFormDto {
  @ApiProperty({
    description: 'User IDs to assign the form to',
    type: [String],
    example: ['123e4567-e89b-12d3-a456-426614174000'],
  })
  @IsArray()
  @IsUUID('4', { each: true })
  userIds: string[];

  @ApiProperty({
    description: 'Due date for form completion',
    required: false,
    type: String,
    format: 'date-time',
    example: '2023-12-31T23:59:59Z',
  })
  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @ApiProperty({
    description: 'Optional note about the assignment',
    required: false,
    example: 'Please complete this safety inspection by the end of the week',
  })
  @IsOptional()
  @IsString()
  note?: string;
}
