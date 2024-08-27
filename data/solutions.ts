import { Country, SupportedLanguage } from "./countries";
import path from "path";
import process from "process";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { useMDXComponents } from "@/mdx-components";
import { ReactElement } from "react";

export type Construction = "Vegg" | "Dekke";

export type ConstructionType =
  | "Betongdekke ≥ 100 mm"
  | "Betongvegg ≥ 100 mm"
  | "Betongvegg ≥ 150 mm"
  | "Dekke av KLT≥ 140 mm"
  | "Gipsplate- sjaktvegg ≥ 75 mm"
  | "Gipsplatevegg ≥ 100 mm uten veggisolasjon"
  | "Gipsplatevegg ≥ 100 mm"
  | "Gipsplatevegg ≥ 75 mm uten veggisolasjon"
  | "Vegg av KLT ≥ 100 mm"
  | "Vegg av Thermomur ≥ 350 mm"
  | "Vegger av Sandwchpaneler ≥ 100 mm";

export type FireResistanceClass =
  | "EI 120"
  | "EI 240"
  | "EI 30"
  | "EI 45"
  | "EI 60"
  | "EI 90";

export type NumberOfPenetrations =
  | "Mixed gjennomføring"
  | "Single gjennomføring"
  | "Uten installasjoner (tomme utsparinger og fuger)";

export type PenetrationGroup =
  | "Elektro"
  | "Faste fuger"
  | "Fleksible fuge/ bevegelsefuge"
  | "Gulvsluk /betongdekke"
  | "Kabelhylser"
  | "Rør"
  | "Tomme utsparinger"
  | "Ventilasjon";

export type PenetrationType =
  | "ALU-PEX rør"
  | "Aluminiumskabel"
  | "Datakabel/fiberkabel"
  | "EL-Trekkerør"
  | "Elektriske vegg- og takbokser av plast"
  | "Enklet kabel"
  | "Firkanntet kanal"
  | "Kabel i bunt"
  | "Kobberrør"
  | "PE + PP + PVC rør"
  | "PE rør"
  | "PE-X rør"
  | "Plastsluk"
  | "PP-MD"
  | "PP-MX"
  | "PP-R rør"
  | "Rund kanal"
  | "Stålrør"
  | "Stålsluk (rustfritt)"
  | "Støpejernsrør"
  | "Støpejernssluk";

export type InsulationType =
  | "Cellegummi, brannklas- se B/BL-s3,d0"
  | "Glassull, brannklasse A2L-s1, d0"
  | "PIR termoplast med den- sitet 33 kg/m3."
  | "Steinull, brannklasse A2L-s"
  | "Steinull, brannklasse A2L-s1, d0"
  | "Uten isolasjon";

export type Dimensions =
  | "≤ 100"
  | "≤ 1000 x 1250 mm / Firkantet kanal"
  | "≤ 110"
  | "≤ 16"
  | "≤ 32"
  | "≤ 40"
  | "≤ Ø 1000 mm/ Rund kanal"
  | "≤ Ø110"
  | "≤ Ø125"
  | "≤ Ø160"
  | "≤ Ø315"
  | "≤ Ø32"
  | "≤ Ø40"
  | "≤ Ø50";

export type Product =
  | "FIRESAFE EX"
  | "FIRESAFE FIRE COLLAR"
  | "FIRESAFE FIRE WRAP"
  | "FIRESAFE FT Acrylic lysåpning vegg 10/15 mm"
  | "FIRESAFE FT Board"
  | "FIRESAFE FT FLEX STRIP"
  | "FIRESAFE FT Seal Pad"
  | "FIRESAFE GPG MORTAR lysåpning ≤ 30 mm"
  | "FIRESAFE Kabelhylse"
  | "FIRESAFE KL-reserve"
  | "FIRESAFE Wrap LX"
  | "Promastop FC3/FC 6"
  | "ZZ joint seal NE";

export interface Solution {
  title: string;
  uuid: string;
  construction: Construction;
  constructionType: ConstructionType;
  fireResistanceClass: FireResistanceClass;
  numberOfPenetrations: NumberOfPenetrations;
  penetrationGroup: PenetrationGroup;
  penetrationType: PenetrationType;
  insulationType: InsulationType;
  dimensions: Dimensions;
  product: Product;
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
