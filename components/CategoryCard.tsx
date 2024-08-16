import { Category } from "@/data/categories";
import RandomFireIcon from "./RandomFireIcon";

interface CategoryCardProps {
  href: string;
  categoryName: string;
}

export function CategoryCard({ href, categoryName }: CategoryCardProps) {
  return (
    <a className="card w-96 border border-1 hover:shadow-xl" href={href}>
      <figure>
        <RandomFireIcon className="py-8" size={160} />
      </figure>
      <div className="card-body pt-0">
        <h2 className="card-title">{categoryName}</h2>
      </div>
    </a>
  );
}
