import {Item} from "./Item";

export interface Certification {
  id:number,
  nameCertification:nameCertification,
  itemSet:Item[]
}
export enum nameCertification {
  ACROBAT = "ACROBAT",
  AVIATOR = "AVIATOR",
  BALLISTIC = "BALLISTIC",
  BICYCLE_GOAL = "BICYCLE_GOAL",
  CLEAR = "CLEAR",
  CREATOR = "CREATOR",
  GOALKEEPER = "GOALKEEPER",
  JUGGLER = "JUGGLER",
  PARAGON = "PARAGON",
  PLAYMAKER = "PLAYMAKER",
  SCORER = "SCORER",
  SHOW_OFF = "SHOW_OFF",
  SNIPER = "SNIPER",
  STRIKER = "STRIKER",
  SWEET_TOOTH = "SWEET_TOOTH"
}
