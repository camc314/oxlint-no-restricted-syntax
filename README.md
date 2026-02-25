# oxlint-no-restricted-syntax

Small demo showing how to use ESLint's `no-restricted-syntax` rule inside Oxlint via a JS plugin.

## What this repo does

- Loads a local JS plugin (`plugin.ts`) in `oxlint.config.ts`.
- Re-exports ESLint's built-in `no-restricted-syntax` rule under the plugin namespace (`eslint-js/no-restricted-syntax`).
- Configures two restrictions:
  - Disallow `FunctionExpression`.
  - Require exactly two arguments for `setTimeout(...)`.
- Includes a demo file (`src/index.ts`) that intentionally violates both rules.

## Commit review summary

1. `310f7ec` (`init`)
   - Initializes repo with an empty `.gitignore`.
2. `bfe7d0f` (`basic oxlint`)
   - Adds baseline Oxlint setup (`package.json`, `oxlint.config.ts`, lockfile).
3. `02d7a84` (`add demo`)
   - Adds local plugin wiring and `no-restricted-syntax` demo configuration.
   - Adds `plugin.ts` and a failing example in `src/index.ts`.

## Setup

Requirements:

- Node.js `^20.19.0 || >=22.12.0` (required by current `oxlint` and `eslint` versions)
- `pnpm`

Install dependencies:

```bash
pnpm install
```

## Run the demo

```bash
pnpm lint
```

You should see:

- `eslint-js/no-restricted-syntax` error for a function expression.
- `eslint-js/no-restricted-syntax` error for `setTimeout()` without exactly 2 args.
- A separate `eslint/no-unused-vars` warning from Oxlint defaults.

## Key files

- `oxlint.config.ts`: plugin registration and rule configuration
- `plugin.ts`: exposes selected ESLint built-in rules to Oxlint
- `src/index.ts`: intentionally failing demo source

## Notes

- Running `pnpm lint` currently prints a Node warning about module type detection because the project uses ESM syntax in `.ts` config/plugin files without `"type": "module"` in `package.json`.
