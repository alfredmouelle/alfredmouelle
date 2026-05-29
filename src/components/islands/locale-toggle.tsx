import { Icon } from '~/components/icons';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';

import type { Locale } from '~/locales';
import { cn } from '~/lib/utils';

interface Labels {
  label: string;
  fr: string;
  en: string;
}

const swapLocale = (target: Locale) => {
  const { pathname, search, hash } = window.location;
  const next = pathname.replace(/^\/(fr|en)(\/|$)/, `/${target}$2`);
  window.location.assign(next + search + hash);
};

const Item = ({
  label,
  locale,
  current,
}: {
  label: string;
  locale: Locale;
  current: Locale;
}) => (
  <DropdownMenuItem
    onClick={() => swapLocale(locale)}
    className={cn(
      'flex items-center justify-between',
      locale === current ? 'bg-accent text-accent-foreground' : ''
    )}
  >
    <span>{label}</span>
    {locale === current && <Icon name="check" className="ml-2 size-4" />}
  </DropdownMenuItem>
);

export const LocaleToggle = ({
  labels,
  currentLocale,
}: {
  labels: Labels;
  currentLocale: Locale;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Icon name="language" />
          <span className="sr-only">{labels.label}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="space-y-1">
        <Item locale="fr" label={labels.fr} current={currentLocale} />
        <Item locale="en" label={labels.en} current={currentLocale} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
