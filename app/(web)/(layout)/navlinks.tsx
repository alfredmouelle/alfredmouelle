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
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const NavLink = ({
  text,
  anchor,
  closeMenu,
}: {
  text: string;
  anchor: string;
  closeMenu?: () => void;
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const active = params.get("anchor") === anchor;

  const jumpToAnchor = () => {
    closeMenu && closeMenu();
    router.push(`?anchor=${anchor}`, { scroll: true });
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
        {text}
      </Button>
    </li>
  );
};

export const NavLinks = ({ closeMenu }: { closeMenu?: () => void }) => {
  return (
    <>
      <NavLink text="Mon Parcours" closeMenu={closeMenu} anchor="cursus" />
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
          <SheetTitle>Archivist</SheetTitle>
        </SheetHeader>
        <ul className="mt-8 flex flex-col gap-4 text-sm font-medium">
          <NavLinks closeMenu={() => setOpen(false)} />
        </ul>
      </SheetContent>
    </Sheet>
  );
};
