import { categoryTree } from "./categories";

export default function Home() {
  return (
    <main className="flex flex-col">
      <a className="link" href={`/selector/${categoryTree.id}`}>
        Selector
      </a>
    </main>
  );
}
