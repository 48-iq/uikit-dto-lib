import { CursorResultDto } from "@/common";
import { RepoEntityDto } from "./repo-entity.dto";

export class RepoCursorResultDto extends CursorResultDto<RepoEntityDto> {
  constructor(args?: Record<string, any>) {
    super(args);
  }
}
