import { cn } from "@/lib/utils";
import { HTMLAttributes, PropsWithChildren } from "react";

interface PageWrapperProps extends HTMLAttributes<HTMLElement> {
  innerWrapperClassName?: string;
}

export const Section = ({
  children,
  className,
  innerWrapperClassName,
  ...props
}: PropsWithChildren<PageWrapperProps>) => {
  return (
    <section className={cn("py-10 md:py-24", className)} {...props}>
      <div className={cn("container", innerWrapperClassName)}>{children}</div>
    </section>
  );
};
