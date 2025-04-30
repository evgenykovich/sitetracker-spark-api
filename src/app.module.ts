import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
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
import { CacheModule } from './common/modules/cache/cache.module';

@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),

    // Custom Cache Module (replaces built-in CacheModule)
    CacheModule,

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
