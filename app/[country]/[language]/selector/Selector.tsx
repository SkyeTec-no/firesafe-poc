"use client";

import { Solution } from "@/data/solutions";
import { useSearchParams } from "next/navigation";
import { Breadcrumbs } from "./Breadcrumb";
import { Language } from "@/data/languages";
import { LinkCard } from "@/components/LinkCard";

interface SelectorProps {
  solutions: Solution[];
  baseUrl: string;
  language: Language;
}

export default function Selector({
  solutions,
  baseUrl,
  language,
}: SelectorProps) {
  const params = useSearchParams();

  const filteredSolutions = solutions.filter((solution) => {
    for (const [key, value] of params.entries()) {
      if (solution[key as keyof Solution] !== value) {
        return false;
      }
    }
    return true;
  });

  const properties = [
    "construction",
    "constructionType",
    "fireResistanceClass",
    "numberOfPenetrations",
    "penetrationGroup",
    "penetrationType",
    "insulationType",
    "dimensions",
    "product",
  ] as const;

  const propertyToChoose = properties.find(
    (property) =>
      !params.has(property) &&
      filteredSolutions.map((solution) => solution[property]).some(Boolean),
  );

  let content;
  if (propertyToChoose) {
    const choices = filteredSolutions
      .map((solution) => solution[propertyToChoose])
      .filter(Boolean);

    content = choices.map((choice, index) => {
      const newParams = new URLSearchParams(params);
      newParams.set(propertyToChoose, choice);
      return (
        <LinkCard
          key={index}
          title={choice}
          href={`?${newParams.toString()}`}
        />
      );
    });
  } else {
    content = filteredSolutions.map((solution, index) => (
      <LinkCard
        key={solution.uuid}
        title={`Solution ${index + 1}`}
        href={`${baseUrl}/solutions/${solution.uuid}`}
      />
    ));
  }

  return (
    <>
      <Breadcrumbs
        params={params}
        baseUrl={`${baseUrl}/selector`}
        language={language}
      />
      <div className="flex flex-wrap gap-2 mt-1">{content}</div>
    </>
  );
}
