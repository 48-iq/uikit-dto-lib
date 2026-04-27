import { EntityDto } from "@/common/entity.dto";

export class ComponentEntityDto extends EntityDto {
  constructor(args?: Record<string, any>) {
    super(args);
    if (args) {
      if (args.name) this.name = args.name;
      if (args.username) this.username = args.username;
      if (args.framework) this.framework = args.framework;
      if (args.description) this.description = args.description;
    }
  }

  name: string;
  username: string;
  framework: string;
  description: string;
  version: string;
}
