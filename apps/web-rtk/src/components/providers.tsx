"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import StoreProvider from "@/lib/redux/StoreProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
        enableColorScheme
      >
        {children}
      </NextThemesProvider>
    </StoreProvider>
  );
}
