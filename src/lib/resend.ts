import { Resend } from 'resend';

let client: Resend | null = null;

export const getResend = (): Resend => {
  if (client) return client;
  const apiKey = import.meta.env.RESEND_API_KEY ?? process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not set');
  }
  client = new Resend(apiKey);
  return client;
};
