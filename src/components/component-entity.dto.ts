import { EntityDto } from "@/common/entity.dto";

export class ComponentEntityDto extends EntityDto {
  name: string;
  username: string;
  framework: string;
  description: string;
}