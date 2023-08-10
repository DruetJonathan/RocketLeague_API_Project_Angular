import {Color} from "./Color";
import {Plateforms} from "./Plateforms";
import {Certification} from "./Certification";
import {Quality} from "./Quality";
import {Type} from "./Type";



export interface Item {
  id:number,
  itemName:string,
  certificationSet: Certification[],
  colorSet:Color[],
  qualitySet:Quality[],
  platefromsSet:Plateforms[],
  typeSet:Type[],
  averagePrice:number
}
