---
name: error-handling
description: Conventions for error handling across the project. Load when writing async logic, server functions, data fetching, or placing Error Boundaries. Covers error display rules, boundary placement, and toast vs inline decisions.
---

# Error Handling

## The core rule

| Error type                        | Where to show it                    |
| --------------------------------- | ----------------------------------- |
| Field validation                  | Inline, below the field             |
| Form submission / server function | Toast                               |
| Data fetching failure             | Inline error state in the component |
| Crash / unexpected render error   | Error Boundary                      |
| Global network failure            | Toast                               |

Never use toast for field errors. Never use inline states for action feedback.

---

## Toasts

Use `sonner` (Shadcn default). Keep messages short and user-facing — no stack traces, no technical jargon.

```ts
toast.success("Profile updated");
toast.error("Failed to save — please try again");
```

- Success toast: only for non-obvious actions (not every click)
- Error toast: always for failed server functions or mutations

---

## Inline error states

For data-fetching components that fail to load, render an inline fallback — not a toast, not a crash:

```tsx
if (error)
  return (
    <div className="text-sm text-destructive">
      Failed to load. <button onClick={refetch}>Retry</button>
    </div>
  );
```

- Mirror the component's layout footprint — don't collapse the space
- Always offer a retry when possible

---

## Error Boundaries

### Where to place them

| Scope                      | Placement                                          |
| -------------------------- | -------------------------------------------------- |
| Full page crash            | Route/page level                                   |
| Independent widget         | Around the widget only                             |
| Critical UI (sidebar, nav) | Isolated boundary so it doesn't take down the page |

**Rule:** each boundary should be as narrow as possible. One crashing widget must not crash the page.

### TanStack Start / TanStack Router

Use the native `errorComponent` on route definitions — do not use `react-error-boundary` here:

```tsx
export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  errorComponent: () => (
    <div className="text-sm text-destructive">Failed to load.</div>
  ),
});
```

For widget-level isolation, use `react-error-boundary` without any `"use client"` directive:

```tsx
import { ErrorBoundary } from "react-error-boundary";

<ErrorBoundary fallback={<WidgetError />}>
  <MyWidget />
</ErrorBoundary>;
```

### Next.js

Use `"use client"` + `react-error-boundary` for client components, or the native `error.tsx` file convention at the route segment level:

```tsx
// app/dashboard/error.tsx
"use client";
export default function Error({ error, reset }) {
  return <button onClick={reset}>Retry</button>;
}
```

### Audit your existing boundaries

If boundaries exist but are inconsistently placed:

1. Identify all `<ErrorBoundary>` usages + `errorComponent` definitions in the codebase
2. Flag any that wrap too broadly (full app) or too narrowly (single elements)
3. Reorganize to route-level + critical-widget-level

---

## Async / server functions

```ts
try {
  await action();
  toast.success("Done");
} catch (err) {
  // Log internally, show generic message to user
  console.error(err);
  toast.error("Something went wrong — please try again");
}
```

- Never expose raw error messages to the user
- Always log the real error for debugging

---

## Checklist

- [ ] Field errors → inline below field
- [ ] Action errors → toast
- [ ] Fetch errors → inline with retry
- [ ] Error Boundaries at route level and around critical independent widgets
- [ ] No raw error messages exposed to the user
- [ ] Every async action wrapped in try/catch
