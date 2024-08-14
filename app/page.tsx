"use client";

import { useRouter } from "next/navigation";
import { categoryTree } from "./categories";

export default function Home() {
  const router = useRouter();
  router.push(`/selector/${categoryTree.id}`);
  return (
    <main className="flex flex-col">
      <a className="link" href={`/selector/${categoryTree.id}`}>
        Selector
      </a>
    </main>
  );
}
