import { categoryTree } from "./categories";

export default function Home() {
  return (
    <main className="flex flex-col">
      <a href="/hello">Hello-link</a>
      <a href="/world">World-link</a>
      <a href="/solution">Solutions</a>
      <a href={`/selector/${categoryTree.id}`}>Selector</a>
    </main>
  );
}
