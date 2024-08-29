"use client";

import { Solution } from "@/data/solutions";
import { useSearchParams } from "next/navigation";
import { Breadcrumbs } from "./Breadcrumb";
import { Language } from "@/data/languages";
import { LinkCard } from "@/components/LinkCard";
import { getOptionIconUrl, getOptionTitle, matchesFireResistanceClass } from "@/data/options";

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

  const solutionTitleSort = (a: Solution, b: Solution) => a.title.localeCompare(b.title);
  const choiceTitleSort = (a: string, b: string) => getOptionTitle(a).localeCompare(getOptionTitle(b));

  const filteredSolutions = solutions.filter((solution) => {
    for (const [filterKey, filterValue] of params.entries()) {
      const keyType = filterKey as keyof Solution;
      const solutionValue = solution[keyType];

      if (Array.isArray(solutionValue) && solutionValue.length === 0) {
        continue;
      }

      if (keyType === "fireResistanceClass") {
        if (!matchesFireResistanceClass(filterValue, solutionValue))
          return false;
      }
      else if (filterValue !== solutionValue) {
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
    const choices = [
      ...new Set(
        filteredSolutions
          .map((solution) => solution[propertyToChoose])
          .filter(propVal => propVal.length > 0)
      ),
    ];

    content = choices.sort(choiceTitleSort).map((choice, index) => {
      const newParams = new URLSearchParams(params);
      newParams.set(propertyToChoose, choice);
      return (
        <LinkCard
          key={index}
          title={getOptionTitle(choice)}
          imageUrl={getOptionIconUrl(choice)}
          href={`?${newParams.toString()}`}
        />
      );
    });
  } else {
    content = filteredSolutions.sort(solutionTitleSort).map((solution, index) => (
      <LinkCard
        key={solution.uuid}
        title={solution.title ?? `Solution ${index + 1}`}
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
