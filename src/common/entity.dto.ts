export class EntityDto {
  id: number;
  createdAt: string;
  updatedAt: string;

  constructor(args: {
    id: number;
    createdAt: string;
    updatedAt: string;
  }) {
    this.id = args.id;
    this.createdAt = args.createdAt;
    this.updatedAt = args.updatedAt;
  }
}
