import { HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

import { FadeInSection } from './animations/fade-in';

interface PageWrapperProps extends HTMLAttributes<HTMLElement> {
  innerWrapperClassName?: string;
  skipFadeIn?: boolean;
}

export const Section = ({
  children,
  className,
  skipFadeIn,
  innerWrapperClassName,
  ...props
}: PropsWithChildren<PageWrapperProps>) => {
  return (
    <section className={cn('py-10 md:py-24', className)} {...props}>
      {skipFadeIn ? (
        <div className={cn('container', innerWrapperClassName)}>{children}</div>
      ) : (
        <FadeInSection>
          <div className={cn('container', innerWrapperClassName)}>
            {children}
          </div>
        </FadeInSection>
      )}
    </section>
  );
};

export const SectionTitle = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <h1 className={cn('mb-10 text-3xl font-bold', className)}>{children}</h1>
  );
};
