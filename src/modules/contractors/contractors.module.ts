import { Module } from '@nestjs/common';
import { ContractorsController } from './contractors.controller';
import { ContractorsService } from './services/contractors.service';
import { ExcelImportService } from './services/excel-import.service';
import { PrismaService } from '../../common/prisma.service';
import { AuthModule } from '../auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    AuthModule,
    MulterModule.register({
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB max file size
      },
    }),
  ],
  controllers: [ContractorsController],
  providers: [ContractorsService, ExcelImportService, PrismaService],
  exports: [ContractorsService, ExcelImportService],
})
export class ContractorsModule {}
