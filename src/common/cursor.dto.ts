export class CursorDto<T> {
  itemsLeft: number;
  data: T[];
  startDate: string;
  itemsSkipped: number;
}