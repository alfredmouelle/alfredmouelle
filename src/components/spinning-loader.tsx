import { Icon } from '@/components/icons';

import { cn } from '@/lib/utils';

interface SpinningLoaderProps {
  className?: string;
}

export const SpinningLoader = ({ className }: SpinningLoaderProps) => {
  return (
    <Icon name="loader" className={cn('h-5 w-5 animate-spin', className)} />
  );
};
