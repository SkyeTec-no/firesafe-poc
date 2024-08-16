"use client";

import { useRouter } from "next/navigation";
import { getCategoryTree } from "@/data/categories";
import { useEffect } from "react";
import { isCountry, isSupportedLanguage } from "@/data/countries";

interface Props {
  params: {
    country: string;
    language: string;
  };
}

export default function Home({ params: { country, language } }: Props) {
  if (!isCountry(country) || !isSupportedLanguage(country, language))
    throw new Error("Invalid country or language");

  const router = useRouter();
  const baseUrl = `/${country}/${language}`;

  const categoryTree = getCategoryTree(country);

  useEffect(() => {
    if (typeof window !== "undefined") {
      router.push(`${baseUrl}/selector/${categoryTree.id}`);
    }
  }, [baseUrl, categoryTree.id, router]);

  return (
    <main className="flex flex-col">
      <a
        className="link"
        href={`/${country}/${language}/selector/${categoryTree.id}`}
      >
        {categoryTree.name[language]}
      </a>
    </main>
  );
}
