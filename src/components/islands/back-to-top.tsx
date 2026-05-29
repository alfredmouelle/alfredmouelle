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
        'fixed bottom-4 right-4 h-auto rounded-full p-3 opacity-0 shadow-lg transition md:bottom-8 md:right-8',
        { 'opacity-100': isVisible }
      )}
    >
      <Icon name="arrowUp" className="size-7" />
      <span className="sr-only">Back to top</span>
    </Button>
  );
};
