'use server';

import { ContactEmail } from '@/components/emails/contact.email';
import { action } from '@/lib/next-safe-action';
import { resend } from '@/lib/resend';
import { contactSchema } from '@/schemas/contact.schema';
import { } from 'next-safe-action';

export const contactAction = action
.schema(contactSchema)
.action(async ({ parsedInput }) => {
  try {
    await resend.emails.send({
      to: 'alfredmouelle@gmail.com',
      react: ContactEmail(parsedInput),
      from: 'Portfolio <infos@resend.dev>',
      subject: 'Nouveau message de contact',
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Erreur lors de l\envoi de l\'email' };
  }
});