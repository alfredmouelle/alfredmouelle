"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@locales/client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const NavLink = ({
  text,
  icon,
  anchor,
  closeMenu,
}: {
  text: string;
  anchor: string;
  icon: React.ReactNode;
  closeMenu?: () => void;
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const active = params.get("anchor") === anchor;

  const jumpToAnchor = () => {
    closeMenu && closeMenu();
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    router.push(`/?anchor=${anchor}`, { scroll: false });
  };

  return (
    <li onClick={closeMenu}>
      <Button
        onClick={jumpToAnchor}
        variant="link"
        className={cn("text-muted-foreground", {
          "font-bold text-primary": active,
        })}
      >
        {icon}
        {text}
      </Button>
    </li>
  );
};

export const NavLinks = ({ closeMenu }: { closeMenu?: () => void }) => {
  const t = useScopedI18n("navbar.links");

  return (
    <>
      <NavLink
        text={t("scholarship")}
        closeMenu={closeMenu}
        anchor="scholarship"
        icon={<Icons.graduation className="mr-2 h-5 w-5" />}
      />

      <NavLink
        text={t("job")}
        closeMenu={closeMenu}
        anchor="jobs"
        icon={<Icons.briefcase className="mr-2 h-5 w-5" />}
      />

      <NavLink
        text={t("contact")}
        closeMenu={closeMenu}
        anchor="contact"
        icon={<Icons.contact className="mr-2 h-5 w-5" />}
      />
    </>
  );
};

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon" onClick={() => setOpen(true)}>
          <Icons.menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" aria-describedby="app-menu">
        <SheetHeader>
          <SheetTitle className="font-brand text-2xl font-semibold md:text-3xl">
            <div className="flex items-center justify-center gap-x-2">
              <Image src="/assets/logo.svg" alt="Logo" width={25} height={25} />
              Portfolio
            </div>
          </SheetTitle>
        </SheetHeader>

        <ul className="mt-8 flex flex-col gap-4 text-sm font-medium">
          <NavLinks closeMenu={() => setOpen(false)} />
        </ul>
      </SheetContent>
    </Sheet>
  );
};
