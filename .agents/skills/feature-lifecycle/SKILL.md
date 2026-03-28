---
name: feature-lifecycle
description: Use for non-trivial coding tasks that involve new features, bug fixes, or refactors — especially when scope is unclear, changes are cross-cutting, or architectural decisions are involved. Do NOT trigger for simple Q&A, explanations, or single-line edits.
---

# Feature & Bugfix Lifecycle

## Step 0 — Triage first, always

Classify before writing a single line:

| Type                 | Criteria                                                                    |
| -------------------- | --------------------------------------------------------------------------- |
| **Quick Fix**        | Localized, clear scope, no architectural impact                             |
| **Standard/Complex** | New feature, cross-cutting refactor, unclear scope, or architectural impact |

Depth is proportional. Never run full documentation rituals for a quick fix.

---

## Phase A — Context & Planning

1. **Docs scan** _(Standard/Complex only):_ Check `docs/` if context is insufficient.
2. **Design Decisions** _(strictly conditional):_ Read `docs/decisions.md` only if the task touches an area where prior architectural decisions are likely relevant.

---

## Phase B — Implementation

- Execute changes per the project's tech stack.
- Verify build and functionality before declaring done.

---

## Phase B.2 — Mandatory Type-Check

1. Find the type-check script in `package.json` (`check` or `type-check`).
2. Run: `pnpm run <script>`.
3. Loop: fix errors → re-run → repeat until clean.
4. **Never run `pnpm run build`** unless explicitly asked.

---

## Phase C — Post-work

**Design Decisions _(propose, don't auto-write):_**
If the work involved a non-trivial architectural choice, a constraint not visible in the code, or breaks an existing convention — propose a `docs/decisions.md` entry and wait for confirmation before writing.

Do not propose for routine fixes, refactors, or straightforward additions.
