import {
  Injectable,
  Inject,
  OnModuleInit,
  OnModuleDestroy,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { LoggerService } from './logger.service';

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new LoggerService(KafkaService.name);

  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    // Subscribe to topics
    const topics = ['form.sync', 'form.delete', 'response.sync'];

    topics.forEach((topic) => {
      this.kafkaClient.subscribeToResponseOf(topic);
    });

    await this.kafkaClient.connect();
    this.logger.log('Kafka client connected');
  }

  async onModuleDestroy() {
    await this.kafkaClient.close();
    this.logger.log('Kafka client disconnected');
  }

  async syncFormToSalesforce(formId: string, salesforceId: string) {
    this.logger.log(`Sending form sync event for form ${formId}`);
    return this.kafkaClient.emit('form.sync', {
      formId,
      salesforceId,
      timestamp: new Date().toISOString(),
    });
  }

  async deleteFormFromSalesforce(salesforceId: string) {
    this.logger.log(
      `Sending form delete event for Salesforce ID ${salesforceId}`,
    );
    return this.kafkaClient.emit('form.delete', {
      salesforceId,
      timestamp: new Date().toISOString(),
    });
  }

  async syncResponseToSalesforce(
    responseId: string,
    formId: string,
    salesforceId: string,
  ) {
    this.logger.log(`Sending response sync event for response ${responseId}`);
    return this.kafkaClient.emit('response.sync', {
      responseId,
      formId,
      salesforceId,
      timestamp: new Date().toISOString(),
    });
  }
}
