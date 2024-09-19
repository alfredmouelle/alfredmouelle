import { z } from 'zod';


export const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
}).required();

export type ContactRequest = z.infer<typeof contactSchema>