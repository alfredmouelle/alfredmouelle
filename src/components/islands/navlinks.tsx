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
  projects?: string;
}

interface NavLinkProps {
  text: string;
  anchor: string;
  homePath: string;
  closeMenu?: () => void;
}

const ANCHOR_CHANGE_EVENT = 'app:anchor-change';

const readAnchor = (): string | null => {
  if (typeof window === 'undefined') return null;
  return new URLSearchParams(window.location.search).get('anchor');
};

const NavLink = ({ text, anchor, homePath, closeMenu }: NavLinkProps) => {
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
    <li>
      <button
        type="button"
        onClick={jumpTo}
        aria-current={active ? 'true' : undefined}
        className={cn(
          'flex w-full cursor-pointer items-center rounded-full px-3 py-1.5 text-sm font-medium transition-colors md:w-auto',
          active
            ? 'bg-primary/10 text-primary'
            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
        )}
      >
        {text}
      </button>
    </li>
  );
};

interface NavLinksProps {
  labels: Labels;
  homePath: string;
  showProjects?: boolean;
  closeMenu?: () => void;
}

export const NavLinks = ({
  labels,
  homePath,
  showProjects = false,
  closeMenu,
}: NavLinksProps) => (
  <>
    <NavLink
      text={labels.scholarship}
      anchor="scholarship"
      homePath={homePath}
      closeMenu={closeMenu}
    />
    <NavLink
      text={labels.skills}
      anchor="skills"
      homePath={homePath}
      closeMenu={closeMenu}
    />
    <NavLink
      text={labels.job}
      anchor="jobs"
      homePath={homePath}
      closeMenu={closeMenu}
    />
    {showProjects && labels.projects ? (
      <NavLink
        text={labels.projects}
        anchor="projects"
        homePath={homePath}
        closeMenu={closeMenu}
      />
    ) : null}
    <NavLink
      text={labels.contact}
      anchor="contact"
      homePath={homePath}
      closeMenu={closeMenu}
    />
  </>
);

interface MobileNavProps extends NavLinksProps {
  logoSrc: string;
}

export const MobileNav = ({
  labels,
  homePath,
  logoSrc,
  showProjects,
}: MobileNavProps) => {
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
            showProjects={showProjects}
            closeMenu={() => setOpen(false)}
          />
        </ul>
      </SheetContent>
    </Sheet>
  );
};
