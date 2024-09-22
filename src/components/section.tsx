import { HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

interface PageWrapperProps extends HTMLAttributes<HTMLElement> {
  innerWrapperClassName?: string;
}

export const Section = ({
  children,
  className,
  innerWrapperClassName,
  ...props
}: PropsWithChildren<PageWrapperProps>) => {
  return (
    <section className={cn('py-10 md:py-24', className)} {...props}>
      <div className={cn('container', innerWrapperClassName)}>{children}</div>
    </section>
  );
};

export const SectionTitle = ({ children }: PropsWithChildren<{}>) => {
  return <h1 className="mb-10 text-3xl font-bold">{children}</h1>;
};
