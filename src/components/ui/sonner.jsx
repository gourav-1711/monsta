"use client";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { useEffect } from "react";

const Toaster = ({ ...props }) => {
  let { theme = "dark" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group animate-fade-in animate-fade-out"
      position="bottom-right"
      expand={false}
      closeButton
      richColors={true}
      duration={3000}
      toastOptions={{
        classNames: {
          toast:
            "group animate-fade-in animate-fade-out toast group-[.toaster]:bg-blue group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg data-[swipe=move]:transition-all   group-[.toast]:animate-in group-[.toast]:slide-in-from-right-full group-[.toast]:slide-in-from-top-full data-[state=open]:slide-in-from-top-full data-[state=closed]:animate-fade-out data-[swipe=end]:animate-fade-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=closed]:slide-out-to-top-full",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
