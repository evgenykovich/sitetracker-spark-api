import { Injectable, Scope, ConsoleLogger } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends ConsoleLogger {
  error(message: string, trace: string, context?: string) {
    // Add timestamp and format
    const timestamp = new Date().toISOString();
    super.error(`[${timestamp}] ${message}`, trace, context || this.context);
  }

  warn(message: string, context?: string) {
    const timestamp = new Date().toISOString();
    super.warn(`[${timestamp}] ${message}`, context || this.context);
  }

  log(message: string, context?: string) {
    const timestamp = new Date().toISOString();
    super.log(`[${timestamp}] ${message}`, context || this.context);
  }

  debug(message: string, context?: string) {
    const timestamp = new Date().toISOString();
    super.debug(`[${timestamp}] ${message}`, context || this.context);
  }

  verbose(message: string, context?: string) {
    const timestamp = new Date().toISOString();
    super.verbose(`[${timestamp}] ${message}`, context || this.context);
  }
}
