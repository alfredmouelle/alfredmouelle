'use server';

import { getScopedI18n } from '@locales/server';
import 'next-safe-action';

import { CONTACT_SCHEMA } from '@/schemas/contact.schema';

import { ContactEmail } from '@/emails/contact.email';
import { action } from '@/lib/next-safe-action';
import { resend } from '@/lib/resend';

export const contactAction = action
  .schema(CONTACT_SCHEMA)
  .action(async ({ parsedInput }) => {
    const t = await getScopedI18n('section_contact.form');

    try {
      await resend.emails.send({
        to: 'alfredmouelle@gmail.com',
        react: ContactEmail(parsedInput),
        from: 'Mon Portfolio <infos@resend.dev>',
        subject: 'Nouveau message de contact',
      });

      return { success: true, message: t('messages.success') };
    } catch (error) {
      console.error(error);
      return { success: false, error: t('messages.error') };
    }
  });
