'use server';

import { ContactEmail } from '@/emails/contact.email';
import { action } from '@/lib/next-safe-action';
import { resend } from '@/lib/resend';
import { contactSchema } from '@/schemas/contact.schema';
import { getScopedI18n } from '@locales/server';
import { } from 'next-safe-action';

export const contactAction = action
.schema(contactSchema)
.action(async ({ parsedInput }) => {
  const t = await getScopedI18n("section_contact.form");

  try {
    await resend.emails.send({
      to: 'alfredmouelle@gmail.com',
      react: ContactEmail(parsedInput),
      from: 'Portfolio <infos@resend.dev>',
      subject: 'Nouveau message de contact',
    });

    return { success: true, message: t('messages.success') };
  } catch (error) {
    console.error(error);
    return { success: false, error: t('messages.error') };
  }
});