---
name: tech-stack
description: Full technical stack, styling, data handling, and state management for this project. Load when writing any frontend code — components, hooks, queries, styling, forms, tables, or state logic.
---

# Tech Stack

## Tooling

| Concern         | Tool                                                 |
| --------------- | ---------------------------------------------------- |
| Package manager | `pnpm` · use `pnpm dlx` for one-offs                 |
| Styling         | Tailwind V4 · CSS vars from `global.css`/`style.css` |
| Icons           | `lucide-react` only · no custom SVGs                 |
| Class merging   | `cn()` always for dynamic/conditional classes        |
| Components      | Shadcn UI · fallback: custom atomic component        |
| Layout          | Mobile-first, always                                 |

Avoid arbitrary Tailwind values (e.g. `w-[10px]`) unless strictly necessary.

---

## TypeScript Rules

- **Never `any`.** Use `unknown` when type is unclear.
- Use `Pick`, `Omit`, `Exclude` to refine types — never hand-write duplicates.
- Infer types from DB schemas → see `db-query` skill for details.

---

## Libraries

| Concern      | Library                                   |
| ------------ | ----------------------------------------- |
| Global state | `zustand`                                 |
| Hooks        | `@mantine/hooks`                          |
| Tables       | `@tanstack/react-table` + Shadcn Table    |
| URL state    | `nuqs` (filters, search, pagination)      |
| Validation   | `zod` or `valibot`                        |
| Env          | `@t3-oss/env-core`                        |
| Queries      | `@tanstack/react-query` _(unless Convex)_ |

---

## State & Props

- Props drilling through >2 levels → use **React Context** or **zustand**.
- Contexts must be lean and single-purpose.
- Parent owns heavy logic; children consume context + receive specific callbacks as props.
