import { IsNotEmpty, MaxLength } from "class-validator";
import { EntityDto } from "../common/entity.dto";

export class UserEntityDto extends EntityDto {
  constructor(args?: Record<string, any>) {
    super(args);
    if (args) {
      if (args.email) this.email = args.email;
    }
  }

  @IsNotEmpty()
  @MaxLength(1000)
  username: string;

  @IsNotEmpty()
  @MaxLength(1000)
  email: string;
}
