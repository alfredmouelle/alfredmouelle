"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const anchor = "contact";

export const ContactButton = () => {
  const router = useRouter();

  const jumpToAnchor = () => {
    const element = document.getElementById(anchor);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    router.push(`/?anchor=${anchor}`, { scroll: false });
  };

  return (
    <Button variant="link" onClick={jumpToAnchor}>
      Me contacter
    </Button>
  );
};
