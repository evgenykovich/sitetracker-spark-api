import { Module } from '@nestjs/common';
import { ClientsModule, Transport, KafkaOptions } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { KafkaConsumerService } from '../../services/kafka-consumer.service';
import { MetricsService } from '../../services/metrics.service';
import { SalesforceModule } from '../../../modules/salesforce/salesforce.module';
import { KafkaService } from '../../services/kafka.service';
import { PrismaService } from '../../prisma.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'KAFKA_SERVICE',
        imports: [ConfigModule],
        useFactory: async (
          configService: ConfigService,
        ): Promise<KafkaOptions> => ({
          transport: Transport.KAFKA,
          options: {
            client: {
              clientId: 'sitetracker-spark-api',
              brokers: configService.get('kafka.brokers'),
              retry: {
                initialRetryTime: 100,
                retries: 8,
                maxRetryTime: 30000,
              },
              connectionTimeout: 3000,
              authenticationTimeout: 1000,
            },
            consumer: {
              groupId: configService.get('kafka.groupId'),
              allowAutoTopicCreation: true,
              maxWaitTimeInMs: 5000,
              sessionTimeout: 30000,
              rebalanceTimeout: 60000,
            },
            producer: {
              allowAutoTopicCreation: true,
              transactionTimeout: 30000,
            },
            run: {
              autoCommit: true,
              autoCommitInterval: 5000,
            },
          },
        }),
        inject: [ConfigService],
      },
    ]),
    SalesforceModule,
  ],
  providers: [
    KafkaConsumerService,
    MetricsService,
    KafkaService,
    PrismaService,
  ],
  exports: [KafkaConsumerService, KafkaService],
})
export class KafkaModule {}
