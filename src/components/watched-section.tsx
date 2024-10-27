'use client';

import { useRouter } from 'next/navigation';
import { HTMLAttributes, PropsWithChildren, useEffect } from 'react';

import { useIntersection } from '@mantine/hooks';

import { cn } from '@/lib/utils';

interface WatchedSectionProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export function WatchedSection({
  className,
  children,
  ...props
}: PropsWithChildren<WatchedSectionProps>) {
  const { ref, entry } = useIntersection({ threshold: 0.85 });
  const router = useRouter();

  useEffect(() => {
    if (!entry || !entry.target.id) return;

    if (entry.isIntersecting) {
      if (entry.target.id === 'section_hero') {
        router.replace(`/`, { scroll: false });
      } else {
        router.replace(`/?anchor=${entry.target.id}`, { scroll: false });
      }
    }
  }, [entry, router]);

  return (
    <section ref={ref} className={cn('py-10 md:py-24', className)} {...props}>
      {children}
    </section>
  );
}
