"use client";

import { useSearchParams } from "next/navigation";
import { products } from "@/app/products";
import { Suspense } from "react";

function ProductPage() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  if (!categoryId) throw new Error("Missing categoryId");
  const solutions = products.filter((solution) =>
    solution.categories.includes(categoryId),
  );

  return (
    <>
      <a href="/">Back</a>
      <h1>categoryId: {categoryId}</h1>
      <h2>Products:</h2>
      {solutions.map((solution) => (
        <div key={solution.id}>
          <h3>{solution.name}</h3>
        </div>
      ))}
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
