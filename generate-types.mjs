import { promises as fs } from "fs";
import path from "path";
import process from "process";
import matter from "gray-matter";

export const generateTypeDefinitions = async () => {
  const optionsDir = path.join(process.cwd(), "content/options");
  const folders = await fs.readdir(optionsDir, { withFileTypes: true });

  const typeDefinitions = [];
  const details = new Map();

  for (const folder of folders) {
    if (folder.isDirectory()) {
      const folderPath = path.join(optionsDir, folder.name);
      const files = await fs.readdir(folderPath);

      const values = [];

      for (const file of files) {
        const filePath = path.join(folderPath, file);
        const fileContent = await fs.readFile(filePath, "utf8");
        const { data: frontmatter } = matter(fileContent);
        values.push(frontmatter.uuid ?? frontmatter.title);

        if (frontmatter.uuid) {
          details.set(frontmatter.uuid, frontmatter);
        }
      }

      const typeName = folder.name
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");

      const typeDefinition = `export type ${typeName} = ${values.map((name) => `'${name}'`).join(" | ")};`;
      typeDefinitions.push(typeDefinition);
    }
  }

  const typesFilePath = path.join(process.cwd(), "generated", "types.ts");
  await fs.writeFile(typesFilePath, typeDefinitions.join("\n\n") + "\n\n");

  const detailsFilePath = path.join(process.cwd(), "generated", "option-details.ts");
  const optionDetailInterface = `export interface OptionDetail {\n\ttitle: string;\n\tuuid: string;\n\ticonUrl?: string;\n}\n`;
  const optionDetails = `export const OptionDetails: Record<string, any> = ${JSON.stringify(Object.fromEntries(details), null, 2)};\n`;
  await fs.writeFile(detailsFilePath, optionDetailInterface + '\n' + optionDetails);

};

generateTypeDefinitions();
