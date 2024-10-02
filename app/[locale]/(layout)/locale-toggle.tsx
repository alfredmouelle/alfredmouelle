'use client';

import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from '@locales/client';

import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { cn } from '@/lib/utils';

const Item = function ({
  label,
  locale,
}: {
  label: string;
  locale: 'en' | 'fr';
}) {
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  return (
    <DropdownMenuItem
      onClick={() => changeLocale(locale)}
      className={cn(
        'flex items-center justify-between',
        locale === currentLocale ? 'bg-accent text-accent-foreground' : ''
      )}
    >
      <span>{label}</span>
      {locale === currentLocale && (
        <Icon name="check" className="ml-2 size-4" />
      )}
    </DropdownMenuItem>
  );
};

export const LocaleToggle = () => {
  const t = useScopedI18n('navbar.locales');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Icon name="language" />
          <span className="sr-only">{t('label')}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="space-y-1">
        <Item locale="fr" label={t('fr')} />
        <Item locale="en" label={t('en')} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
