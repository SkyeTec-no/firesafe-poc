"use client";

import { useRouter } from "next/navigation";
import { categoryTree } from "@/data/categories";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      router.push(`/selector/${categoryTree.id}`);
    }
  }, [router]);

  return (
    <main className="flex flex-col">
      <a className="link" href={`/selector/${categoryTree.id}`}>
        Selector
      </a>
    </main>
  );
}
