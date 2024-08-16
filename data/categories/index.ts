import { norwayCategoryTree } from "@/data/categories/norway";
import { denmarkCategoryTree } from "./denmark";
import { Country, SupportedLanguage } from "../countries";

export interface Category<C extends Country = Country> {
  id: string;
  name: { [key in SupportedLanguage<C>]: string };
  children?: Category<C>[];
  imageUrl?: string;
}

const categoryTrees = {
  norway: norwayCategoryTree,
  denmark: denmarkCategoryTree,
};

export function getCategoryTree<C extends Country>(country: C): Category<C> {
  return categoryTrees[country] as Category<C>;
}
