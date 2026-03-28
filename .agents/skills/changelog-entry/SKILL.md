---
name: changelog-entry
description: Write and maintain CHANGELOG.md entries consistently. Load when updating the changelog, adding a release note, or when feature-lifecycle Phase C triggers a changelog update.
---

# Changelog Entry

## Format

```md
## [Unreleased]

### <Category>

- <description> (`<scope>`)
```

Categories in order: `Added`, `Changed`, `Fixed`, `Removed`, `Performance`, `Chore`

Only include categories that have entries. Never add empty sections.

---

## Writing rules

- One line per change — no multi-sentence prose
- Start with a verb: `Add`, `Fix`, `Remove`, `Update`, `Replace`, `Improve`
- Scope in backticks at the end: (`auth`), (`ui`), (`api`)
- User-facing language — describe the _effect_, not the implementation
- No internal jargon, no file paths, no PR numbers unless explicitly requested

**Good:**

```md
- Add skeleton loading state to user profile card (`ui`)
- Fix query invalidation triggering full page re-render (`db`)
```

**Bad:**

```md
- Modified UserProfileCard.tsx to include Skeleton component and refactored useUserQuery hook split
```

---

## Placement

- New entries always go under `## [Unreleased]` at the top
- On release: rename `[Unreleased]` → `[x.y.z] - YYYY-MM-DD`

---

## Compaction (when file exceeds ~400 lines)

1. Keep `[Unreleased]` and the last 2–3 releases fully detailed
2. Collapse older releases into a single line summary:
   ```md
   ## [1.x] - archived

   > Early development. Auth, onboarding, core UI, database setup.
   ```
3. Never delete — summarize and preserve the release date
