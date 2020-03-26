import {EventCategory} from "./event-category";

export interface Event {
  id: number;
  title: string;
  date: Date;
  hour?: number;
  category: EventCategory;
  description?: string;
}
