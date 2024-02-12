import { Expression } from "estree";

const expr1: Expression = {
  type: "JSXElement",
  children: [],
  openingElement: {
    type: "JSXOpeningElement",
    attributes: [],
    name: {
      type: "JSXIdentifier",
      name: "div",
    },
    selfClosing: true,
  },
  closingElement: null,
};
void expr1;

const expr2: Expression = {
  // @ts-expect-error -- because of the issue
  type: "JSXFragment",
  openingFragment: {
    type: "JSXOpeningFragment",
    attributes: [],
    selfClosing: false,
  },
  closingFragment: {
    type: "JSXClosingFragment",
  },
  children: [],
};
void expr2;
