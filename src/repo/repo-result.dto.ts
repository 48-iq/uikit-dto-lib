import { ResultDto } from "@/common";
import { RepoEntityDto } from "./repo-entity.dto";

export class RepoResultDto extends ResultDto<RepoEntityDto> {
  constructor(args?: Record<string, any>) {
    super(args);
  }
}
