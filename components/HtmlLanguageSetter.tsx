"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

// Sets the HTML language-attribute on the client side using the path parameter
// TODO: Figure out a way to do this server-side to improve SEO
export const HtmlLanguageSetter = () => {
  const { language } = useParams();

  useEffect(() => {
    document.documentElement.setAttribute(
      "lang",
      Array.isArray(language) ? language[0] : language,
    );
  }, [language]);

  return null;
};
