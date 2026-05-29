import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro/zod';

import { ContactEmail } from '~/emails/contact.email';
import { getResend } from '~/lib/resend';

const ContactInput = z.object({
  name: z.string().min(2),
  subject: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export const server = {
  contact: defineAction({
    accept: 'form',
    input: ContactInput,
    handler: async (input) => {
      try {
        const resend = getResend();
        await resend.emails.send({
          to: 'alfredmouelle@gmail.com',
          react: ContactEmail(input),
          from: 'Mon Portfolio <infos@resend.dev>',
          subject: 'Nouveau message de contact',
        });
        return { success: true as const };
      } catch (error) {
        console.error(error);
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to send email',
        });
      }
    },
  }),
};
