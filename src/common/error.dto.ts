export class ErrorDto {
  message: string;
  code: string;
  errorType: string;

  constructor(args: {
    message: string;
    code: string;
    errorType: string;
  }) {
    this.message = args.message;
    this.code = args.code;
    this.errorType = args.errorType;
  }
}