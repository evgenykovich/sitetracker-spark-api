import { Module } from '@nestjs/common';
import { MetricsController } from '../../controllers/metrics.controller';
import { MetricsService } from '../../services/metrics.service';
import { PrismaService } from '../../prisma.service';

@Module({
  controllers: [MetricsController],
  providers: [MetricsService, PrismaService],
  exports: [MetricsService],
})
export class MetricsModule {}
