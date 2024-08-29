import { getDictionary } from "@/data/dictionary";
import { Language } from "@/data/languages";
import { getOptionTitle } from "@/data/options";
import Link from "next/link";
import { ReadonlyURLSearchParams } from "next/navigation";

interface BreadcrumbsProps {
  params: ReadonlyURLSearchParams;
  baseUrl: string;
  language: Language;
}

export function Breadcrumbs({ params, baseUrl, language }: BreadcrumbsProps) {
  const dictionary = getDictionary(language);
  const entries = Array.from(params.entries());
  return (
    <div className="breadcrumbs">
      <ul>
        <li>
          <Link href={baseUrl}>{dictionary?.solutions}</Link>
        </li>
        {entries.map(([key, value], index) => {
          const newParams = new URLSearchParams(entries.slice(0, index + 1));
          return (
            <li key={key}>
              <Link href={`?${newParams.toString()}`}>{getOptionTitle(value)}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
