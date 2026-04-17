import { IsNotEmpty, MaxLength } from "class-validator";

export class SignInDto {
  
  @IsNotEmpty()
  @MaxLength(1000)
  username?: string;

  @IsNotEmpty()
  @MaxLength(1000)
  password?: string;

}