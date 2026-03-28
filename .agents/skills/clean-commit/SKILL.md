---
name: clean-commit
description: Formats, stages, and commits changes following Conventional Commits. Trigger when the user wants to commit, says "clean commit", "commit my changes", or when code-reviewer gives a green light.
---

# Clean Commit

## Step 1 — Check for changes

```bash
git status --short
```

| Situation                                      | Action                        |
| ---------------------------------------------- | ----------------------------- |
| Changes already staged                         | Proceed                       |
| Unstaged or untracked files, no staged changes | Run `git add -A` then proceed |
| Absolutely nothing (clean tree)                | **Stop** — nothing to commit  |

---

## Step 2 — Format staged files

Detect the formatter from project config files, run it with `--write` on staged files only (`.ts` `.tsx` `.js` `.jsx` `.json` `.css`), then `git add -u` to re-stage. If no formatter is found, skip silently.

---

## Step 3 — Analyze the diff

```bash
git diff --cached
```

Identify: what changed, which part of the codebase, and whether anything is a breaking change.

---

## Step 4 — Build the message

**Format:** `<type>(<scope>): <description>`

| Type       | When                                |
| ---------- | ----------------------------------- |
| `feat`     | New feature                         |
| `fix`      | Bug fix                             |
| `refactor` | Code change with no behavior change |
| `perf`     | Performance improvement             |
| `style`    | Formatting only, no logic change    |
| `docs`     | Documentation only                  |
| `test`     | Tests added or updated              |
| `chore`    | Deps, config, tooling               |

**Rules:**

- Language: **English always**, regardless of conversation language
- Scope: lowercase, single concern (e.g. `auth`, `ui`, `api`, `db`)
- Description: imperative present tense · no period · max ~72 chars
- Breaking change: append `!` → `feat(api)!: ...` and add footer `BREAKING CHANGE: <what broke>`
- Multi-concern diff: split into multiple commits if concerns are clearly separable; otherwise pick the dominant type

**Body** _(only if the change is non-obvious or has significant context):_

```
<blank line>
<explain why, not what — the diff already shows what>
```

---

## Step 5 — Execute

Run directly without asking for confirmation:

```bash
git commit -m "<subject>" -m "<body if needed>"
```

Then output the final commit message so the user can see exactly what was committed.
