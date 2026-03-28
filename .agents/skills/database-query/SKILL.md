---
name: database-query
description: Guide for writing, splitting, and caching database queries in this project. Load when writing any query, server function, data-fetching hook, or when touching database logic — Neon/PostgreSQL or Convex.
---

# Database Query

## Core rules

- **Never write types manually** — infer from schema always
- **Never `any`** — use `unknown` or infer
- **Never fetch unrelated data in a single query** — split by concern

---

## Query splitting

Split queries so each one can be cached and invalidated independently.

**Bad** — one query, global invalidation:

```ts
// fetches user profile + AI settings + billing in one round trip
const user = await getUserFull(id);
```

**Good** — split by concern:

```ts
const userCore = await getUserCore(id); // name, email, avatar
const userAI = await getUserAISettings(id); // model prefs, tokens
const userBilling = await getUserBilling(id); // plan, usage
```

Rule of thumb: if two pieces of data are updated by different actions, they belong in different queries.

---

## Neon / PostgreSQL

- Use inferred types from your schema (e.g. Drizzle `$inferSelect` / `$inferInsert`)
- Name queries by concern: `get<Entity><Concern>` (e.g. `getUserCore`, `getWorkspaceMembers`)
- Keep query functions in `src/db/queries/<entity>.ts` — not inline in components or server functions

```ts
// infer types — never hand-write
type UserCore = typeof users.$inferSelect;
```

---

## Convex

- One query function = one concern
- Use `v.id("table")` for all IDs — never raw strings
- Avoid querying inside mutations unless strictly necessary — prefer separate queries + optimistic updates
- Index everything you filter by — never rely on full table scans

---

## TanStack Query (Neon path)

- Query keys must be **stable and descriptive**: `["user", id, "core"]` not `["userData"]`
- Co-locate `queryKey` and `queryFn` in a dedicated `<entity>.queries.ts` file
- Splitting queries = fine-grained invalidation: `queryClient.invalidateQueries(["user", id, "ai"])` without busting the rest

---

## Checklist before shipping a query

- [ ] Split by concern — not by convenience
- [ ] Types inferred from schema
- [ ] Query key is stable and namespaced
- [ ] Indexed fields used in `where` / `.filter()`
- [ ] No `any`, no manually duplicated types
