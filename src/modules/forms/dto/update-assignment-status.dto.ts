import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsString } from 'class-validator';

export class UpdateAssignmentStatusDto {
  @ApiProperty({
    description: 'Assignment status',
    enum: ['PENDING', 'ACCEPTED', 'REJECTED', 'COMPLETED', 'EXPIRED'],
    example: 'ACCEPTED',
  })
  @IsString()
  @IsIn(['PENDING', 'ACCEPTED', 'REJECTED', 'COMPLETED', 'EXPIRED'])
  status: string;
}
