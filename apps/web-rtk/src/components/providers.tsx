"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import StoreProvider from "@/lib/redux/StoreProvider";
import { Toaster } from "@workspace/ui/components/toast";

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
        <Toaster position="bottom-right" />
      </NextThemesProvider>
    </StoreProvider>
  );
}
