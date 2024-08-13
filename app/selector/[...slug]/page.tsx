import { categoryTree, Category } from "@/app/categories";
import { CategoryBreadcrumbs } from "@/components/CategoryBreadcrumbs";
import { CategoryCard } from "@/components/CategoryCard";

// Returns a list of all possible sequences of IDs when traversing the category tree from the root to any node unidirectionally.
function traverseCategoryTree(category: Category, parentPath: string[] = []): string[][] {
  const currentPath = [...parentPath, category.id];
  if (category.children) {
    const childPaths = category.children.flatMap((child) => traverseCategoryTree(child, currentPath));
    return [currentPath, ...childPaths];
  }
  return [currentPath];
}

export function generateStaticParams() {
  const slugs = traverseCategoryTree(categoryTree);
  return slugs.map((slug) => ({ slug }));
}

interface PageProps {
  params: {
    slug: string[];
  };
}

function findCategoryBySlug(rootCategory: Category, slug: string[]): Category | undefined {
  if (slug.length === 0 || rootCategory.id !== slug[0]) {
    return undefined;
  }
  let currentCategory = rootCategory;
  for (const id of slug.slice(1)) {
    const child = currentCategory.children?.find((child) => child.id === id);
    if (!child) {
      return undefined;
    }
    currentCategory = child;
  }
  return currentCategory;
}

export default function Page({ params: { slug } }: PageProps) {
  const category = findCategoryBySlug(categoryTree, slug);
  if (!category) throw new Error("Category not found");
  return (
    <div>
      <CategoryBreadcrumbs rootCategoryTree={categoryTree} slug={slug} />
      <div className="flex flex-wrap gap-2">
        {category.children?.map((category) => (
          <CategoryCard key={category.id} category={category} slug={slug} />
        ))}
      </div>
    </div>
  );
}
