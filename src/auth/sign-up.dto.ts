import { IsEmail, IsNotEmpty, MaxLength, ValidateIf } from "class-validator";

export class SignUpDto {

  @IsNotEmpty()
  @MaxLength(1000)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MaxLength(1000)
  username: string;


  @IsNotEmpty()
  @MaxLength(1000)
  @ValidateIf((p: string) => /[!@#$%^&*-+=.,?]/.test(p), {
    message: "Password must contain at least one special character !@#$%^&*-+=.,?"
  })
  password: string;
}