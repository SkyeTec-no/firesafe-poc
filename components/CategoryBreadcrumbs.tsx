import { Category } from "@/app/categories";

interface CategoryBreadcrumbsProps {
  rootCategoryTree: Category;
  slug: string[];
}

function findCategoryNamesBySlug(
  rootCategoryTree: Category,
  slug: string[],
): string[] {
  if (slug.length === 0 || rootCategoryTree.id !== slug[0]) {
    throw new Error("Invalid tree path");
  }
  const names = [rootCategoryTree.name];
  let currentCategory = rootCategoryTree;
  for (const id of slug.slice(1)) {
    const child = currentCategory.children?.find((child) => child.id === id);
    if (!child) {
      throw new Error("Invalid tree path");
    }
    currentCategory = child;
    names.push(currentCategory.name);
  }
  return names;
}

export function CategoryBreadcrumbs({
  rootCategoryTree,
  slug,
}: CategoryBreadcrumbsProps) {
  const names = findCategoryNamesBySlug(rootCategoryTree, slug);
  return (
    <div className="breadcrumbs">
      <ul>
        {names.map((name, index) => (
          <li key={name}>
            <a href={`/selector/${slug.slice(0, index + 1).join("/")}`}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
