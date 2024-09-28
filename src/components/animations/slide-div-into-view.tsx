import { PropsWithChildren } from 'react';

import * as motion from 'framer-motion/client';

import { cn } from '@/lib/utils';

interface SlideDivIntoViewProps extends PropsWithChildren {
  delay?: number;
  offset: number;
  className?: string;
}

export function SlideDivIntoView({
  children,
  className,
  delay,
  offset,
}: SlideDivIntoViewProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, x: offset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 12,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}
