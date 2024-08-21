import { Language } from "./languages";

interface Dictionary {
  loading: string;
  solutions: string;
}

export const dictionary: { [key in Language]: Dictionary } = {
  no: {
    loading: "Laster...",
    solutions: "Løsninger",
  },
  dk: {
    loading: "Laster... (på dansk)",
    solutions: "Løsninger (på dansk)",
  },
  pl: {
    loading: "Ładowanie...",
    solutions: "Rozwiązanie",
  },
};
