'use client';

import { PropsWithChildren } from 'react';

import { useGradientBorder } from '@/hooks/use-gradient-border';

export function GradientBorder({ children }: PropsWithChildren<{}>) {
  const ref = useGradientBorder();

  return (
    <div ref={ref} className="rounded-full">
      {children}
    </div>
  );
}
