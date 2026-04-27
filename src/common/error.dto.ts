export class ErrorDto {
  message: string;
  code: string;
  errorType: string;

  constructor(args?: Record<string, any>) {
    if (args) {
      if (args.message) this.message = args.message;
      if (args.code) this.code = args.code;
      if (args.errorType) this.errorType = args.errorType;
    }
  }
}