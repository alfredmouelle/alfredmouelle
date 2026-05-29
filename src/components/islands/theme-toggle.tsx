import { useEffect, useState } from 'react';

import { Icon } from '~/components/icons';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';

import { cn } from '~/lib/utils';

type Theme = 'light' | 'dark' | 'system';

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const dark = theme === 'dark' || (theme === 'system' && prefersDark);
  root.classList.toggle('dark', dark);
  if (theme === 'system') localStorage.removeItem('theme');
  else localStorage.setItem('theme', theme);
};

const readTheme = (): Theme => {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return 'system';
};

interface Labels {
  light: string;
  dark: string;
  system: string;
}

const Item = ({
  label,
  theme,
  icon,
  active,
  onSelect,
}: {
  label: string;
  theme: Theme;
  icon: React.ReactNode;
  active: boolean;
  onSelect: (t: Theme) => void;
}) => (
  <DropdownMenuItem
    onClick={() => onSelect(theme)}
    className={cn(
      'flex cursor-pointer items-center justify-between',
      active ? 'bg-accent text-accent-foreground' : ''
    )}
  >
    <span className="flex items-center gap-x-2">
      {icon}
      {label}
    </span>
    {active && <Icon name="check" className="ml-2 size-4" />}
  </DropdownMenuItem>
);

export const ThemeToggle = ({ labels }: { labels: Labels }) => {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(readTheme());
    setMounted(true);
  }, []);

  const select = (t: Theme) => {
    setTheme(t);
    applyTheme(t);
  };

  if (!mounted) return null;

  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          {theme === 'dark' ? (
            <Icon name="moon" className="text-blue-500" />
          ) : theme === 'light' ? (
            <Icon name="sunMedium" className="text-yellow-500" />
          ) : (
            <Icon name="sunMoon" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="space-y-1">
        <Item
          theme="light"
          label={labels.light}
          active={theme === 'light'}
          onSelect={select}
          icon={<Icon name="sunMedium" className="text-yellow-500" />}
        />
        <Item
          theme="dark"
          label={labels.dark}
          active={theme === 'dark'}
          onSelect={select}
          icon={<Icon name="moon" className="text-blue-500" />}
        />
        <Item
          theme="system"
          label={labels.system}
          active={theme === 'system'}
          onSelect={select}
          icon={<Icon name="sunMoon" />}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
