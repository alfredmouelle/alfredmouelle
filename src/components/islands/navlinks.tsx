import { useEffect, useState } from 'react';

import { Icon } from '~/components/icons';
import { Button } from '~/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/sheet';

import { cn } from '~/lib/utils';

interface Labels {
  scholarship: string;
  skills: string;
  job: string;
  contact: string;
}

interface NavLinkProps {
  text: string;
  anchor: string;
  icon: React.ReactNode;
  homePath: string;
  closeMenu?: () => void;
}

const ANCHOR_CHANGE_EVENT = 'app:anchor-change';

const readAnchor = (): string | null => {
  if (typeof window === 'undefined') return null;
  return new URLSearchParams(window.location.search).get('anchor');
};

const NavLink = ({
  text,
  icon,
  anchor,
  homePath,
  closeMenu,
}: NavLinkProps) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const sync = () => setActive(readAnchor() === anchor);
    sync();
    window.addEventListener('popstate', sync);
    window.addEventListener(ANCHOR_CHANGE_EVENT, sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener(ANCHOR_CHANGE_EVENT, sync);
    };
  }, [anchor]);

  const jumpTo = () => {
    closeMenu?.();
    const element = document.getElementById(anchor);
    if (element) {
      const navbarHeight = window.innerWidth < 768 ? 50 : 0;
      const top =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    window.history.replaceState(null, '', `${homePath}?anchor=${anchor}`);
    window.dispatchEvent(new Event(ANCHOR_CHANGE_EVENT));
  };

  return (
    <li
      onClick={jumpTo}
      className={cn('cursor-pointer rounded-md', { 'bg-primary/10': active })}
    >
      <Button
        variant="outline"
        className={cn(
          'flex w-full items-start justify-start border-none bg-transparent text-start text-foreground',
          { 'border-2 font-bold text-primary': active }
        )}
      >
        {icon}
        {text}
      </Button>
    </li>
  );
};

interface NavLinksProps {
  labels: Labels;
  homePath: string;
  closeMenu?: () => void;
}

export const NavLinks = ({ labels, homePath, closeMenu }: NavLinksProps) => (
  <>
    <NavLink
      text={labels.scholarship}
      anchor="scholarship"
      homePath={homePath}
      closeMenu={closeMenu}
      icon={<Icon name="graduation" className="mr-2" />}
    />
    <NavLink
      text={labels.skills}
      anchor="skills"
      homePath={homePath}
      closeMenu={closeMenu}
      icon={<Icon name="skill" className="mr-2" />}
    />
    <NavLink
      text={labels.job}
      anchor="jobs"
      homePath={homePath}
      closeMenu={closeMenu}
      icon={<Icon name="briefcase" className="mr-2" />}
    />
    <NavLink
      text={labels.contact}
      anchor="contact"
      homePath={homePath}
      closeMenu={closeMenu}
      icon={<Icon name="contact" className="mr-2" />}
    />
  </>
);

interface MobileNavProps extends NavLinksProps {
  logoSrc: string;
}

export const MobileNav = ({ labels, homePath, logoSrc }: MobileNavProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => setOpen(true)}
        >
          <Icon name="menu" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" aria-describedby="app-menu">
        <SheetHeader>
          <SheetTitle className="font-mono text-2xl font-semibold md:text-3xl">
            <div className="flex items-center justify-center gap-x-2">
              <img src={logoSrc} alt="Logo" width={25} height={25} />
              PORTFOLIO
            </div>
          </SheetTitle>
        </SheetHeader>

        <ul className="mt-8 flex flex-col gap-y-4 text-sm font-medium">
          <NavLinks
            labels={labels}
            homePath={homePath}
            closeMenu={() => setOpen(false)}
          />
        </ul>
      </SheetContent>
    </Sheet>
  );
};
