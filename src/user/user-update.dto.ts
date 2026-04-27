import { IsEmail } from "class-validator";

export class UserUpdateDto {
  constructor(args?: Record<string, any>) {
    if (args) {
      if (args.email) this.email = args.email;
    }
  }

  @IsEmail()
  email: string;
}
