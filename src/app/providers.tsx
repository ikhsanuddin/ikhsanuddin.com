"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export function ThemeProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
}

export function ParallaxProviders({ children }: { children: ReactNode }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
