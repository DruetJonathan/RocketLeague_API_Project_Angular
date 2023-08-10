import {Item} from "./Item";

export enum nameQuality {
  COMMON = "COMMON",
  UNCOMMON = "UNCOMMON",
  RARE = "RARE",
  VERY_RARE = "VERY_RARE",
  IMPORT = "IMPORT",
  EXOTIC = "EXOTIC",
  BLACK_MARKET = "BLACK_MARKET",
  PREMIUM = "PREMIUM",
  LIMITED = "LIMITED"
}

export interface Quality {
  id:number,
  nameQuality:nameQuality,
  itemSet:Item
}
