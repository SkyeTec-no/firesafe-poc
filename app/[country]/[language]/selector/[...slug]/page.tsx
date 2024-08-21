import { Category, getCategoryTree } from "@/data/categories";
import { CategoryBreadcrumbs } from "@/components/CategoryBreadcrumbs";
import { CategoryCard } from "@/components/CategoryCard";
import {
  countries,
  Country,
  isCountry,
  isSupportedLanguage,
  supportedLanguages,
} from "@/data/countries";
import { ProductCard } from "@/components/ProductCard";
import { getProductList } from "@/data/products";

// Returns a list of all possible sequences of IDs when traversing the category tree from the root to any node unidirectionally.
function traverseCategoryTree<C extends Country>(
  category: Category<C>,
  parentPath: string[] = [],
): string[][] {
  const currentPath = [...parentPath, category.id];
  if (category.children) {
    const childPaths = category.children.flatMap((child) =>
      traverseCategoryTree(child, currentPath),
    );
    return [currentPath, ...childPaths];
  }
  return [currentPath];
}

export function generateStaticParams() {
  return countries.flatMap((country) =>
    supportedLanguages[country].flatMap((language) => {
      const categoryTree = getCategoryTree(country);
      const slugs = traverseCategoryTree(categoryTree);
      return slugs.map((slug) => ({ country, language, slug }));
    }),
  );
}

function findCategoryBySlug<C extends Country>(
  category: Category<C>,
  slug: string[],
): Category<C> | undefined {
  if (slug.length === 0 || category.id !== slug[0]) return undefined;
  if (slug.length === 1) return category;
  for (const child of category.children || []) {
    const result = findCategoryBySlug(child, slug.slice(1));
    if (result) return result;
  }
}

interface PageProps {
  params: {
    country: string;
    language: string;
    slug: string[];
  };
}

export default async function Page({
  params: { country, language, slug },
}: PageProps) {
  if (!isCountry(country) || !isSupportedLanguage(country, language))
    throw new Error("Invalid country or language");

  const categoryTree = getCategoryTree(country);
  const category = findCategoryBySlug(categoryTree, slug);

  if (!category) throw new Error("Category not found");

  const baseUrl = `/${country}/${language}`;

  return (
    <div>
      <CategoryBreadcrumbs
        rootCategoryTree={categoryTree}
        slug={slug}
        baseUrl={baseUrl}
        language={language}
      />
      <div className="flex flex-wrap gap-2 mt-1">
        {category.children
          ? category.children.map((child) => (
              <CategoryCard
                key={child.id}
                href={`${baseUrl}/selector/${slug.join("/")}/${child.id}`}
                categoryName={child.name[language]}
                imageUrl={child.imageUrl}
              />
            ))
          : (await getProductList(country, language))
              .filter((product) => product.categories.includes(category.id))
              .map((product) => (
                <ProductCard
                  key={product.slug}
                  productName={product.title}
                  productKeywords={product.keywords}
                  href={`${baseUrl}/products/${product.slug}`}
                />
              ))}
      </div>
    </div>
  );
}
