import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

import { cn } from '~/lib/utils';

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
    <div className={cn(className)}>
      <motion.div
        initial={{ opacity: 0, y: offset }}
        whileInView={{ opacity: 1, y: 0 }}
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
    </div>
  );
}
