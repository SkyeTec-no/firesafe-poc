import { Language } from "@/data/languages";

export const countries = ["norway", "denmark"] as const;
export type Country = (typeof countries)[number];

const norwayLanguages = ["no", "en"] as const;
const denmarkLanguages = ["dk"] as const;

export const supportedLanguages: {
  norway: readonly (typeof norwayLanguages)[number][];
  denmark: readonly (typeof denmarkLanguages)[number][];
} = {
  norway: norwayLanguages,
  denmark: denmarkLanguages,
} as const;

export type SupportedLanguagesMap = typeof supportedLanguages;
export type SupportedLanguage<C extends Country> =
  SupportedLanguagesMap[C][number];

export function isCountry(country: string): country is Country {
  return countries.includes(country as Country);
}

export function isSupportedLanguage<C extends Country>(
  country: C,
  language: string,
): language is SupportedLanguage<C> {
  return (supportedLanguages[country] as readonly string[]).includes(
    language as SupportedLanguage<C>,
  );
}

export function getCountryLanguagePair({
  country,
  language,
}: {
  country: string;
  language: string;
}): [Country, Language] | null {
  if (isCountry(country)) {
    const validLanguages = supportedLanguages[country];
    if ((validLanguages as readonly string[]).includes(language)) {
      return [country, language as Language];
    }
  }
  return null;
}
