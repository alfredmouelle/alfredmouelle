---
name: new-component
description: Scaffold a new React component following project conventions. Trigger when the user asks to create, add, or build a new component, page, section, or UI element. Always load this before writing any new component file.
---

# New Component

## Step 1 — Reuse check first

Before creating anything:

```bash
grep -r "export.*function\|export default" src/components --include="*.tsx" -l
```

Scan for an existing component that covers the use case — even partially. If one exists, **extend it** instead of creating a new one.

---

## Step 2 — Classify the component

| Type                        | Location                    | Rule                      |
| --------------------------- | --------------------------- | ------------------------- |
| Generic/reusable UI         | `src/components/ui/`        | No business logic         |
| Feature-specific            | `src/components/<feature>/` | Scoped to that domain     |
| Page-level (Next.js)        | `src/app/` or `src/pages/`  | Routing entry points only |
| Page-level (TanStack Start) | `src/routes/`               | Routing entry points only |

---

## Step 3 — Scaffold

**Checklist before writing a single line:**

- [ ] Single responsibility — one job, max ~70 lines
- [ ] No props drilling beyond 2 levels → use Context or zustand
- [ ] Mobile-first layout
- [ ] `cn()` for all conditional classes
- [ ] `lucide-react` for any icons — no custom SVGs
- [ ] No arbitrary Tailwind values unless strictly necessary
- [ ] No code comments unless logic is genuinely non-obvious

**Minimal structure:**

```tsx
import { cn } from "@/lib/utils"

interface <Name>Props {
  className?: string
}

export function <Name>({ className }: <Name>Props) {
  return (
    <div className={cn("", className)}>
      {/* content */}
    </div>
  )
}
```

---

## Step 4 — Data-fetching? Add a skeleton

If the component fetches data, a `<Name>Skeleton` is **mandatory** — created in the same file:

```tsx
export function <Name>Skeleton() {
  return (
    <div className="animate-pulse">
      {/* mirror the real layout exactly */}
    </div>
  )
}
```

No generic spinners. The skeleton must match the real component's structure.

---

## Step 5 — Verify

```bash
pnpm run check
```

Fix all errors before declaring done.
