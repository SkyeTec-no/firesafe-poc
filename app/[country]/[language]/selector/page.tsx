import {
  countries,
  isCountry,
  isSupportedLanguage,
  supportedLanguages,
} from "@/data/countries";
import { getSolutionList } from "@/data/solutions";
import { Suspense } from "react";
import Selector from "./Selector";

export function generateStaticParams() {
  return countries.flatMap((country) =>
    supportedLanguages[country].flatMap((language) => ({ country, language })),
  );
}

interface PageProps {
  params: {
    country: string;
    language: string;
  };
}

export default async function Page({
  params: { country, language },
}: PageProps) {
  if (!isCountry(country) || !isSupportedLanguage(country, language))
    throw new Error("Invalid country or language");

  const solutions = await getSolutionList(country, language);

  return (
    <Suspense>
      <Selector
        solutions={solutions}
        baseUrl={`/${country}/${language}`}
        language={language}
      />
    </Suspense>
  );
}
