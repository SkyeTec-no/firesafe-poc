import {
  PiNumberSquareOneFill,
  PiNumberSquareTwoFill,
  PiNumberSquareThreeFill,
  PiNumberSquareFourFill,
  PiNumberSquareFiveFill,
} from "react-icons/pi";

import Link from "next/link";
import Modal from "@/components/Modal";
import BackButton from "@/components/Backbutton";
import {
  countries,
  isCountry,
  isSupportedLanguage,
  supportedLanguages,
} from "@/data/countries";
import { getProduct, getProductList } from "@/data/products";

export async function generateStaticParams() {
  const pairs = countries.flatMap((country) =>
    supportedLanguages[country].map((language) => ({ country, language })),
  );
  return (
    await Promise.all(
      pairs.map(async ({ country, language }) => {
        const products = await getProductList(country, language);
        return products.map((product) => ({
          country,
          language,
          slug: product.slug,
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

  const product = await getProduct(country, language, decodeURI(slug));
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <BackButton />
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      {product.body}
    </>
  );
}
