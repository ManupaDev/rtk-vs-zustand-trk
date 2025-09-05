"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";
import { AppStoreProvider } from "@/lib/zustand/StoreProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppStoreProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
        enableColorScheme
      >
        {children}
      </NextThemesProvider>
    </AppStoreProvider>
  );
}
