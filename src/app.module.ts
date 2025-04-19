import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { ThrottlerModule } from '@nestjs/throttler';
import configuration from './config/configuration';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { FormsModule } from './modules/forms/forms.module';
import { SalesforceModule } from './modules/salesforce/salesforce.module';
import { ContractorsModule } from './modules/contractors/contractors.module';
import { LoggerService } from './common/services/logger.service';
import { MetricsModule } from './common/modules/metrics/metrics.module';
import { KafkaModule } from './common/modules/kafka/kafka.module';

@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),

    // In-Memory Cache
    CacheModule.register({
      isGlobal: true,
      ttl: 60 * 60, // 1 hour default TTL
      max: 100, // Maximum number of items in cache
    }),

    // Rate Limiting (using built-in ThrottlerModule instead of Redis-based one)
    ThrottlerModule.forRoot([
      {
        ttl: 60,
        limit: 100,
      },
    ]),

    // Feature Modules
    AuthModule,
    UsersModule,
    FormsModule,
    SalesforceModule,
    ContractorsModule,
    MetricsModule,
    KafkaModule,
  ],
  providers: [LoggerService],
})
export class AppModule {}
