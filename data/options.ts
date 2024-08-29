import {
  OptionDetails
} from "@/generated/option-details";

export const getOptionTitle = (id: string): string => {
  const entry = OptionDetails[id];
  return entry?.title || id;
}

export const getOptionIconUrl = (id: string): string | undefined => {
  const entry = OptionDetails[id];
  return entry?.iconUrl;
}

export const matchesFireResistanceClass = (filter: string, value: any): boolean => {
  const filterTitle = OptionDetails[filter]?.title;
  const valueTitle = OptionDetails[value]?.title;

  if (filterTitle?.startsWith("EI") && valueTitle?.startsWith("EI")) {
    return parseInt(filterTitle.slice(2)) <= parseInt(valueTitle.slice(2));
  }
  return filter === value;
};