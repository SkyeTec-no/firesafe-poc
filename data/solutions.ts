import { Country, SupportedLanguage } from "./countries";
import path from "path";
import process from "process";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { useMDXComponents } from "@/mdx-components";
import { ReactElement } from "react";
import {
  Constructions,
  ConstructionTypes,
  FireResistanceClasses,
  NumberOfPenetrations,
  PenetrationGroups,
  PenetrationTypes,
  InsulationTypes,
  Dimensions,
  Products,
} from "@/generated/types";

export interface Solution {
  title: string;
  uuid: string;
  construction: Constructions;
  constructionType: ConstructionTypes;
  fireResistanceClass: FireResistanceClasses;
  numberOfPenetrations: NumberOfPenetrations;
  penetrationGroup: PenetrationGroups;
  penetrationType: PenetrationTypes;
  insulationType: InsulationTypes;
  dimensions: Dimensions;
  product: Products;
  body: ReactElement;
}

type FrontMatter = Omit<Solution, "body">;

export async function getSolutionFromFile(file: string): Promise<Solution> {
  const markdownContent = await fs.readFile(file);
  const { content: body, frontmatter } = await compileMDX<FrontMatter>({
    source: markdownContent,
    components: useMDXComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [
          remarkFrontmatter,
          [remarkMdxFrontmatter, { name: "metadata" }],
        ],
      },
    },
  });
  return {
    ...frontmatter,
    body,
  };
}

export async function getSolution<C extends Country>(
  country: C,
  language: SupportedLanguage<C>,
  uuid: string,
): Promise<Solution | undefined> {
  const file = path.join(
    process.cwd(),
    `content/solutions/${country}/${uuid}.${language}.md`,
  );
  return getSolutionFromFile(file);
}

export async function getSolutionList<C extends Country>(
  country: C,
  language: SupportedLanguage<C>,
): Promise<Solution[]> {
  try {
    const dirPath = path.join(process.cwd(), `content/solutions/${country}`);
    const files = await fs.readdir(dirPath);
    const filteredFiles = files.filter((file) =>
      file.endsWith(`.${language}.md`),
    );
    return Promise.all(
      filteredFiles.map((file) =>
        getSolutionFromFile(path.join(dirPath, file)),
      ),
    );
  } catch {
    return [];
  }
}
