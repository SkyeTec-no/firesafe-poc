import {
  OptionDetails
} from "@/generated/option-details";
import { get } from "http";

export interface OptionDetail {
  title: string;
  uuid: string;
  iconUrl?: string;
}

export const getOptionTitle = (id: string): string => {
  const entry = OptionDetails[id] as OptionDetail;
  return entry?.title || id;
}

export const getOptionIconUrl = (id: string): string | undefined => {
  const entry = OptionDetails[id] as OptionDetail;
  return entry?.iconUrl;
}

export const matchesFireResistanceClass = (filter: string, value: any): boolean => {
  const filterTitle = getOptionTitle(filter);
  const valueTitle = getOptionTitle(value);

  if (filterTitle?.startsWith("EI") && valueTitle?.startsWith("EI")) {
    return parseInt(filterTitle.slice(2)) <= parseInt(valueTitle.slice(2));
  }
  return filter === value;
};