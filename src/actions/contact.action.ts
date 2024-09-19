'use server';

import { ContactEmail } from '@/components/emails/contact.email';
import { action } from '@/lib/next-safe-action';
import { resend } from '@/lib/resend';
import { render } from '@react-email/render';
import { } from 'next-safe-action';
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

export type ContactRequest = z.infer<typeof contactSchema>


export const contactAction = action
.schema(contactSchema)
.action(async (data) => {
  try {
    const emailHtml = await render(ContactEmail(data.parsedInput));

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