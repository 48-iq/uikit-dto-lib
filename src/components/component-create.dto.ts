import { IsNotEmpty, MaxLength } from "class-validator";

export class ComponentCreateDto {
  constructor(args?: Record<string, any>) {
    if (args) {
      if (args.name) this.name = args.name;
      if (args.framework) this.framework = args.framework;
      if (args.description) this.description = args.description;
      if (args.fileExtension) this.fileExtension = args.fileExtension;
      if (args.css) this.css = args.css;
      if (args.dependencies) this.dependencies = args.dependencies;
    }
  }

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
