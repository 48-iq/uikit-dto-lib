import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";

export class UserCreateDto {
  
  @IsNotEmpty()
  @MaxLength(1000)
  username: string;

  @IsNotEmpty()
  @MaxLength(1000)
  @IsEmail()
  email: string;
}
