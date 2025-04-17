import { Injectable } from '@nestjs/common';
import * as client from 'prom-client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MetricsService {
  private static metricsInitialized = false;

  // Kafka metrics
  private static kafkaMessageCounter: client.Counter;
  private static kafkaMessageProcessingTime: client.Histogram;
  private static kafkaRetryCounter: client.Counter;
  private static kafkaDlqCounter: client.Counter;

  // HTTP metrics
  private static httpRequestDuration: client.Histogram;
  private static httpRequestTotal: client.Counter;
  private static httpRequestErrors: client.Counter;

  // Business metrics
  private static formCreationCounter: client.Counter;
  private static formResponseCounter: client.Counter;
  private static salesforceSyncCounter: client.Counter;
  private static salesforceSyncDuration: client.Histogram;

  constructor(private prisma: PrismaService) {
    if (!MetricsService.metricsInitialized) {
      // Initialize Prometheus registry
      client.collectDefaultMetrics();

      // Kafka metrics
      MetricsService.kafkaMessageCounter = new client.Counter({
        name: 'kafka_messages_total',
        help: 'Total number of Kafka messages processed',
        labelNames: ['topic', 'status'],
      });

      MetricsService.kafkaMessageProcessingTime = new client.Histogram({
        name: 'kafka_message_processing_duration_seconds',
        help: 'Time spent processing Kafka messages',
        labelNames: ['topic'],
        buckets: [0.1, 0.5, 1, 2, 5],
      });

      MetricsService.kafkaRetryCounter = new client.Counter({
        name: 'kafka_message_retries_total',
        help: 'Total number of Kafka message retries',
        labelNames: ['topic'],
      });

      MetricsService.kafkaDlqCounter = new client.Counter({
        name: 'kafka_dlq_messages_total',
        help: 'Total number of messages sent to DLQ',
        labelNames: ['topic'],
      });

      // HTTP metrics
      MetricsService.httpRequestDuration = new client.Histogram({
        name: 'http_request_duration_seconds',
        help: 'Duration of HTTP requests',
        labelNames: ['method', 'route', 'status'],
        buckets: [0.1, 0.5, 1, 2, 5],
      });

      MetricsService.httpRequestTotal = new client.Counter({
        name: 'http_requests_total',
        help: 'Total number of HTTP requests',
        labelNames: ['method', 'route', 'status'],
      });

      MetricsService.httpRequestErrors = new client.Counter({
        name: 'http_request_errors_total',
        help: 'Total number of HTTP request errors',
        labelNames: ['method', 'route', 'status', 'error'],
      });

      // Business metrics
      MetricsService.formCreationCounter = new client.Counter({
        name: 'forms_created_total',
        help: 'Total number of forms created',
      });

      MetricsService.formResponseCounter = new client.Counter({
        name: 'form_responses_total',
        help: 'Total number of form responses submitted',
        labelNames: ['formId'],
      });

      MetricsService.salesforceSyncCounter = new client.Counter({
        name: 'salesforce_syncs_total',
        help: 'Total number of Salesforce synchronizations',
        labelNames: ['type', 'status'],
      });

      MetricsService.salesforceSyncDuration = new client.Histogram({
        name: 'salesforce_sync_duration_seconds',
        help: 'Time spent on Salesforce synchronization',
        labelNames: ['type'],
        buckets: [0.5, 1, 2, 5, 10],
      });

      MetricsService.metricsInitialized = true;
    }
  }

  // Kafka metrics methods
  recordKafkaMessage(topic: string, status: 'success' | 'error') {
    MetricsService.kafkaMessageCounter.labels(topic, status).inc();
  }

  startKafkaMessageProcessing(topic: string) {
    return MetricsService.kafkaMessageProcessingTime.labels(topic).startTimer();
  }

  recordKafkaRetry(topic: string) {
    MetricsService.kafkaRetryCounter.labels(topic).inc();
  }

  recordKafkaDlq(topic: string) {
    MetricsService.kafkaDlqCounter.labels(topic).inc();
  }

  // HTTP metrics methods
  recordHttpRequest(
    method: string,
    route: string,
    status: number,
    duration: number,
  ) {
    MetricsService.httpRequestTotal
      .labels(method, route, status.toString())
      .inc();
    MetricsService.httpRequestDuration
      .labels(method, route, status.toString())
      .observe(duration);
  }

  recordHttpError(
    method: string,
    route: string,
    status: number,
    error: string,
  ) {
    MetricsService.httpRequestErrors
      .labels(method, route, status.toString(), error)
      .inc();
  }

  // Business metrics methods
  recordFormCreation() {
    MetricsService.formCreationCounter.inc();
  }

  recordFormResponse(formId: string) {
    MetricsService.formResponseCounter.labels(formId).inc();
  }

  recordSalesforceSync(type: 'form' | 'response', status: 'success' | 'error') {
    MetricsService.salesforceSyncCounter.labels(type, status).inc();
  }

  startSalesforceSyncTimer(type: 'form' | 'response') {
    return MetricsService.salesforceSyncDuration.labels(type).startTimer();
  }

  // Metrics endpoints
  getMetrics(): Promise<string> {
    return client.register.metrics();
  }

  async getSystemMetrics() {
    const userCount = await this.prisma.user.count();
    const formCount = await this.prisma.form.count();
    const submissionCount = await this.prisma.formResponse.count();

    return {
      users: userCount,
      forms: formCount,
      submissions: submissionCount,
      timestamp: new Date().toISOString(),
    };
  }

  async getUserActivityMetrics() {
    const last24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const recentSubmissions = await this.prisma.formResponse.count({
      where: {
        createdAt: {
          gte: last24Hours,
        },
      },
    });

    const activeUsers = await this.prisma.user.count({
      where: {
        updatedAt: {
          gte: last24Hours,
        },
      },
    });

    return {
      activeUsers,
      recentSubmissions,
      period: '24h',
      timestamp: new Date().toISOString(),
    };
  }

  async getKafkaMetrics() {
    // Get metrics from Prometheus client
    const messageProcessed = await MetricsService.kafkaMessageCounter.get();
    const messageErrors = await MetricsService.kafkaRetryCounter.get();
    const messagesInDLQ = await MetricsService.kafkaDlqCounter.get();
    const processingTime =
      await MetricsService.kafkaMessageProcessingTime.get();

    return {
      messageProcessed: messageProcessed.values.reduce(
        (acc, val) => acc + val.value,
        0,
      ),
      messageErrors: messageErrors.values.reduce(
        (acc, val) => acc + val.value,
        0,
      ),
      messagesInDLQ: messagesInDLQ.values.reduce(
        (acc, val) => acc + val.value,
        0,
      ),
      avgProcessingTime:
        processingTime.values.reduce((acc, val) => acc + val.value, 0) /
        processingTime.values.length,
      timestamp: new Date().toISOString(),
    };
  }

  async getSalesforceMetrics() {
    // Get metrics from Prometheus client
    const syncOperations = await MetricsService.salesforceSyncCounter.get();
    const syncDuration = await MetricsService.salesforceSyncDuration.get();

    const successfulSyncs = syncOperations.values
      .filter((val) => val.labels.status === 'success')
      .reduce((acc, val) => acc + val.value, 0);
    const failedSyncs = syncOperations.values
      .filter((val) => val.labels.status === 'error')
      .reduce((acc, val) => acc + val.value, 0);

    return {
      syncOperations: successfulSyncs,
      syncErrors: failedSyncs,
      avgSyncTime:
        syncDuration.values.reduce((acc, val) => acc + val.value, 0) /
        syncDuration.values.length,
      timestamp: new Date().toISOString(),
    };
  }
}
