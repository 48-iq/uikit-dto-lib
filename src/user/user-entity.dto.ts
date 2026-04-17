import { EntityDto } from "../common/entity.dto";

export class UserEntityDto extends EntityDto {
  username: string;
  email: string;

  constructor(args: { 
      id: number; 
      createdAt: string; 
      updatedAt: string; 
      email: string;
      username: string
  }) {
    super(args);
    this.email = args.email;
    this.username = args.username;
  }
}

