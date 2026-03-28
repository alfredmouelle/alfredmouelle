---
name: form-patterns
description: Conventions for building forms in this project. Load when creating, editing, or refactoring any form, input, or validation logic. Covers schema setup, library choice, field errors, and submission handling.
---

# Form Patterns

## Library choice

| Situation                                            | Library                            |
| ---------------------------------------------------- | ---------------------------------- |
| Standard forms                                       | `react-hook-form` + `valibot`      |
| Complex/dynamic forms (dependent fields, multi-step) | `@tanstack/react-form` + `valibot` |

Default to `react-hook-form` unless the form has dynamic field dependencies or significant orchestration needs.  
Default to `valibot` over `zod` — lighter bundle, same expressiveness.

---

## Schema

- Define the schema **outside** the component, in the same file above it
- Infer the form type from the schema — never write it manually

```ts
import { object, string, email, minLength, pipe, InferOutput } from "valibot";

const loginSchema = object({
  email: pipe(string(), email()),
  password: pipe(string(), minLength(8)),
});

type LoginForm = InferOutput<typeof loginSchema>;
```

---

## react-hook-form setup

```tsx
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";

const form = useForm<LoginForm>({
  resolver: valibotResolver(loginSchema),
  defaultValues: { email: "", password: "" },
});
```

- Always set `defaultValues` — prevents uncontrolled/controlled warnings
- Use Shadcn `<Form>` wrapper + `<FormField>`, `<FormItem>`, `<FormMessage>` for consistent layout

---

## @tanstack/react-form setup

```tsx
import { useForm } from "@tanstack/react-form";
import { valibotValidator } from "@tanstack/valibot-form-adapter";

const form = useForm({
  validatorAdapter: valibotValidator(),
  defaultValues: { email: "", password: "" },
});
```

---

## Error display rules

| Context                             | Display                                         |
| ----------------------------------- | ----------------------------------------------- |
| Field validation error              | Inline, **below the field** via `<FormMessage>` |
| Submission error (server/action)    | **Toast** — not a field error                   |
| Global form error (e.g. rate limit) | Toast                                           |

Never show field errors as toasts. Never show action errors inline.

---

## Submission pattern

```tsx
const onSubmit = form.handleSubmit(async (values) => {
  try {
    await myAction(values);
    toast.success("Done");
  } catch (err) {
    toast.error("Something went wrong");
  }
});
```

- Disable the submit button while submitting (`form.formState.isSubmitting`)
- Always handle the loading state visually — button spinner or skeleton

---

## Checklist

- [ ] Schema defined outside component, type inferred
- [ ] `defaultValues` set
- [ ] Field errors inline below each field
- [ ] Submission/server errors as toast
- [ ] Submit button disabled during submission
- [ ] `valibot` used unless project already uses `zod`
