import { getCategoryTree } from "@/data/categories";
import { countries, supportedLanguages } from "@/data/countries";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      {countries.flatMap((country) => {
        const categoryTree = getCategoryTree(country);
        return supportedLanguages[country].map((language) => (
          <div key={country + language}>
            <Link
              className="link"
              href={`/${country}/${language}/selector/${categoryTree.id}`}
            >
              {country} + {language}
            </Link>
          </div>
        ));
      })}
    </main>
  );
}
