import { IsNotEmpty, MaxLength } from "class-validator";

export class RepoUpdateDto {
  @IsNotEmpty()
  @MaxLength(1000)
  name: string;

  @IsNotEmpty()
  @MaxLength(1000)
  description: string;

  components: string[];
}
