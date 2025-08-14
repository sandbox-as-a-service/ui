# Copilot Instructions for sandbox-as-a-service/ui

High-signal guidance for GitHub Copilot when generating code, stories, tests, and docs for this component library.

Repository context:
- Purpose: Central component library for the Sandbox as a Service ecosystem.
- Tech: TypeScript-first, Tailwind CSS utility styling, shadcn-inspired primitives (see Storybook homepage with `shadcn-button` story).
- Output: Reusable, accessible, theme-aware UI building blocks.
- Consumers: Other Sandbox-as-a-Service packages/apps (likely via npm / internal registry).

## Core Principles
1. Accessibility first: Always add proper ARIA roles, labels, keyboard interactions (Tab, Shift+Tab, Enter, Space, Escape, Arrow keys where appropriate).
2. Type safety: Prefer explicit, exported TypeScript types & generics. Avoid `any`. Use discriminated unions for variants.
3. Composition > inheritance: Favor small composable primitives over monolith components.
4. Predictable styling: Tailwind utility classes + minimal component-level CSS. No inline style objects unless dynamic and unavoidable.
5. Deterministic rendering: Keep components pure; side effects live in hooks.
6. Dark mode & theming: Use semantic class names / tokens (e.g. `text-fg-muted`, not hard-coded hex) if design tokens are present. If absent, prepare for future tokenization.
7. Tree-shakeable exports: Each component folder has a local barrel (index.ts) and all public components aggregate ONLY in `src/components/ui/index.ts` (no root `src/index.ts`).
8. Zero business logic: UI only. Push domain logic up to consumers.

## File & Directory Conventions
```
src/
  components/
    ui/
      button/
        Button.tsx          # Main component
        Button.stories.tsx  # Storybook story
        Button.test.tsx     # Tests (if present)
        index.ts            # export { Button } from './Button'; export type { ButtonProps } from './Button';
      card/
        Card.tsx
        Card.stories.tsx
        index.ts
      ... (other components)
      index.ts              # Central barrel: re-export all component barrels (e.g. export * from './button')
  lib/
    utils.ts                # cn() and other generic helpers
  hooks/                    # Shared hooks (if any)
```

## Component Authoring Pattern
- File name matches component name (PascalCase).
- Default export: the main React component (or named export if multiple primitives).
- Provide a `Props` interface and export it.
- Support `className` passthrough merged via a `cn` utility (if present) for Tailwind merging.
- Forward refs using `React.forwardRef` when exposing focusable elements.
- Accept `asChild` (if Radix / Slot-like patterns are adopted) for polymorphism—only if pattern already exists; otherwise skip.
- Expose controlled/uncontrolled patterns (e.g. `value` + `onChange` plus internal state fallback).
- Avoid implicit side effects; use `useEffect` only for subscriptions / focus trapping / portal mounts.

### Example Skeleton (Button)
```tsx
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
```

## Storybook Conventions
- One `.stories.tsx` per component folder.
- Showcase: default usage, variants, sizes, interactive state (focus, loading, disabled).
- Use `play` function (if Storybook Interaction Testing is in use) for basic a11y or keyboard scenarios.
- Provide `args` with sensible defaults; expose `variant`, `size`, `disabled`, etc.
- Avoid business data; use placeholder labels.

## Testing Guidelines
(Adjust to existing test runner—if not present, default to a minimal React Testing Library + Vitest/Jest approach.)
- Prefer interaction tests: focus management, keyboard activation, ARIA attributes.
- Snapshot only for stable markup (rare).
- Test variants produce expected class combinations.
- Example assertion: `expect(screen.getByRole('button', { name: /submit/i })).toHaveAttribute('data-variant','primary');`

## Tailwind Usage
- Keep class lists ordered logically: layout → spacing → typography → color → interaction → state.
- Abstract repeated class groups into utilities or component variants rather than duplicating.
- Use responsive + dark variants only when necessary; avoid premature complexity.

## Accessibility Checklist (Copilot should internalize)
- Every interactive element has an accessible name.
- Custom components that render non-semantic elements must add appropriate role.
- Manage focus on open/close for overlays.
- Provide `aria-expanded`, `aria-selected`, `aria-controls` when building composite widgets.
- Ensure color contrast (WCAG AA) for foreground/background.

## Commit Conventions
Use Conventional Commits to aid changelog & semantic versioning:
- feat: new component or significant enhancement
- fix: bug fix
- docs: documentation only
- style: formatting (no logic)
- refactor: internal restructuring
- test: adding or improving tests
- chore: tooling / meta
Examples:
- feat(button): add loading state
- fix(modal): restore focus to trigger on close

## Versioning & Release (Assumed)
- Semantic Versioning (MAJOR.MINOR.PATCH).
- New components / backwards-compatible props additions: MINOR.
- Bug fixes / a11y improvements: PATCH.
- Breaking prop / removal: MAJOR (list breaking changes clearly).

## Import & Export Pattern
- Each component folder: local file + `index.ts` exporting the public API.
- Central barrel at `src/components/ui/index.ts` re-exports all component barrels. (Do NOT add a root `src/index.ts`.)
- Always add new components to the central barrel so consumers can `import { Button } from '@org/ui';`.
- Avoid deep path imports in consumers (no `@org/ui/components/ui/button/Button`).

### Central Barrel Example
```ts
// src/components/ui/index.ts
export * from './button';
export * from './card';
// export * from './alert'; (add future components here)
```

## Utilities
- Keep generic helpers (e.g., `cn`, focus trap, portal helpers) in `src/utils`.
- Do not duplicate utility logic inside components.

## Performance
- Keep renders cheap: memoize heavy subtrees or derived values.
- Avoid inline object/array creation inside prop spreads when high frequency.
- Lazy-load rarely used heavy components if bundler setup supports it.

## Copilot Positive Examples (Do More)
1. Creating a new accessible Toggle component with `aria-pressed`, keyboard support, and variant styling.
2. Adding a Storybook story that enumerates each variant from a dynamic map reducing duplication.
3. Writing a test that tabs through a Menu and asserts focus order.

## Copilot Negative Examples (Avoid)
1. Adding arbitrary design tokens or color hex values not in Tailwind config.
2. Returning untyped `React.FC<any>` components.
3. Implementing data fetching, auth hooks, or persistence logic inside UI components.
4. Introducing global CSS when a Tailwind utility combination suffices.
5. Hardcoding language strings that should be externalized upstream.

## Documentation Pattern (Inline)
- Top-of-file JSDoc for components: brief summary + key props.
- Complex prop relationships documented with inline comments.
- Provide usage snippet in Storybook docs tab (MDX or autodocs).

## Migration / Refactor Guidance
When replacing or deprecating a component:
1. Mark with JSDoc `@deprecated` including alternative.
2. Provide adapter shim if trivial (avoid breaking consumers abruptly).
3. Plan removal on next MAJOR.

## Security Considerations
- Sanitize or escape HTML if supporting `dangerouslySetInnerHTML` (avoid unless necessary).
- Avoid embedding user content directly without validation (delegate to consumer).
- Do not bundle secrets or environment-specific values.

## Publishing (If Configured)
Copilot should:
- Ensure build artifacts are not imported from `dist` internally.
- Ensure package exports map (if present) stays stable when adding new entries.

## Checklist for New Component PR (Copilot can reference)
- [ ] Component file + export
- [ ] Story with variants
- [ ] Tests (render + a11y/interaction)
- [ ] Types exported
- [ ] No `any`
- [ ] Accessible roles / labels
- [ ] Docs / JSDoc
- [ ] Follows commit message convention

## When Unsure
Prefer minimal implementation + clear types + accessibility scaffolding over speculative abstraction.

---

These instructions guide generation inside this repository. Copilot should prioritize: accessibility, type safety, Tailwind utility clarity, composable architecture, and Conventional Commit discipline.