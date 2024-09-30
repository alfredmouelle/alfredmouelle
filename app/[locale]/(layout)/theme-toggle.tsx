'use client';

import { useScopedI18n } from '@locales/client';
import { useTheme } from 'next-themes';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useMounted } from '@/hooks/use-mounted';
import { cn } from '@/lib/utils';

const Item = function ({
  label,
  theme,
  icon,
}: {
  label: string;
  theme: string;
  icon: React.ReactNode;
}) {
  const { setTheme, theme: activeTheme } = useTheme();

  return (
    <DropdownMenuItem
      onClick={() => setTheme(theme)}
      className={cn(
        'flex cursor-pointer items-center justify-between',
        activeTheme === theme ? 'bg-accent text-accent-foreground' : ''
      )}
    >
      <span className="flex items-center gap-x-2">
        {icon}
        {label}
      </span>
      {activeTheme === theme && <Icons.check className="ml-2 h-4 w-4" />}
    </DropdownMenuItem>
  );
};

export const ThemeToggle = () => {
  const { theme } = useTheme();
  const t = useScopedI18n('theme_toggle');

  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="">
          {theme === 'dark' ? (
            <Icons.moon className="h-5 w-5 text-blue-500" />
          ) : theme === 'light' ? (
            <Icons.sunMedium className="h-5 w-5 text-yellow-500" />
          ) : (
            <Icons.sunMoon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="space-y-1">
        <Item
          theme="light"
          label={t('light')}
          icon={<Icons.sunMedium className="h-5 w-5 text-yellow-500" />}
        />

        <Item
          theme="dark"
          label={t('dark')}
          icon={<Icons.moon className="h-5 w-5 text-blue-500" />}
        />

        <Item
          theme="system"
          label={t('system')}
          icon={<Icons.sunMoon className="h-5 w-5" />}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
