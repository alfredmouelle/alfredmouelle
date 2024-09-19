import { SpinningLoader } from "@/components/spinning-loader";
import { APP_ROUTES } from "@/routes";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { MobileNav, NavLinks } from "./navlinks";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
  return (
    <header className="h-20 py-4">
      <nav className="container flex items-center rounded-full bg-[#F5F5F6] py-2 shadow-sm dark:bg-[#0D1324] md:gap-10">
        <div className="flex items-center justify-center">
          <Link href={APP_ROUTES.web.home}>
            <Image src="/assets/logo.svg" alt="Logo" width={40} height={40} />
          </Link>

          <ul className="ml-10 hidden items-center gap-10 justify-self-start text-sm font-medium md:flex">
            <Suspense fallback={<SpinningLoader />}>
              <NavLinks />
            </Suspense>
          </ul>
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-1.5">
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Header;
