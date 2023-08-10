import {Item} from "./Item";

export enum nameColor{
  NONE = "NONE",
  BLACK = "BLACK",
  BURNT_SIENNA = "BURNT_SIENNA",
  COBALT = "COBALT",
  CRIMSON = "CRIMSON",
  FOREST_GREEN = "FOREST_GREEN",
  GOLD = "GOLD",
  GREY = "GREY",
  LIME = "LIME",
  ORANGE = "ORANGE",
  PINK = "PINK",
  PURPLE = "PURPLE",
  SAFFRON = "SAFFRON",
  TITANIUM_WHITE = "TITANIUM_WHITE"
}

export interface Color {
  id:number,
  nameColor:nameColor,
  itemSet:Item[]
}
