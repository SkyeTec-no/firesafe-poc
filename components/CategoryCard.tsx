import { Category } from "@/data/categories";
import RandomFireIcon from "./RandomFireIcon";

interface CategoryCardProps {
  category: Category;
  slug: string[];
}

export function CategoryCard({ category, slug }: CategoryCardProps) {
  const { id, name, children } = category;
  const href = children
    ? `/selector/${slug.join("/")}/${id}`
    : `/products?${new URLSearchParams({ categoryId: id })}`;

  return (
    <a className="card w-96 border border-1 hover:shadow-xl" href={href}>
      <figure>
        <RandomFireIcon className="py-8" size={160} />
      </figure>
      <div className="card-body pt-0">
        <h2 className="card-title">{name}</h2>
      </div>
    </a>
  );
}
