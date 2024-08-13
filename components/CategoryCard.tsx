import { Category } from "@/app/categories";

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
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Category image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </a>
  );
}
