import { IsNotEmpty, MaxLength } from "class-validator";

export class ComponentCreateDto {
  
  @IsNotEmpty()
  @MaxLength(1000)
  name: string;

  @IsNotEmpty()
  @MaxLength(1000)
  framework: string;

  @IsNotEmpty()
  @MaxLength(1000)
  description: string;

  @IsNotEmpty()
  @MaxLength(10)
  fileExtension: string;


  @IsNotEmpty()
  @MaxLength(1000)
  css: string;

  @IsNotEmpty()
  @MaxLength(1000)
  dependencies: string;

}