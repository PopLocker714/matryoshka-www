import path from "path";
import fs from "fs";
import { remark } from "remark";
import html from "remark-html";

export interface IGetMdFileProps {
  pathFolder: string;
  name: string;
  version: string;
}

export async function getPolicyData({ name, pathFolder, version }: IGetMdFileProps) {
  // const fullPath = path.join("./public/docs", `user-agreements_${version}.md`);
  const fullPath = path.join(pathFolder, `${name}_${version}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const processedContent = await remark().use(html).process(fileContents);
  const contentHtml = processedContent.toString();

  return {
    version,
    contentHtml,
  };
}
