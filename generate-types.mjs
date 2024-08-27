import { promises as fs } from "fs";
import path from "path";
import process from "process";
import matter from "gray-matter";

export const generateTypeDefinitions = async () => {
  const optionsDir = path.join(process.cwd(), "content/options");
  const folders = await fs.readdir(optionsDir, { withFileTypes: true });

  const typeDefinitions = [];

  for (const folder of folders) {
    if (folder.isDirectory()) {
      const folderPath = path.join(optionsDir, folder.name);
      const files = await fs.readdir(folderPath);
      const titles = [];
      for (const file of files) {
        const filePath = path.join(folderPath, file);
        const fileContent = await fs.readFile(filePath, "utf8");
        const { data: frontmatter } = matter(fileContent);
        titles.push(frontmatter.title);
      }

      const typeName = folder.name
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");

      const typeDefinition = `export type ${typeName} = ${titles.map((name) => `'${name}'`).join(" | ")};`;
      typeDefinitions.push(typeDefinition);
    }
  }

  const typesFilePath = path.join(process.cwd(), "generated", "types.ts");
  await fs.writeFile(typesFilePath, typeDefinitions.join("\n\n"));
};

generateTypeDefinitions();
