import * as v from 'valibot';

export const CONTACT_SCHEMA = v.object({
  name: v.pipe(v.string(), v.minLength(2)),
  subject: v.pipe(v.string(), v.minLength(5)),
  email: v.pipe(v.string(), v.email()),
  message: v.pipe(v.string(), v.minLength(10)),
});

export type ContactRequest = v.InferOutput<typeof CONTACT_SCHEMA>;
