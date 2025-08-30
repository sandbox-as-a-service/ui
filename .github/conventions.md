# Conventions

> Scope: Conventions below focus on authoring primitives, styling, exports, docs, and maintenance.

---

## Component Authoring

- **Source & naming**
  - Files live under `src/components/ui/*`.
  - Filenames: lower‑case, dash‑delimited (e.g. `toggle-group.tsx`).
  - One primitive per file. Create subfolders **only** when a component needs tightly‑coupled parts (rare).

- **Exports**
  - **Named exports only**. No default exports.
  - Re‑export from `src/components/ui/index.ts` (barrel).

- **Imports (internal)**
  - Prefer **relative** imports for internals (avoid `@/...`). Consumers import from the package root.

- **shadcn usage**
  - Use the `shadcn` CLI to scaffold when it fits the primitive.
  - Don’t hand‑edit generated code unless justified. If you must, keep diffs minimal and library‑style (remove app‑only assumptions like hardcoded routes, `next/*`, etc.).

- **Props & patterns**
  - Keep surfaces **small and explicit**. Prefer uncontrolled by default; add controlled props only when needed.
  - Do not `forwardRef` explicitly. Ref is automatically passed in React 19.
  - Expose an `asChild` slot **only if** composition requires it; document caveats.
  - Accept `className` to extend styles. Merge with `cn` (see Utilities) rather than overwrite.
  - Support `data-*` attributes for state (`data-state="open|closed"`, `data-disabled`), and reflect state on the DOM for styling.

## Accessibility Checklist (per interactive primitive)

- **Name**: Ensure an accessible name (text, `aria-label`, or `aria-labelledby`).
- **Keyboard**: Enter/Space activation; arrow navigation for composite widgets; Esc where expected (menus, dialogs).
- **Focus**: Keep a visible outline; use `:focus-visible` styles; trap focus in modals; return focus on close.
- **State**: Correct ARIA (`aria-expanded`, `aria-selected`, `aria-checked`, `aria-invalid`, etc.).
- **Relationships**: Use `role="group"`, `aria-controls`, `aria-describedby` where applicable; pair `aria-labelledby` with ids created via `useId`.
- **Semantics**: Match the expected role (e.g., `button` not `div` + click).
- **Contrast & color**: WCAG AA; don’t rely on color alone.

## Tailwind & Styling

- **Tokens first**: Use Tailwind v4 theme tokens; avoid hard‑coded colors/spacing when tokens exist.
- **Utility order**: Follow logical order (enforced by plugin when present).
- **Variants**: Keep responsive/dark variants purposeful and minimal.
- **State styling**: Prefer `data-[state]` attributes and ARIA state selectors over prop‑driven class branching.
- **Global CSS**: The library should not require app‑level resets; each component carries its minimal base styles.

## Export Pattern

- Named exports for primitives and related sub‑primitives (e.g., `DropdownMenu`, `DropdownMenuItem`).
- Barrel re‑exports from `src/components/ui/index.ts` only.
- If subpath exports are provided, define them explicitly in `package.json#exports` (keep the API surface stable).

## Utilities

- Shared helpers reside in `src/lib/`.
- Provide `cn` (class merge), `composeRefs`, and other tiny, generic utilities only; avoid app opinions or state management.
- Do **not** duplicate helpers across primitives.

## Performance

- Avoid creating new object/array literals in JSX when static.
- Memoize heavy derived values **only after** profiling indicates benefit (`useMemo`, `useCallback` responsibly).
- Use `useId` for deterministic ids needed by ARIA.
- Keep bundles tree‑shakeable: no side‑effectful module code.

## Documentation (Storybook)

- Each primitive has an MDX story with:
  - Usage examples and a minimal props table.
  - A11y notes (keyboard and ARIA behavior) and focus demo.
  - Edge cases (RTL, long labels, disabled, loading, etc.).

- Keep code comments concise; document non‑obvious behavior only.

## Migration & Deprecation

- Use `@deprecated` JSDoc with guidance and timeline.
- Prefer additive changes. Remove deprecated APIs alongside a coordinated release and an entry in the **Migration Guide**.

## Security

- Avoid `dangerouslySetInnerHTML`. If unavoidable, document sanitization expectations at the call site.
- Don’t spread arbitrary props onto non‑host elements in ways that widen the attack surface.

## TypeScript Patterns

- Use `type` aliases for shapes (keep it consistent).
- Import types with `import type`.
- Prefer functional programming style; avoid classes.
- Naming:
  - Functions: `camelCase` (`createPollFeedSource`).
  - Types: `PascalCase` (`PollFeedSource`, `GetPollFeedInput`).
  - Constants: `SCREAMING_SNAKE_CASE` for module‑level constants.
  - Variables: descriptive (`currentPoll`, `selectedOption`, `voteCount`). Use specific names after transforms: `clampedLimit`, `resolvedQuorum`, `validatedLimit`.

## Import Organization

```ts
import {external} from "external-package"

import {internal} from "./internal"
import type {Type} from "./types"
```

> Note: Import ordering is handled by `@trivago/prettier-plugin-sort-imports`. No manual sorting.
