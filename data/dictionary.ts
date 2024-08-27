import { Language } from "./languages";

interface Dictionary {
  loading: string;
  solutions: string;
}

const dictionary: { [key in Language]: Dictionary } = {
  no: {
    loading: "Laster...",
    solutions: "Løsninger",
  },
  dk: {
    loading: "Laster... (på dansk)",
    solutions: "Løsninger (på dansk)",
  },
  en: {
    loading: "Loading...",
    solutions: "Solutions",
  },
  pl: {
    loading: "Ładowanie...",
    solutions: "Rozwiązanie",
  },
};

export function getDictionary(language: Language): Dictionary {
  return dictionary[language];
}
