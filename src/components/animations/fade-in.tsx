import { PropsWithChildren } from 'react';

import * as motion from 'framer-motion/client';

interface FadeInSectionProps extends PropsWithChildren {
  children: React.ReactNode;
}

export function FadeInSection({ children }: FadeInSectionProps) {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 12,
      }}
    >
      {children}
    </motion.div>
  );
}
