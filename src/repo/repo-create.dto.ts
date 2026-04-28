import { ArrayNotEmpty, IsNotEmpty } from "class-validator";

export class RepoCreateDto {
  constructor(args?: Record<string, any>) {
    if (args) {
      if (args.name) this.name = args.name;
      if (args.description) this.description = args.description;
      if (args.components) this.components = args.components;
    }
  }

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @ArrayNotEmpty()
  components: string[];

  @IsNotEmpty()
  version: string;
}
