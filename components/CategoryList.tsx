import { Category } from "@/app/categories";

interface CategoryListProps {
  category: Category;
  slug: string[];
}

export function CategoryList({ category, slug }: CategoryListProps) {
  return (
    <div className="flex flex-col">
      {category.children?.map(({ id, name, children }) => {
        if (children) {
          return (
            <a key={id} href={`/selector/${slug.join("/")}/${id}`}>
              {name}
            </a>
          );
        } else {
          const searchParams = new URLSearchParams({ categoryId: id });
          return (
            <a key={id} href={`/solutions?${searchParams}`}>
              {name}
            </a>
          );
        }
      })}
    </div>
  );
}
