import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface PageWrapperProps extends PropsWithChildren {
  outerWrapperClassName?: string;
  innerWrapperClassName?: string;
}

export const Section = ({
  children,
  outerWrapperClassName,
  innerWrapperClassName,
}: PageWrapperProps) => {
  return (
    <section className={cn("py-10 md:py-24", outerWrapperClassName)}>
      <div className={cn("container", innerWrapperClassName)}>{children}</div>
    </section>
  );
};
