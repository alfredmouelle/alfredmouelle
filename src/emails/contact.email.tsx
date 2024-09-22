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
}

export const ContactEmail = ({ name, email, message }: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>Nouveau message de contact de {name}</Preview>
    <Tailwind>
      <Body className="bg-gray-100 font-sans">
        <Container className="mx-auto my-8 max-w-2xl rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
          <Heading className="mb-4 text-2xl font-bold text-gray-800">
            Nouveau message de contact
          </Heading>
          <Text className="mb-4 text-gray-700">
            Vous avez reçu un nouveau message de {name}.
          </Text>
          <Container className="mb-4 rounded border border-gray-200 bg-gray-50 p-4">
            <Text className="font-semibold text-gray-800">Nom:</Text>
            <Text className="mb-2 text-gray-700">{name}</Text>
            <Text className="font-semibold text-gray-800">Email:</Text>
            <Text className="mb-2 text-gray-700">{email}</Text>
            <Text className="font-semibold text-gray-800">Message:</Text>
            <Text className="whitespace-pre-wrap text-gray-700">{message}</Text>
          </Container>
          <Text className="text-sm text-gray-500">
            Cet e-mail a été envoyé automatiquement depuis votre formulaire de
            contact.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
