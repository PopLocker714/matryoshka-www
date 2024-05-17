import React from "react";
import { IGetMdFileProps, getPolicyData } from "@/lib/getPolicyData";

const Markdown = async ({ name, pathFolder, version }: IGetMdFileProps) => {
  return (
    <div
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: (await getPolicyData({ pathFolder, name, version })).contentHtml }}
    />
  );
};

export default Markdown;
