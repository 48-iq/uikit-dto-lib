import { IsNotEmpty, MaxLength, ValidateIf } from "class-validator";

export class ChangePasswordDto {
  @IsNotEmpty()
  @MaxLength(1000)
  @ValidateIf((p: string) => /[!@#$%^&*-+=.,?]/.test(p), { 
    message: "Password must contain at least one special character !@#$%^&*-+=.,?" 
  })
  newPassword: string

  @IsNotEmpty()
  @MaxLength(1000)
  oldPassword: string
}