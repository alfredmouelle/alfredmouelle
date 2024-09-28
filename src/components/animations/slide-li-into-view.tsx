import { PropsWithChildren } from 'react';

import * as motion from 'framer-motion/client';

import { cn } from '@/lib/utils';

interface SlideLiIntoViewProps extends PropsWithChildren {
  index: number;
  className?: string;
}

export function SlideLiIntoView({
  children,
  className,
  index,
}: SlideLiIntoViewProps) {
  return (
    <motion.li
      key={index}
      className={cn(className)}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 12,
        delay: index * 0.1,
      }}
    >
      {children}
    </motion.li>
  );
}
