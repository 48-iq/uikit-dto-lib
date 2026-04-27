export class EntityDto {
  id: string;
  createdAt: string;
  updatedAt: string;

  constructor(args?: Record<string, any>) {
    if (args) {
      if (args.id) this.id = args.id;
      if (args.createdAt) this.createdAt = args.createdAt;
      if (args.updatedAt) this.updatedAt = args.updatedAt;
    }
  }
}
