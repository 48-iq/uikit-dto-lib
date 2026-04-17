import { EntityDto } from "../common/entity.dto";

export class UserEntityDto extends EntityDto {
  email: string;

  constructor(args: { 
      id: string; 
      createdAt: string; 
      updatedAt: string; 
      email: string;
  }) {
    super(args);
    this.email = args.email;
  }
}

