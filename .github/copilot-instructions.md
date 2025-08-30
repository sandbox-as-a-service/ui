# AI Coding Assistant Instructions

## Instruction Files

- [`conventions.md`](./conventions.md) - Code style, naming, and commit message formats
- [`tech-stack.md`](./tech-stack.md) - Overview of the tech stack and tools used

## General Guidelines

**Best Practice vs Technical Possibility:**
When providing solutions, clearly distinguish between what's technically possible and what's considered best practice or industry standard. Always explain the trade-offs and recommend the approach that aligns with established conventions and maintainability.

**Domain-Driven Design Terminology:**
Use "domain logic" instead of "business logic" for consistency with our domain-driven design architecture. This reinforces that our use cases contain domain-specific rules and operations within the hexagonal architecture pattern.

Examples:

- ✅ "You could commit API keys directly to the codebase, but it's not secure best practice. Use environment variables instead."
- ✅ "While `any` type works technically, it defeats TypeScript's purpose. Use proper typing for better code safety."
- ✅ "Direct database queries in components are possible, but violate separation of concerns. Use the established adapter pattern."
