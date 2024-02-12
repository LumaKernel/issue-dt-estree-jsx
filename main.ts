import { compile } from "@mdx-js/mdx";
import { inspect } from "node:util";

const main = async () => {
  await compile("{<><span>hi</span></>}", {
    remarkPlugins: [],
    rehypePlugins: [
      () => {
        return (tree) => {
          // tree is a "hast" node
          console.log(inspect(tree, { depth: 10 }));
        };
      },
    ],
  });
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
