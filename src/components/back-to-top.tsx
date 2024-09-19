"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Icons } from "./icons";
import { Button } from "./ui/button";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant="outline"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-4 right-4 h-auto rounded-full p-3 opacity-0 shadow-lg transition md:bottom-8 md:right-8",
        {
          "opacity-100": isVisible,
        },
      )}
    >
      <Icons.arrowUp className="h-7 w-7" />
      <span className="sr-only">Back to top</span>
    </Button>
  );
};
