import { useEffect, useState } from 'react';

import { Icon } from '~/components/icons';
import { Button } from '~/components/ui/button';

import { cn } from '~/lib/utils';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggle, { passive: true });
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  return (
    <Button
      variant="outline"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed bottom-4 right-4 z-40 size-11 rounded-full bg-card/80 p-0 shadow-float backdrop-blur-xl transition-all md:bottom-8 md:right-8',
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-2 opacity-0'
      )}
    >
      <Icon name="arrowUp" className="size-5" />
      <span className="sr-only">Back to top</span>
    </Button>
  );
};
