---
name: code-reviewer
description: Reviews staged code changes against this project's standards. Trigger on any request to review, check, audit, or inspect code changes — or before any commit, PR, or merge. Also triggers for "is this ready?", "check my changes", "audit changes", or "run a review".
---

# Code Reviewer

## Step 1 — Get the diff

```bash
git diff --cached
```

If nothing is staged, fall back to:

```bash
git diff HEAD
```

If the diff exceeds ~300 lines, **split the review by file** and process each file separately rather than doing a shallow pass over everything at once.

---

## Step 2 — Run checks

Go through every changed file. For each finding, tag it:

- 🟢 **Good** — worth calling out a solid pattern
- 🟡 **Suggestion** — improvement, not blocking
- 🔴 **Critical** — must fix before commit

### TypeScript

- [ ] No `any` — use `unknown` if type is genuinely unclear
- [ ] No manually written types that duplicate DB schema — use inferred types
- [ ] `Pick`, `Omit`, `Exclude` used to refine instead of redefining
- [ ] No type assertions (`as X`) used to silence errors

### React & Components

- [ ] No component exceeds ~70 lines or handles multiple concerns — flag for split
- [ ] Props don't drill more than 2 levels — suggest Context or zustand
- [ ] No unnecessary `useEffect` for derived state
- [ ] Every data-fetching component has a **Skeleton** — not a spinner, not `null`

### Stack Conventions

- [ ] `cn()` used for all dynamic/conditional class names — not string concatenation
- [ ] No arbitrary Tailwind values (`w-[10px]`, `mt-[3px]`) unless strictly justified
- [ ] No custom SVGs — `lucide-react` only
- [ ] `nuqs` used for URL-persistent state (filters, search, pagination)
- [ ] `zustand` for global state — not prop threading or misused Context

### TanStack Query (if applicable)

- [ ] Queries are split by concern — no single query fetching unrelated data together
- [ ] Query keys are stable and predictable
- [ ] No direct `fetch` inside components — goes through query layer

### Code Quality

- [ ] Zero comments — unless the logic is genuinely non-obvious
- [ ] No dead code, commented-out blocks, or debug `console.log`
- [ ] No hardcoded strings that should be constants or env vars

---

## Step 3 — Report

Group findings by file. Use this format:

```
### `path/to/file.tsx`
🔴 [Critical] <issue> — <one-line fix>
🟡 [Suggestion] <issue> — <one-line fix>
🟢 [Good] <what was done well>
```

End with a summary line:

> `X critical · Y suggestions · Z good catches`

---

## Step 4 — Decision gate

| Result          | Action                                                                                         |
| --------------- | ---------------------------------------------------------------------------------------------- |
| No 🔴 findings  | Suggest running `clean-commit`                                                                 |
| Any 🔴 findings | **Block commit.** List each 🔴 with an explicit fix. Do not suggest committing until resolved. |
| 🟡 only         | Commit is allowed, but surface suggestions clearly                                             |
