"use client";

import { useSearchParams } from "next/navigation";
import { dictionary } from "@/data/dictionary";
import { Suspense, useEffect, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import BackButton from "@/components/Backbutton";
import {
  Country,
  isCountry,
  isSupportedLanguage,
  SupportedLanguage,
} from "@/data/countries";
import { getProductList, Product } from "@/data/products";

interface ProductListProps<C extends Country> {
  country: C;
  language: SupportedLanguage<C>;
}

function ProductList<C extends Country>({
  country,
  language,
}: ProductListProps<C>) {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState<Product<C>[]>([]);
  const searchParams = useSearchParams();

  const productList = getProductList(country);

  const baseUrl = `/${country}/${language}`;

  useEffect(() => {
    const categoryId = searchParams.get("categoryId");
    if (!categoryId) throw new Error("Missing categoryId");
    setSelectedProducts(
      productList.filter((product) => product.categories.includes(categoryId)),
    );
    setIsLoading(false);
  }, [searchParams, productList]);

  return isLoading ? (
    <p>{dictionary[language].loading}</p>
  ) : (
    <div className="flex flex-wrap gap-2">
      {selectedProducts.map((product) => (
        <ProductCard
          key={product.id}
          productName={product.name[language]}
          productKeywords={product.keywords}
          href={`${baseUrl}/products/${product.id}`}
        />
      ))}
    </div>
  );
}

interface PageProps {
  params: {
    country: string;
    language: string;
  };
}

export default function Page({ params: { country, language } }: PageProps) {
  if (!isCountry(country) || !isSupportedLanguage(country, language))
    throw new Error("Invalid country or language");

  return (
    // Needs to be wrapped in suspense when using useSearchParams: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
    <>
      <h2 className="mb-2 mt-2">{dictionary[language].products}</h2>
      <BackButton />
      <Suspense>
        <ProductList country={country} language={language} />
      </Suspense>
    </>
  );
}
