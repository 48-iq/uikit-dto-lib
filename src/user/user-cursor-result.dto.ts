import { CursorResultDto } from "../common/cursor-result.dto";
import { UserEntityDto } from "./user-entity.dto";

export class UserCursorResultDto extends CursorResultDto<UserEntityDto> {
  constructor(args?: Record<string, any>) {
    super(args);
  }
}
