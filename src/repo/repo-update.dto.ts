import { ArrayNotEmpty, IsNotEmpty, MaxLength } from "class-validator";

export class RepoUpdateDto {
  constructor(args?: Record<string, any>) {
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
