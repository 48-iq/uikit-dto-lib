import { EntityDto } from "@/common";
import { ArrayNotEmpty, IsNotEmpty, MaxLength } from "class-validator";

export class RepoEntityDto extends EntityDto {
  @IsNotEmpty()
  @MaxLength(1000)
  name: string;

  @IsNotEmpty()
  @MaxLength(1000)
  description: string;

  @ArrayNotEmpty()
  components: string[];
}