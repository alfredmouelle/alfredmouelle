import { APP_ROUTES } from "@/routes";
import Link from "next/link";
import { MobileNav, NavLinks } from "./navlinks";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
  return (
    <header className="h-20 py-4">
      <nav className="container flex items-center rounded-full md:gap-10">
        <div className="flex items-center justify-center">
          <MobileNav />
          <Link
            href={APP_ROUTES.web.home}
            className="ml-2 font-brand text-2xl font-semibold md:text-3xl"
          >
            Portfolio
          </Link>

          <ul className="ml-10 hidden items-center gap-10 justify-self-start text-sm font-medium md:flex">
            <NavLinks />
          </ul>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
