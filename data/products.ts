import { Country, SupportedLanguage } from "./countries";
import path from "path";
import process from "process";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { useMDXComponents } from "@/mdx-components";
import { ReactElement } from "react";
import { glob } from "glob";

export interface Product {
  title: string;
  slug: string;
  country: Country;
  categories: string[];
  keywords: string[];
  body: ReactElement;
}

interface FrontMatter {
  title: string;
  slug: string;
  country: Country;
  categories: string;
  keywords: string;
}

export async function getSolutionFromFile(file: string): Promise<Product> {
  const markdownContent = await fs.readFile(file);
  const { content: body, frontmatter } = await compileMDX<FrontMatter>({
    source: markdownContent,
    components: useMDXComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      },
    },
  });
  return {
    ...frontmatter,
    categories: frontmatter.categories.split(","),
    keywords: frontmatter.keywords.split(","),
    body,
  };
}

export async function getProduct<C extends Country>(
  country: C,
  language: SupportedLanguage<C>,
  title: string,
): Promise<Product | undefined> {
  const file = path.join(
    process.cwd(),
    `content/solutions/${country}/${title}.${language}.md`,
  );
  return getSolutionFromFile(file);
}

export async function getProductList<C extends Country>(
  country: C,
  language: SupportedLanguage<C>,
): Promise<Product[]> {
  const files = await glob(
    path.join(process.cwd(), `content/solutions/${country}/*.${language}.md`),
  );
  return Promise.all(files.map((file) => getSolutionFromFile(file)));
}
