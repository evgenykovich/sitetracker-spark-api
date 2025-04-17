import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MetricsService } from '../services/metrics.service';

@ApiTags('Metrics')
@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get()
  @ApiOperation({ summary: 'Get Prometheus metrics' })
  @ApiResponse({
    status: 200,
    description: 'Returns Prometheus metrics in text format',
    type: String,
  })
  async getMetrics(): Promise<string> {
    return this.metricsService.getMetrics();
  }

  @Get('system')
  @ApiOperation({ summary: 'Get system metrics' })
  @ApiResponse({
    status: 200,
    description:
      'Returns system-wide metrics including users, forms, and submissions',
    schema: {
      type: 'object',
      properties: {
        users: { type: 'number' },
        forms: { type: 'number' },
        submissions: { type: 'number' },
        timestamp: { type: 'string', format: 'date-time' },
      },
    },
  })
  async getSystemMetrics() {
    return this.metricsService.getSystemMetrics();
  }

  @Get('activity')
  @ApiOperation({ summary: 'Get user activity metrics' })
  @ApiResponse({
    status: 200,
    description: 'Returns metrics about user activity in the last 24 hours',
    schema: {
      type: 'object',
      properties: {
        activeUsers: { type: 'number' },
        recentSubmissions: { type: 'number' },
        period: { type: 'string' },
        timestamp: { type: 'string', format: 'date-time' },
      },
    },
  })
  async getUserActivityMetrics() {
    return this.metricsService.getUserActivityMetrics();
  }

  @Get('kafka')
  @ApiOperation({ summary: 'Get Kafka metrics' })
  @ApiResponse({
    status: 200,
    description: 'Returns metrics about Kafka message processing',
    schema: {
      type: 'object',
      properties: {
        messageProcessed: { type: 'number' },
        messageErrors: { type: 'number' },
        messagesInDLQ: { type: 'number' },
        avgProcessingTime: { type: 'number' },
        timestamp: { type: 'string', format: 'date-time' },
      },
    },
  })
  async getKafkaMetrics() {
    return this.metricsService.getKafkaMetrics();
  }

  @Get('salesforce')
  @ApiOperation({ summary: 'Get Salesforce sync metrics' })
  @ApiResponse({
    status: 200,
    description: 'Returns metrics about Salesforce synchronization',
    schema: {
      type: 'object',
      properties: {
        syncOperations: { type: 'number' },
        syncErrors: { type: 'number' },
        avgSyncTime: { type: 'number' },
        timestamp: { type: 'string', format: 'date-time' },
      },
    },
  })
  async getSalesforceMetrics() {
    return this.metricsService.getSalesforceMetrics();
  }
}
