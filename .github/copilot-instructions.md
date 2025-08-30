# Copilot Instructions for sandbox-as-a-service/ui

High-signal guidance for GitHub Copilot in this component library.

## Instruction Files

- [`conventions.md`](./conventions.md) - Code style, naming, and commit message formats
- [`tech-stack.md`](./tech-stack.md) - Overview of the tech stack and tools used

## Repository Context

- Purpose: Central, reusable UI primitives for the Sandbox as a Service ecosystem.
- Tech stack: TypeScript, Tailwind CSS utilities, shadcn CLI–generated primitives.
- Styling paradigm: Utility-first (Tailwind) with variant helpers (e.g. class-variance-authority if present).
- Distribution: Consumed internally; focus on consistency and accessibility.

## Repository & Tooling

- Use Node 22 and `pnpm` for package management.
- Use Corepack to ensure the correct `pnpm` version:

  ```
  corepack enable
  ```

- All repository commands and scripts must use `pnpm` (for example `pnpm install`, `pnpm build-ui`, `pnpm storybook`).
- Only commit `pnpm-lock.yaml`. Do NOT add `package-lock.json` or `yarn.lock`.
- When adding dependencies use `pnpm add <pkg>` (or `-D` for dev dependencies).

> Note: Detailed repository conventions (naming, tooling, component patterns, accessibility, styling, release notes) were consolidated into `./conventions.md`. Please edit that file for convention updates.
