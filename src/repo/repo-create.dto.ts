import { ArrayNotEmpty, IsNotEmpty } from "class-validator";

export class RepoCreateDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  @ArrayNotEmpty()
  components: string[];
}