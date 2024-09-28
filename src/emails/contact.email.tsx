import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
  subject: string;
}

export const ContactEmail = ({
  name,
  email,
  message,
  subject,
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>Nouveau message de contact de {name}</Preview>
    <Tailwind>
      <Body className="bg-gray-100 font-sans">
        <Container className="mx-auto my-8 max-w-2xl rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
          <Heading className="mb-4 text-2xl font-bold text-gray-800">
            {subject}
          </Heading>
          <Text className="mb-4 text-gray-700">
            {name} (
            <a href={`mailto:${email}`} className="text-blue-500 underline">
              {email}
            </a>
            ) vient de laisser un message.
          </Text>
          <Container className="mb-4 rounded border border-gray-200 bg-gray-50 p-4">
            <Text className="whitespace-pre-wrap text-gray-700">{message}</Text>
          </Container>
          <Text className="text-sm text-gray-500">
            Ce mail provient de mon formulaire de contact depuis mon{' '}
            <a
              href="https://alfredmouelle.com"
              className="text-blue-500 underline"
            >
              portfolio
            </a>
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
