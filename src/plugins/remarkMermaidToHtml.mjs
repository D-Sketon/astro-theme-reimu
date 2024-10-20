import { visit } from "unist-util-visit";
import { toHast } from "mdast-util-to-hast";
import { toHtml } from "hast-util-to-html";

const remarkMermaidToHtml = () => {
  const transformer = async (tree, file) => {
    visit(tree, "code", (code, index, parent) => {
      if (index === null || parent === null) return;
      if (code.lang === "mermaid") {
        const hast = toHast(code);
        const html = toHtml(hast);
        parent.children.splice(parent.children.indexOf(code), 1, {
          type: "html",
          value: html,
        });
      }
    });
  };
  return transformer;
};

export default remarkMermaidToHtml;
