import RandomFireIcon from "./RandomFireIcon";
import Link from "next/link";

interface CategoryCardProps {
  href: string;
  categoryName: string;
}

export function CategoryCard({ href, categoryName }: CategoryCardProps) {
  return (
    <Link className="card w-96 border border-1 hover:shadow-xl" href={href}>
      <figure>
        <RandomFireIcon className="py-8 text-firesafe-orange" size={160} />
      </figure>
      <div className="card-body pt-0">
        <h2 className="card-title">{categoryName}</h2>
      </div>
    </Link>
  );
}
