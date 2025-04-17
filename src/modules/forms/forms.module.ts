import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import { PrismaService } from '../../common/prisma.service';
import { SalesforceModule } from '../salesforce/salesforce.module';
import { KafkaModule } from '../../common/modules/kafka/kafka.module';

@Module({
  imports: [SalesforceModule, KafkaModule],
  controllers: [FormsController],
  providers: [FormsService, PrismaService],
  exports: [FormsService],
})
export class FormsModule {}
