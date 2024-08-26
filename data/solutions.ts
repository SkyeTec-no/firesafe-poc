import { Country, SupportedLanguage } from "./countries";
import path from "path";
import process from "process";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { useMDXComponents } from "@/mdx-components";
import { ReactElement } from "react";

export type ConstructionType = "Solution based on construction" | "Solution based on product";
export type WallThickness = "HundredMillimeters" | "HundredFiftyMillimeters" | "TwoHundredMillimeters";
export type FireResistance =
  | "TwentyMinutes"
  | "ThirtyMinutes"
  | "FortyFiveMinutes"
  | "SixtyMinutes"
  | "NinetyMinutes"
  | "OneHundredTwentyMinutes"
  | "OneHundredFiftyMinutes"
  | "OneHundredEightyMinutes";
export type Penetrations = "Single" | "Multiple" | "None";
export type PositionOfPenetration = "Horizontal" | "Vertical" | "Elbow87_90_0Distance" | "SocketThroughWall";
export type PenetrationType = "PVC" | "Steel" | "Copper" | "PP" | "MultilayerPipe";
export type InsulationType = "WithInsulation" | "WithoutInsulation";

export interface Solution {
  title: string;
  slug: string;
  country: Country;
  categories: string[];
  keywords: string[];
  body: ReactElement;
  name: string;
  wallThickness: WallThickness;
  fireResistance: FireResistance;
  penetration: Penetrations;
  positionOfPenetration: PositionOfPenetration;
  typeOfPenetrations: PenetrationType;
  insulationType: InsulationType;
  diameter: number;
}

interface FrontMatter {
  title: string;
  slug: string;
  country: Country;
  categories: string;
  keywords: string;
  name: string;
  wallThickness: WallThickness;
  fireResistance: FireResistance;
  penetration: Penetrations;
  positionOfPenetration: PositionOfPenetration;
  typeOfPenetrations: PenetrationType;
  insulationType: InsulationType;
  diameter: number;
}

export async function getSolutionFromFile(file: string): Promise<Solution> {
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

export async function getSolution<C extends Country>(
  country: C,
  language: SupportedLanguage<C>,
  title: string
): Promise<Solution | undefined> {
  const file = path.join(process.cwd(), `content/solutions/${country}/${title}.${language}.md`);
  return getSolutionFromFile(file);
}

export async function getSolutionList<C extends Country>(
  country: C,
  language: SupportedLanguage<C>
): Promise<Solution[]> {
  try {
    const dirPath = path.join(process.cwd(), `content/solutions/${country}`);
    const files = await fs.readdir(dirPath);
    const filteredFiles = files.filter((file) => file.endsWith(`.${language}.md`));
    return Promise.all(filteredFiles.map((file) => getSolutionFromFile(path.join(dirPath, file))));
  } catch (error) {
    console.error("Error reading solutions", error);
    return [];
  }
}
