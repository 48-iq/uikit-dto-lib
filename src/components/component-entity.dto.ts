import { EntityDto } from "@/common/entity.dto";

export class ComponentEntityDto extends EntityDto {
  constructor(
    args: {
      id: string;
      name: string;
      username: string;
      framework: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    }
  ){
    super(args);
    this.name = args.name;
    this.username = args.username;
    this.framework = args.framework;
    this.description = args.description;
  }
  name: string;
  username: string;
  framework: string;
  description: string;
}