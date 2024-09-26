import { z } from 'zod';

export const contactSchema = z
  .object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z
      .string()
      .min(10),
  })
  .required();

export type ContactRequest = z.infer<typeof contactSchema>;
