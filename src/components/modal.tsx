"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@mantine/hooks";
import React, { PropsWithChildren } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

const useIsMobile = () => useMediaQuery("(max-width: 768px)");

export const Modal = ({
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <Drawer {...props}>{children}</Drawer>
  ) : (
    <Dialog {...props}>{children}</Dialog>
  );
};

export const ModalTrigger = ({
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <DrawerTrigger {...props}>{children}</DrawerTrigger>
  ) : (
    <DialogTrigger {...props}>{children}</DialogTrigger>
  );
};

export const ModalContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <DrawerContent
      {...props}
      ref={ref}
      className={cn("max-h-[80vh]", className)}
    >
      <div className="mx-auto w-full max-w-sm overflow-y-auto">{children}</div>
    </DrawerContent>
  ) : (
    <DialogContent
      {...props}
      ref={ref}
      className={cn("max-h-[80vh] overflow-y-auto md:min-w-[35%]", className)}
    >
      <div className="mx-auto w-full overflow-y-auto">{children}</div>
    </DialogContent>
  );
});
ModalContent.displayName = "ModalContent";

export const ModalHeader = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <DrawerHeader {...props}>{children}</DrawerHeader>
  ) : (
    <DialogHeader {...props}>{children}</DialogHeader>
  );
};
ModalHeader.displayName = "ModalHeader";

export const ModalFooter = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <DrawerFooter {...props}>{children}</DrawerFooter>
  ) : (
    <DialogFooter {...props}>{children}</DialogFooter>
  );
};
ModalFooter.displayName = "ModalFooter";

export const ModalTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ children, ...props }, ref) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <DrawerTitle {...props} ref={ref}>
      {children}
    </DrawerTitle>
  ) : (
    <DialogTitle {...props} ref={ref}>
      {children}
    </DialogTitle>
  );
});
ModalTitle.displayName = "ModalTitle";

export const ModalDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ children, ...props }, ref) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <DrawerDescription {...props} ref={ref}>
      {children}
    </DrawerDescription>
  ) : (
    <DialogDescription {...props} ref={ref}>
      {children}
    </DialogDescription>
  );
});
ModalDescription.displayName = "ModalDescription";

export const ModalContentWrapper = ({ children }: PropsWithChildren<{}>) => {
  const isMobile = useIsMobile();

  return (
    <div className={cn("", { "px-4 py-2": isMobile, "py-4": !isMobile })}>
      {children}
    </div>
  );
};
