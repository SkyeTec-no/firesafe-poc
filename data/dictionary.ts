import { Language } from "./languages";

interface Dictionary {
  loading: string;
  products: string;
}

export const dictionary: { [key in Language]: Dictionary } = {
  no: {
    loading: "Laster...",
    products: "Produkter",
  },
  dk: {
    loading: "Laster... (på dansk)",
    products: "Produkter (på dansk)",
  },
  pl: {
    loading: "Ładowanie...",
    products: "Produkty",
  },
};
