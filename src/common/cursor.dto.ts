export class CursorDto<T> {

  constructor(args?: Record<string, any>) {
    if (args) {
      if (args.itemsLeft) this.itemsLeft = args.itemsLeft;
      if (args.data) this.data = args.data;
      if (args.startDate) this.startDate = args.startDate;
      if (args.itemsSkipped) this.itemsSkipped = args.itemsSkipped;
    }
  }

  itemsLeft: number;
  data: T[];
  startDate: string;
  itemsSkipped: number;
}