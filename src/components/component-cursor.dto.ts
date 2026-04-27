import { CursorDto } from "@/common/cursor.dto";
import { ComponentEntityDto } from "./component-entity.dto";

export class ComponentCursorDto extends CursorDto<ComponentEntityDto> {
  constructor(args?: Record<string, any>) {
    super(args);
  }
}
