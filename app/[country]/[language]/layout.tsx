import { HtmlLanguageSetter } from "@/components/HtmlLanguageSetter";
import { countries, supportedLanguages } from "@/data/countries";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function generateStaticParams() {
  return countries.flatMap((country) =>
    supportedLanguages[country].flatMap((language) => ({ country, language })),
  );
}

export default function Layout({ children }: Props) {
  return (
    <>
      <HtmlLanguageSetter />
      {children}
    </>
  );
}
