import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientKafka, Transport, EventPattern } from '@nestjs/microservices';
import { SalesforceFormService } from '../../modules/salesforce/services/salesforce-form.service';
import { LoggerService } from './logger.service';
import { MetricsService } from './metrics.service';

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 5000; // 5 seconds

@Injectable()
export class KafkaConsumerService implements OnModuleInit {
  private readonly logger = new LoggerService(KafkaConsumerService.name);

  private readonly topics = {
    formSync: 'form.sync',
    formDelete: 'form.delete',
    responseSync: 'response.sync',
    dlq: {
      formSync: 'dlq.form.sync',
      formDelete: 'dlq.form.delete',
      responseSync: 'dlq.response.sync',
    },
  };

  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
    private readonly salesforceFormService: SalesforceFormService,
    private readonly metricsService: MetricsService,
  ) {}

  async onModuleInit() {
    await this.kafkaClient.connect();
    this.logger.log('Kafka consumers initialized');
  }

  @EventPattern('form.sync')
  async handleFormSync(message: any) {
    const { formId, salesforceId, retryCount = 0 } = message;
    const timer = this.metricsService.startKafkaMessageProcessing(
      this.topics.formSync,
    );
    const sfTimer = this.metricsService.startSalesforceSyncTimer('form');

    try {
      await this.salesforceFormService.syncForm(formId, salesforceId);
      this.logger.log(`Successfully synced form ${formId} to Salesforce`);
      this.metricsService.recordKafkaMessage(this.topics.formSync, 'success');
      this.metricsService.recordSalesforceSync('form', 'success');
    } catch (error) {
      this.metricsService.recordKafkaMessage(this.topics.formSync, 'error');
      this.metricsService.recordSalesforceSync('form', 'error');
      await this.handleError(
        error,
        message,
        this.topics.formSync,
        this.topics.dlq.formSync,
        retryCount,
      );
    } finally {
      timer();
      sfTimer();
    }
  }

  @EventPattern('form.delete')
  async handleFormDelete(message: any) {
    const { salesforceId, retryCount = 0 } = message;
    const timer = this.metricsService.startKafkaMessageProcessing(
      this.topics.formDelete,
    );
    const sfTimer = this.metricsService.startSalesforceSyncTimer('form');

    try {
      await this.salesforceFormService.deleteForm(salesforceId);
      this.logger.log(
        `Successfully deleted form from Salesforce: ${salesforceId}`,
      );
      this.metricsService.recordKafkaMessage(this.topics.formDelete, 'success');
      this.metricsService.recordSalesforceSync('form', 'success');
    } catch (error) {
      this.metricsService.recordKafkaMessage(this.topics.formDelete, 'error');
      this.metricsService.recordSalesforceSync('form', 'error');
      await this.handleError(
        error,
        message,
        this.topics.formDelete,
        this.topics.dlq.formDelete,
        retryCount,
      );
    } finally {
      timer();
      sfTimer();
    }
  }

  @EventPattern('response.sync')
  async handleResponseSync(message: any) {
    const { responseId, formId, salesforceId, retryCount = 0 } = message;
    const timer = this.metricsService.startKafkaMessageProcessing(
      this.topics.responseSync,
    );
    const sfTimer = this.metricsService.startSalesforceSyncTimer('response');

    try {
      await this.salesforceFormService.syncResponse(
        responseId,
        formId,
        salesforceId,
      );
      this.logger.log(
        `Successfully synced response ${responseId} to Salesforce`,
      );
      this.metricsService.recordKafkaMessage(
        this.topics.responseSync,
        'success',
      );
      this.metricsService.recordSalesforceSync('response', 'success');
    } catch (error) {
      this.metricsService.recordKafkaMessage(this.topics.responseSync, 'error');
      this.metricsService.recordSalesforceSync('response', 'error');
      await this.handleError(
        error,
        message,
        this.topics.responseSync,
        this.topics.dlq.responseSync,
        retryCount,
      );
    } finally {
      timer();
      sfTimer();
    }
  }

  @EventPattern('dlq.*')
  async handleDLQ(message: any) {
    this.logger.error('Message in DLQ', JSON.stringify(message));
    this.metricsService.recordKafkaDlq(message.topic);
  }

  private async handleError(
    error: any,
    message: any,
    sourceTopic: string,
    dlqTopic: string,
    retryCount: number,
  ) {
    this.logger.error(
      `Error processing message on topic ${sourceTopic}`,
      JSON.stringify({
        error: error.message,
        message,
      }),
    );

    if (retryCount < MAX_RETRIES) {
      // Retry with exponential backoff
      const delay = RETRY_DELAY_MS * Math.pow(2, retryCount);
      await new Promise((resolve) => setTimeout(resolve, delay));

      this.metricsService.recordKafkaRetry(sourceTopic);
      await this.kafkaClient.emit(sourceTopic, {
        ...message,
        retryCount: retryCount + 1,
        lastError: error.message,
        lastRetryTimestamp: new Date().toISOString(),
      });

      this.logger.log(
        `Retrying message (attempt ${retryCount + 1}/${MAX_RETRIES})`,
      );
    } else {
      // Move to DLQ after max retries
      await this.kafkaClient.emit(dlqTopic, {
        ...message,
        finalError: error.message,
        movedToDlqAt: new Date().toISOString(),
      });
      this.metricsService.recordKafkaDlq(dlqTopic);

      this.logger.error(
        `Message moved to DLQ ${dlqTopic} after max retries`,
        JSON.stringify(message),
      );
    }
  }
}
