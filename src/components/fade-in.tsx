'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

interface FadeInSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function FadeInSection({
  children,
  className,
  ...props
}: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    if (isVisible && currentRef) {
      observer.unobserve(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  return (
    <div
      className={cn(
        'transition-opacity duration-500 ease-in',
        {
          'opacity-0': !isVisible,
          'opacity-100': isVisible,
        },
        className
      )}
      ref={domRef}
      {...props}
    >
      {children}
    </div>
  );
}
