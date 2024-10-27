'use client';

import { useRouter } from 'next/navigation';

import { useScopedI18n } from '@locales/client';

import { Button } from '@/components/ui/button';

const anchor = 'contact';

export const ContactButton = () => {
  const router = useRouter();
  const t = useScopedI18n('section_hero');

  const jumpToAnchor = () => {
    const element = document.getElementById(anchor);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    router.replace(`/?anchor=${anchor}`, { scroll: false });
  };

  return (
    <Button
      variant="link"
      onClick={jumpToAnchor}
      className="hover:no-underline"
    >
      <div className="text-xs font-medium text-green-700 dark:text-green-500 flex items-center gap-x-1">
        <div className="size-2 rounded-full bg-green-700 dark:bg-green-500 animate-pulse" />
        <p>{t('availability')}</p>
      </div>
    </Button>
  );
};
