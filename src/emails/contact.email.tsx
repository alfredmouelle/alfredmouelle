import { Link } from 'react-email';

import type { ContactRequest } from '~/schemas/contact.schema';

import {
  EMAIL_COLORS,
  EmailBlockquote,
  EmailDivider,
  EmailField,
  EmailHeading,
  EmailLayout,
} from './_components/email-layout';

interface ContactEmailProps extends ContactRequest {}

export const ContactEmail = ({
  name,
  email,
  message,
  subject,
}: ContactEmailProps) => (
  <EmailLayout preview={`${name} : ${subject}`}>
    <EmailHeading kicker="Nouveau message">{subject}</EmailHeading>

    <EmailField label="De">
      <span style={{ color: EMAIL_COLORS.fgStrong, fontWeight: 600 }}>
        {name}
      </span>{' '}
      <Link
        href={`mailto:${email}`}
        style={{
          color: EMAIL_COLORS.primary,
          textDecoration: 'underline',
          textUnderlineOffset: 2,
        }}
      >
        &lt;{email}&gt;
      </Link>
    </EmailField>

    <EmailField label="Message">
      <EmailBlockquote>{message}</EmailBlockquote>
    </EmailField>

    <EmailDivider />

    <Link
      href={`mailto:${email}?subject=Re:%20${encodeURIComponent(subject)}`}
      style={{
        backgroundColor: EMAIL_COLORS.fgStrong,
        borderRadius: 9999,
        color: '#FFFFFF',
        display: 'inline-block',
        fontSize: 14,
        fontWeight: 500,
        marginTop: 20,
        padding: '11px 22px',
        textDecoration: 'none',
      }}
    >
      Répondre à {name.split(' ')[0]} →
    </Link>
  </EmailLayout>
);

export default function ContactEmailPreview() {
  return (
    <ContactEmail
      name="Jane Doe"
      email="jane.doe@example.com"
      subject="Proposition de mission freelance"
      message={
        "Bonjour Alfred,\n\nJ'aurais besoin d'un développeur full-stack pour " +
        'construire un MVP en 6 semaines (Next.js + Postgres). Tu serais ' +
        'disponible pour un appel cette semaine ?\n\nMerci !'
      }
    />
  );
}
