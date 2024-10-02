import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import {
  ArrowRight,
  ArrowUp,
  ArrowUpDown,
  BriefcaseBusiness,
  Check,
  Code2,
  Download,
  Globe,
  GraduationCap,
  Home,
  Languages,
  Layout,
  Link,
  Loader2,
  Mail,
  Menu,
  Moon,
  Phone,
  Rocket,
  Send,
  Server,
  Smartphone,
  SunMedium,
  SunMoon,
  UserPen,
} from 'lucide-react';

import { cn } from '@/lib/utils';

export const Icons = {
  sunMedium: SunMedium,
  moon: Moon,
  menu: Menu,
  link: Link,
  send: Send,
  contact: UserPen,
  briefcase: BriefcaseBusiness,
  graduation: GraduationCap,
  phone: Phone,
  website: Globe,
  arrowUp: ArrowUp,
  download: Download,
  language: Languages,
  github: GitHubLogoIcon,
  twitter: TwitterLogoIcon,
  linkedin: LinkedInLogoIcon,
  mail: Mail,
  check: Check,
  loader: Loader2,
  sunMoon: SunMoon,
  arrowRight: ArrowRight,
  arrowUpDown: ArrowUpDown,
  skill: Rocket,
  code: Code2,
  layout: Layout,
  server: Server,
  smartphone: Smartphone,

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
