import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import LogoSvg from '@assets/logo.svg';

import { SpinningLoader } from '@/components/spinning-loader';

import { LocaleToggle } from './locale-toggle';
import { MobileNav, NavLinks } from './navlinks';
import { SkeletonNav } from './skeleton-nav';
import { ThemeToggle } from './theme-toggle';

export const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-20 py-4 backdrop-blur-sm">
      <nav className="container flex items-center rounded-full border bg-card/90 py-2 shadow-xl md:gap-10">
        <div className="flex items-center justify-center">
          <Link href="/" className="shrink-0">
            <Image src={LogoSvg} alt="Logo" width={35} height={35} priority />
          </Link>

          <ul className="ml-4 hidden items-center gap-x-1 justify-self-start text-sm font-medium md:flex lg:ml-10 lg:gap-10">
            <Suspense fallback={<SkeletonNav />}>
              <NavLinks />
            </Suspense>
          </ul>
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-1.5">
          <LocaleToggle />
          <Suspense fallback={<SpinningLoader />}>
            <ThemeToggle />
          </Suspense>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};
