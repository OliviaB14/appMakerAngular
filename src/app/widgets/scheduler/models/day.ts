import {Event} from "./event";

export interface Day {
  name: string;
  eventsList?: Event[];
  isDisabled: boolean;
}
