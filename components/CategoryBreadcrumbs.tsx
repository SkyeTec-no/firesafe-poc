import { Category } from "@/data/categories";
import { Country, SupportedLanguage } from "@/data/countries";

function findCategoryNamesBySlug<C extends Country>(
  rootCategoryTree: Category<C>,
  slug: string[],
  language: SupportedLanguage<C>,
): string[] {
  if (slug.length === 0 || rootCategoryTree.id !== slug[0]) {
    throw new Error("Invalid tree path");
  }
  const names = [rootCategoryTree.name[language]];
  let currentCategory = rootCategoryTree;
  for (const id of slug.slice(1)) {
    const child = currentCategory.children?.find((child) => child.id === id);
    if (!child) {
      throw new Error("Invalid tree path");
    }
    currentCategory = child;
    names.push(currentCategory.name[language]);
  }
  return names;
}

interface CategoryBreadcrumbsProps<C extends Country> {
  rootCategoryTree: Category<C>;
  slug: string[];
  baseUrl: string;
  language: SupportedLanguage<C>;
}

export function CategoryBreadcrumbs<C extends Country>({
  rootCategoryTree,
  slug,
  baseUrl,
  language,
}: CategoryBreadcrumbsProps<C>) {
  const names = findCategoryNamesBySlug(rootCategoryTree, slug, language);
  return (
    <div className="breadcrumbs">
      <ul>
        {names.map((name, index) => (
          <li key={name}>
            <a
              href={`${baseUrl}/selector/${slug.slice(0, index + 1).join("/")}`}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
