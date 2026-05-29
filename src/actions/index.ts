import { ActionError, defineAction } from 'astro:actions';
import * as v from 'valibot';

import { CONTACT_SCHEMA } from '~/schemas/contact.schema';
import { ContactEmail } from '~/emails/contact.email';
import { getResend } from '~/lib/resend';

export const server = {
  contact: defineAction({
    accept: 'form',
    handler: async (formData) => {
      const raw = Object.fromEntries(
        Object.entries({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        }).map(([k, val]) => [k, typeof val === 'string' ? val : ''])
      );

      const result = v.safeParse(CONTACT_SCHEMA, raw);
      if (!result.success) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: 'Invalid form payload',
        });
      }

      try {
        const resend = getResend();
        await resend.emails.send({
          to: 'alfredmouelle@gmail.com',
          react: ContactEmail(result.output),
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
