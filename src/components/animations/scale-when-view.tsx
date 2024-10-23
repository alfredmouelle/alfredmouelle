import { PropsWithChildren } from 'react';

import * as motion from 'framer-motion/client';

import { cn } from '@/lib/utils';

export function ScaleWhenView({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn(className)}>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 12,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
