import { CursorDto } from "./cursor.dto";
import { ResultDto } from "./result.dto";

export class CursorResultDto<T> extends ResultDto<CursorDto<T>> {}

