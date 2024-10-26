import { Icon } from '@/components/icons';

import { cn } from '@/lib/utils';

interface SpinningLoaderProps {
  className?: string;
}

export const SpinningLoader = ({ className }: SpinningLoaderProps) => {
  return (
    <Icon name="loader" className={cn('size-5 animate-spin', className)} />
  );
};
