import {
  OptionDetails
} from "@/generated/option-details";
import { Constructions, ConstructionTypes, Dimensions, FireResistanceClasses, InsulationTypes, NumberOfPenetrations, PenetrationGroups, PenetrationTypes, Products } from "@/generated/types";


export const getOptionTitle = (id: ConstructionTypes | Constructions | Dimensions | FireResistanceClasses | InsulationTypes | NumberOfPenetrations | PenetrationGroups | PenetrationTypes | Products): string => {
  const entry = OptionDetails[id];
  return entry?.title || id;
}

export const getOptionIconUrl = (id: ConstructionTypes | Constructions | Dimensions | FireResistanceClasses | InsulationTypes | NumberOfPenetrations | PenetrationGroups | PenetrationTypes | Products): string | undefined => {
  const entry = OptionDetails[id];
  return entry?.iconUrl;
}

export const matchesFireResistanceClass = (filter: FireResistanceClasses, value: FireResistanceClasses): boolean => {
  const filterTitle = OptionDetails[filter]?.title;
  const valueTitle = OptionDetails[value]?.title;

  if (filterTitle?.startsWith("EI") && valueTitle?.startsWith("EI")) {
    return parseInt(filterTitle.slice(2)) <= parseInt(valueTitle.slice(2));
  }
  return filter === value;
};