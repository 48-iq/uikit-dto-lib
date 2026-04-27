import { ErrorDto } from "./error.dto";

export class ResultDto<T> {
  success: boolean;
  error?: ErrorDto;
  result?: T;

  constructor(args?: Record<string, any>) {
    if (args) {
      if (args.success) this.success = args.success;
      if (args.error) this.error = args.error;
      if (args.result) this.result = args.result;
    }
  }
}