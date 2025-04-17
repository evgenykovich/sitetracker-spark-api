import helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { LoggerService } from './common/services/logger.service';
import { performance } from 'perf_hooks';

async function bootstrap() {
  const logger = new LoggerService('Bootstrap');
  const startTime = performance.now();

  try {
    logger.log('Starting application...');
    const moduleLoadStart = performance.now();

    const app = await NestFactory.create(AppModule, {
      logger: logger,
      abortOnError: false,
    });

    const moduleLoadEnd = performance.now();
    logger.log(
      `Module loading time: ${(moduleLoadEnd - moduleLoadStart).toFixed(2)}ms`,
    );

    // Global configurations
    logger.log('Configuring global middleware...');
    const middlewareStart = performance.now();

    app.enableCors({
      origin: 'http://localhost:3001',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    });
    app.use(helmet());
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe({ transform: true }));

    const middlewareEnd = performance.now();
    logger.log(
      `Middleware configuration time: ${(middlewareEnd - middlewareStart).toFixed(2)}ms`,
    );

    // Swagger documentation setup
    logger.log('Setting up Swagger documentation...');
    const swaggerStart = performance.now();

    const config = new DocumentBuilder()
      .setTitle('SiteTracker Spark API')
      .setDescription(
        'API for SiteTracker Spark - Salesforce Form Integration Platform',
      )
      .setVersion('1.0')
      .addBearerAuth()
      .addTag('auth', 'Authentication endpoints')
      .addTag('forms', 'Form management endpoints')
      .addTag('salesforce', 'Salesforce integration endpoints')
      .addTag('users', 'User management endpoints')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);

    const swaggerEnd = performance.now();
    logger.log(
      `Swagger setup time: ${(swaggerEnd - swaggerStart).toFixed(2)}ms`,
    );

    // Start the application
    const port = process.env.PORT || 3000;
    logger.log(`Starting server on port ${port}...`);
    const serverStart = performance.now();

    await app.listen(port);

    const serverEnd = performance.now();
    logger.log(`Server start time: ${(serverEnd - serverStart).toFixed(2)}ms`);

    const url = await app.getUrl();
    logger.log(`Application is running on: ${url}`);
    logger.log(`Swagger documentation available at: ${url}/api/docs`);

    // Total startup time
    const endTime = performance.now();
    logger.log(
      `Total application startup time: ${(endTime - startTime).toFixed(2)}ms`,
    );

    // Handle shutdown
    const signals = ['SIGTERM', 'SIGINT'];
    signals.forEach((signal) => {
      process.on(signal, async () => {
        logger.warn(`Received ${signal} signal. Starting graceful shutdown...`);
        try {
          await app.close();
          logger.log('Application shut down successfully');
          process.exit(0);
        } catch (error) {
          logger.error('Error during shutdown:', error.stack);
          process.exit(1);
        }
      });
    });
  } catch (error) {
    logger.error('Failed to start application:', error.stack);
    throw error;
  }
}

// Start the application
bootstrap().catch((error) => {
  console.error('Fatal error during bootstrap:', error);
  process.exit(1);
});
