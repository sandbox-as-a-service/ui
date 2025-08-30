# Conventions

## Component Authoring & Generated Patterns

- Use the `shadcn` CLI to create new components when appropriate. Example:

  ```sh
  pnpm dlx shadcn@latest add alert
  ```

- Do not hand-edit generated code from the `shadcn` CLI unless there is a strong justification.
- When a new shadcn component is generated, add it to the index barrel file located at `src/components/ui/index.ts`.

Guidelines:

- Use lower-case, dash-delimited filenames (e.g. `toggle-group.tsx`).
- Do not use path aliases like `@/components/ui/button` for imports; prefer relative paths.
- Each primitive file should contain its logic and named exports only (no default exports).
- Shared helpers live under `lib/` (or an existing utility directory).
- Avoid creating nested folders unless a component genuinely needs multiple tightly-coupled files (rare).

## Accessibility Checklist

For every interactive primitive:

- Provide an accessible name (text content, `aria-label`, or `aria-labelledby`).
- Ensure keyboard operability (Enter/Space activation, arrow navigation for composite widgets).
- Preserve a visible focus outline; do not remove it.
- Use correct ARIA attributes for stateful widgets (`aria-expanded`, `aria-selected`, `aria-checked`, etc.).
- Properly label groups/relationships (`role="group"`, `aria-controls`, `aria-describedby`).
- Do not rely solely on color for meaning.
- Ensure sufficient color contrast (WCAG AA).

## Tailwind & Styling

- Order utilities logically; this is enforced by the Tailwind CSS plugin when present.
- Prefer semantic variant utilities already established over ad-hoc conditionals.
- Avoid introducing hard-coded colors if tokens / existing Tailwind config classes cover the case.
- Keep responsive and dark variants minimal and purposeful.

## Export Pattern

- Use named exports for all primitives. Avoid default exports to ensure consistent tree-shaking and auto-import behavior.
- `src/components/ui/index.ts` should re-export each primitive (named exports only).

## Utilities

- Centralize reusable helpers (for example `cn`, `composeRefs`) in `lib/`.
- Avoid duplicating logic across primitives.
- Do not introduce opinionated state-management helpers inside the UI layer.

## Performance

- Avoid unnecessary re-renders: do not create new object/array literals inside JSX when static.
- Memoize expensive derived values with `useMemo` only after profiling shows benefit.
- Defer non-critical side effects to `useEffect`.
- Keep component surfaces lean; split heavy logic into separate utilities or hooks when needed.

## Documentation Pattern

- Keep top-of-file comments concise and only when clarifying non-obvious behavior.
- Collocate minor helper types with the component; extract types only when they are reused elsewhere.
- Avoid verbose internal comments for straightforward Tailwind class usage.

## Migration & Deprecation

- Use `@deprecated` JSDoc tags with guidance when superseding a primitive.
- Prefer additive changes; remove deprecated APIs only alongside a coordinated release.

## Security Considerations

- Avoid `dangerouslySetInnerHTML`. If it must be used, document sanitization expectations.
- Do not widen the attack surface via unsafe prop spreading onto arbitrary elements.

## Release & Versioning

- Releases convey semantic intent (MAJOR.MINOR.PATCH conceptually). The repository triggers releases manually through a workflow dispatch. Do not rely on local Git tags.
- Ensure the version selected for a release matches the nature of the changes (breaking vs. additive vs. fix).
- Update the `package.json` version via the release workflow process.

## When Unsure

Prefer the smallest, most explicit primitive. Avoid speculative abstraction. Align with `shadcn` CLI output style before extending.

# Code Conventions

## Commit Message Format

Follow Conventional Commits:

### Format: type(scope?): subject

**Allowed types:** feat, fix, docs, style, refactor, perf, test, chore, ci, build

**Rules:**

- Subject: imperative, concise (≤ 72 chars), no trailing period
- Body (optional): provide additional context if needed
- Footer (optional): use for BREAKING CHANGE: description or issue references

### Examples

```
feat(parser): add ability to parse directional sentiment
fix(api): handle null responses from upstream
docs(readme): update setup instructions
```

## Naming Conventions

### Files & Directories

- **Files**: kebab-case (`get-poll-feed.ts`)
- **Directories**: kebab-case (`poll-card`)

### Functions & Types

- **Functions**: camelCase factory functions (`createPollFeedSource`)
- **Types**: PascalCase with descriptive suffixes (`type PollFeedSource`, `type GetPollFeedInput`)
- **Constants**: SCREAMING_SNAKE_CASE for module-level constants

### Variables

Use descriptive names that convey purpose and context:

- ✅ `pollTitle`, `userEmail`, `voteCount`
- ❌ `title`, `email`, `count`
- ✅ `currentPoll`, `selectedOption`
- ❌ `x`, `y`,

**Transformation Variables**

Use specific names when the transformation is specific:

- ✅ `clampedLimit` (after Math.min/Math.max clamp)
- ✅ `resolvedQuorum` (after applying defaults)
- ✅ `validatedLimit` (after schema/domain validation)

**Collection Variables**

Avoid vague prefixes like `effective*` on collections. Name by role instead:

- ✅ `pageItems`, `visibleItems`, `currentPolls`
- ❌ `effectivePolls`, `effectiveItems`

## Import Organization

```typescript
import {external} from "external-package"

import {internal} from "./internal"
import type {Type} from "./types"
```

**Note**: Import ordering is automatically handled by `@trivago/prettier-plugin-sort-imports` - no manual sorting required.

## Code Structure Patterns

## TypeScript Patterns

- Use `type` for all type definitions (avoid mixing `interface` and `type` keywords)
- Prefix interfaces with purpose: `PollFeedSource`, `GetPollFeedInput`
- Use `import type` rather than `import` when importing types and interfaces
- Prefer functions over classes for implementation
- Favor functional programming patterns over imperative loops
  - ✅ `items.map(item => transform(item))`
  - ❌ `for (const item of items) { ... }`
  - ✅ `items.filter(predicate).find(condition)`
  - ❌ Manual loop with break/continue statements
