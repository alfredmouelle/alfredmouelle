'use server';

import { ContactEmail } from '@/components/emails/contact.email';
import { action } from '@/lib/next-safe-action';
import { resend } from '@/lib/resend';
import { contactSchema } from '@/schemas/contact.schema';
import { render } from '@react-email/render';
import { } from 'next-safe-action';


export const contactAction = action
.schema(contactSchema)
.action(async ({ parsedInput }) => {
  try {
    const emailHtml = await render(ContactEmail(parsedInput));

    await resend.emails.send({
      html: emailHtml,
      to: 'alfredmouelle@gmail.com',
      from: 'Alfred Mouelle | Portfolio',
      subject: 'Nouveau message de contact',
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Erreur lors de l\envoi de l\'email' };
  }
});