import { EntityDto } from "@/common";
import { ArrayNotEmpty, IsNotEmpty, MaxLength } from "class-validator";

export class RepoEntityDto extends EntityDto {

  constructor(args?: Record<string, any>) {
    super(args);
    if (args) {
      if (args.name) this.name = args.name;
      if (args.description) this.description = args.description;
      if (args.components) this.components = args.components;
    }
  }

  @IsNotEmpty()
  @MaxLength(1000)
  name: string;

  @IsNotEmpty()
  @MaxLength(1000)
  description: string;

  @ArrayNotEmpty()
  components: string[];
}