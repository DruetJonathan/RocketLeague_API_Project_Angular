import {Item} from "./Item";

export enum nameType {
  BOOST = "BOOST",
  WHEELS = "WHEELS",
  ANTENNA = "ANTENNA",
  BODY = "BODY",
  DECAL = "DECAL",
  GOAL_EXPLOSION = "GOAL_EXPLOSION",
  PAINT_FINISH = "PAINT_FINISH",
  TOPPER = "TOPPER",
  TRAIL = "TRAIL"
}
export interface Type {
  id:number,
  nameType:nameType,
  itemSet:Item,
}
