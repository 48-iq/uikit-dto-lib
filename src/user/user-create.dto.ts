import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";

export class UserCreateDto {
  
  constructor(args?: Record<string, any>) {
    if (args) {
      if (args.username) this.username = args.username;
      if (args.email) this.email = args.email;
    }
  }

  @IsNotEmpty()
  @MaxLength(1000)
  username: string;

  @IsNotEmpty()
  @MaxLength(1000)
  @IsEmail()
  email: string;
}
