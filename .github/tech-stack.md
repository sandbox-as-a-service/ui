# Tech Stack & Dependencies

This repository is a TypeScript + React component library built with Vite. Below are the major, actual technologies and notable dependencies declared in `package.json`.

## Core

- Build system: Vite
- Language: TypeScript (>=5.x)
- Package manager: pnpm (see `packageManager`)
- Runtime: Node.js 22 (targeted)
- UI runtime: React 19 (package.json uses `react` / `react-dom` @ ^19.x)

## Styling & UI

- Tailwind CSS v4 for utility styling
- Utilities & helpers: `class-variance-authority`, `clsx`, `tailwind-merge`
- Optional animation helpers: `tw-animate-css` (marked optional in peers)
- Icons: `lucide-react`

## Components / Charting

- Charting library used: `recharts`

## Tooling & Dev dependencies

- Storybook used for component development (`storybook` / `@storybook/react-vite`)
- Vite React plugin: `@vitejs/plugin-react-swc`
- Linters / formatting: `eslint` + related plugins (project includes ESLint dev deps)
- TypeScript compiler (`typescript`) and typings (`@types/*`)
- Formatting: `prettier` is used for code formatting. The project uses the
  `@trivago/prettier-plugin-sort-imports` Prettier plugin to keep import
  ordering consistent across files, and `prettier-plugin-tailwindcss` to
  automatically sort Tailwind CSS classnames.

## Notes on testing

- There is no explicit unit test runner declared in `package.json` devDependencies (consider adding Jest or Vitest if you want local unit tests).

## Summary

This file lists the major technologies only. For exact versions and the full deps/devDeps list, see `package.json`.
