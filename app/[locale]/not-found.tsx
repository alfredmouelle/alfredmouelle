import { Metadata } from 'next';

import { NotFound } from '@/components/not-found';

export const metadata: Metadata = {
  robots: {
    index: false,
  },
};

export default async function NotFoundPage() {
  return NotFound();
}
