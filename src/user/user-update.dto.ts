import { IsEmail } from "class-validator";

export class UserUpdateDto {
  @IsEmail()
  email: string;

 
}