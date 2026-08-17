import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import {
  ArrowUp,
  Check,
  Globe,
  Home,
  Languages,
  Link,
  Loader2,
  Mail,
  Menu,
  Moon,
  SunMedium,
  SunMoon,
} from 'lucide-react';

import { cn } from '~/lib/utils';

const XLogoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Icons = {
  sunMedium: SunMedium,
  moon: Moon,
  sunMoon: SunMoon,
  menu: Menu,
  link: Link,
  language: Languages,
  website: Globe,
  arrowUp: ArrowUp,
  github: GitHubLogoIcon,
  twitter: XLogoIcon,
  linkedin: LinkedInLogoIcon,
  mail: Mail,
  check: Check,
  loader: Loader2,
  home: Home,
} as const;

interface IconProps {
  name: keyof typeof Icons;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const IconComponent = Icons[name];
  return <IconComponent className={cn('size-5', className)} />;
}
