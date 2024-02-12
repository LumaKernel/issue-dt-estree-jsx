# Issue Definitely Typed estree-jsx

NOTE: There're no correspoind runtime package.

PR: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/68598

First, see `main.ts` or output of that in `main.ts.out.txt`. (This is made by `bun run ./main.ts > ./main.ts.out.txt`)

You can see this part:

```js
  // ...
      data: {
        estree: {
          type: 'Program',
          // ..
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'JSXFragment',
                // ...
```

This is result of parse of MDX `{<><span>hi</span></>}`.

This shows type `JSXFragment` is allowed as top level expression of estree.

In JSX, Fragment expression (`<>...</>`) is also an expression like as JSX normal expression (`<Foo>...</Foo>`).

Allowed `type` values are managed by interface extension, so we need to fix `@types/estree-jsx`.
