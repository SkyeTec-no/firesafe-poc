import {
  OptionDetails
} from "@/generated/option-details";

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
  if (filter?.startsWith("EI") && value?.startsWith("EI")) {
    return parseInt(filter.slice(2)) <= parseInt(value.slice(2));
  }
  return filter === value;
};