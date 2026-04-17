export class CursorDto<T> {
  itemsLeft: number;
  data: T[];
  nextItemTimestamp: string;
  nextSkipItems: number;

  constructor(args: {
    itemsLeft: number;
    data: T[];
    nextItemTimestamp: string;
    nextSkipItems: number;
  }) {
    this.itemsLeft = args.itemsLeft;
    this.data = args.data;
    this.nextItemTimestamp = args.nextItemTimestamp;
    this.nextSkipItems = args.nextSkipItems;
  }
}