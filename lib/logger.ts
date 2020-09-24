export class Logger {
  private context: string;
  private now = new Date().toISOString();
  constructor(context: string) {
    this.context = context;
  }

  log(message: string, context?: string): void {
    console.log(
      "\x1b[32m%s\x1b[0m",
      `${this.now} [${context || this.context}] ${message}`
    );
  }

  info(message: string, context?: string): void {
    console.info(
      "\x1b[36m%s\x1b[0m",
      `${this.now} [${context || this.context}] ${message}`
    );
  }

  warn(message: string, context?: string): void {
    console.warn(
      "\x1b[33m%s\x1b[0m",
      `${this.now} [${context || this.context}] ${message}`
    );
  }

  error(message: string, context?: string): void {
    console.error(
      "\x1b[31m%s\x1b[0m",
      `${this.now} [${context || this.context}] ${message}`
    );
  }
}
