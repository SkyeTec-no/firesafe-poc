import SolutionSelector from "@/components/SolutionSelector";
import { isCountry, isSupportedLanguage } from "@/data/countries";
import { getSolutionList } from "@/data/solutions";
interface PageProps {
  params: {
    country: string;
    language: string;
  };
}

export default async function Page({ params: { country, language } }: PageProps) {
  if (!isCountry(country) || !isSupportedLanguage(country, language)) throw new Error("Invalid country or language");
  const solutionList = await getSolutionList(country, language);
  const baseUrl = `/${country}/${language}`;
  return <SolutionSelector baseUrl={baseUrl} solutionsList={solutionList} />;
}
