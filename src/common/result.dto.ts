import { ErrorDto } from "./error.dto";

export class ResultDto<T> {
  success: boolean;
  error?: ErrorDto;
  result?: T;

  constructor(args: {
    error?: ErrorDto;
    result?: T;
  }) {
    if (args.error) {
      this.success = false;
      this.error = args.error;
    } else {
      this.success = true;
      this.result = args.result;
    }
  }
}