"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const Item = function ({ label, theme }: { label: string; theme: string }) {
  const { setTheme, theme: activeTheme } = useTheme();

  return (
    <DropdownMenuItem
      onClick={() => setTheme(theme)}
      className={cn(
        "flex items-center justify-between",
        activeTheme === theme ? "bg-accent text-accent-foreground" : "",
      )}
    >
      <span>{label}</span>
      {activeTheme === theme && <Icons.check className="ml-2 h-4 w-4" />}
    </DropdownMenuItem>
  );
};

export const ThemeToggle = () => {
  const { theme } = useTheme();

  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="">
          {theme === "dark" ? (
            <Icons.sunMedium className="h-5 w-5 text-yellow-300" />
          ) : theme === "light" ? (
            <Icons.moon className="h-5 w-5 text-blue-300" />
          ) : (
            <Icons.sunMoon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <Item theme="light" label="Clair" />
        <Item theme="dark" label="Sombre" />
        <Item theme="system" label="Système" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
