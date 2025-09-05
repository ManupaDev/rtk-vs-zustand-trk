"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";
import { BoardSlice } from "./features/boardSlice";
import { createAppStore } from "./store";
export type AppStoreApi = ReturnType<typeof createAppStore>;

export const AppStoreContext = createContext<AppStoreApi | undefined>(
  undefined
);

export interface BoardStoreProviderProps {
  children: ReactNode;
}

export const BoardStoreProvider = ({ children }: BoardStoreProviderProps) => {
  const storeRef = useRef<AppStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createAppStore();
  }

  return (
    <AppStoreContext.Provider value={storeRef.current}>
      {children}
    </AppStoreContext.Provider>
  );
};

export const useAppStore = <T,>(selector: (store: BoardSlice) => T): T => {
  const appStoreContext = useContext(AppStoreContext);

  if (!appStoreContext) {
    throw new Error(`useAppStore must be used within AppStoreProvider`);
  }

  return useStore(appStoreContext, selector);
};
