import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from '../../common/prisma.service';
import { SalesforceAuthService } from './services/salesforce-auth.service';
import { SalesforceFormService } from './services/salesforce-form.service';
import { SalesforceContractorService } from './services/salesforce-contractor.service';
import { SalesforceController } from './salesforce.controller';

@Module({
  imports: [
    ConfigModule,
    BullModule.registerQueue({
      name: 'salesforce',
    }),
  ],
  providers: [
    PrismaService,
    SalesforceAuthService,
    SalesforceFormService,
    SalesforceContractorService,
  ],
  controllers: [SalesforceController],
  exports: [
    SalesforceAuthService,
    SalesforceFormService,
    SalesforceContractorService,
  ],
})
export class SalesforceModule {}
