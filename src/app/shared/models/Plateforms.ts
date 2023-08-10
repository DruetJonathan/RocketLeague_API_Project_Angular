import {Item} from "./Item";

export enum namePlateform {
  PC = "PC",
  PLAYSTATION_4 = "PLAYSTATION_4",
  XBOX_ONE = "XBOX_ONE",
  NINTENDO_SWITCH = "NINTENDO_SWITCH"
}
export interface Plateforms {
  id:number,
  namePlateform:namePlateform,
  itemSet:Item
}
