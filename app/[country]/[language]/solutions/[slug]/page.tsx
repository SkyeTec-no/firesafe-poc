import BackButton from "@/components/Backbutton";
import {
  countries,
  isCountry,
  isSupportedLanguage,
  supportedLanguages,
} from "@/data/countries";
import { getSolution, getSolutionList } from "@/data/solutions";

export async function generateStaticParams() {
  const pairs = countries.flatMap((country) =>
    supportedLanguages[country].map((language) => ({ country, language })),
  );
  return (
    await Promise.all(
      pairs.map(async ({ country, language }) => {
        const solutions = await getSolutionList(country, language);
        return solutions.map((solution) => ({
          country,
          language,
          slug: solution.slug,
        }));
      }),
    )
  ).flat();
}

interface PageProps {
  params: {
    country: string;
    language: string;
    slug: string;
  };
}

export default async function Page({
  params: { country, language, slug },
}: PageProps) {
  if (!isCountry(country) || !isSupportedLanguage(country, language))
    throw new Error("Invalid country or language");

  const solution = await getSolution(country, language, decodeURI(slug));
  if (!solution) {
    return <div>Solution not found</div>;
  }

  return (
    <>
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">{solution.title}</h1>
      {solution.body}
    </>
  );
}
