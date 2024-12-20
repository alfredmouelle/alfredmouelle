import { z } from 'zod';

export const CONTACT_SCHEMA = z
  .object({
    name: z.string().min(2),
    subject: z.string().min(5),
    email: z.string().email(),
    message: z.string().min(10),
  })
  .required();

export type ContactRequest = z.infer<typeof CONTACT_SCHEMA>;
