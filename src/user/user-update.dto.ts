import { IsEmail } from "class-validator";

export class UserUpdateDto {
  @IsEmail()
  email: string;

  constructor(args: { email: string }) {
    this.email = args.email;
  }
}