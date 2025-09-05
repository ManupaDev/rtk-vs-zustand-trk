// src/providers/counter-store-provider.tsx
"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type BoardStore,
  createBoardStore,
} from "@/lib/zustand/features/boardStore";

export type BoardStoreApi = ReturnType<typeof createBoardStore>;

export const BoardStoreContext = createContext<BoardStoreApi | undefined>(
  undefined
);

export interface BoardStoreProviderProps {
  children: ReactNode;
}

export const BoardStoreProvider = ({ children }: BoardStoreProviderProps) => {
  const storeRef = useRef<BoardStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createBoardStore();
  }

  return (
    <BoardStoreContext.Provider value={storeRef.current}>
      {children}
    </BoardStoreContext.Provider>
  );
};

export const useBoardStore = <T,>(selector: (store: BoardStore) => T): T => {
  const boardStoreContext = useContext(BoardStoreContext);

  if (!boardStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(boardStoreContext, selector);
};
