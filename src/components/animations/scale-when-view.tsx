import { PropsWithChildren } from 'react';

import * as motion from 'framer-motion/client';

import { cn } from '@/lib/utils';

export function ScaleWhenView({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 12,
      }}
      custom={{ className: cn(className) }}
    >
      {children}
    </motion.div>
  );
}
