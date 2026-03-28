---
name: coding-standards
description: Core coding principles for this project. Load when writing, reviewing, or refactoring any code. Covers comment policy, component sizing, reuse rules, UI standards, and self-documentation rules for agents.
---

# Coding Standards

## Zero-Comment Policy

No code comments unless explicitly requested or unavoidable for complex logic.

## Atomic Responsibility

One component = one job. Split anything that exceeds 50–70 lines or handles multiple concerns.

## Reuse Over Creation

Before creating a component or hook, scan the codebase for an existing one. Default to extension, not duplication.

## Modern Aesthetic

Clean, minimalist, high-end UI/UX. No visual clutter.

## Agent Self-Documentation

If something in the project surprises you or contradicts your expectations, **flag it to the developer immediately** and add a note in `CLAUDE.md` or `AGENTS.md` to prevent future agents from hitting the same issue.
