import { Icons } from '@/components/icons';

import { cn } from '@/lib/utils';

interface SpinningLoaderProps {
  className?: string;
}

export const SpinningLoader = (props?: SpinningLoaderProps) => {
  return (
    <Icons.loader
      className={cn('h-5 w-5 animate-spin', props?.className || {})}
    />
  );
};
