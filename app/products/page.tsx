"use client";

import { useSearchParams } from "next/navigation";
import { products } from "@/app/products";
import { Suspense } from "react";
import { ProductCard } from "@/components/ProductCard";

function ProductPage() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  if (!categoryId) throw new Error("Missing categoryId");
  const selectedproducts = products.filter((solution) => solution.categories.includes(categoryId));

  return (
    <>
      <h2 className="text-2xl font-bold mb-2">Products</h2>
      <div className="flex flex-wrap gap-2">
        {selectedproducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default function Page() {
  return (
    // Needs to be wrapped in suspense when using useSearchParams: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
    <Suspense>
      <ProductPage />
    </Suspense>
  );
}
