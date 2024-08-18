import { Country, SupportedLanguage } from "@/data/countries";
import { norwayProductList } from "@/data/products/norway";
import { denmarkProductList } from "@/data/products/denmark";

export interface Content {
  type: "PDF" | "HTML";
  title: string;
  fileName?: string;
  contentId?: string;
}

export interface PageContent {
  type: string;
  title: string;
  steps?: Steps[];
  additionalSections?: Steps[];
}

export interface Steps {
  title: string;
  description: string;
}

export interface Product<C extends Country = Country> {
  id: string;
  name: { [key in SupportedLanguage<C>]: string };
  categories: string[];
  keywords: string[];
  content: Content[];
  pageContent?: PageContent;
}

const productLists = {
  norway: norwayProductList,
  denmark: denmarkProductList,
};

export function getProductList<C extends Country>(country: C): Product<C>[] {
  return productLists[country] as Product<C>[];
}
