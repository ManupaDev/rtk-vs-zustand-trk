// src/stores/counter-store.ts
import { create } from "zustand";
import { createStore } from "zustand/vanilla";

export type BoardState = {
  filters: {
    search: string;
    priority: string | null;
  };
  priorities: string[];
};

export type BoardActions = {
  setSearch: (search: string) => void;
  setPriority: (priority: string | null) => void;
  clearFilters: () => void;
};

export type BoardStore = BoardState & BoardActions;

export const defaultInitState: BoardState = {
  filters: {
    search: "",
    priority: null,
  },
  priorities: [],
};

export const createBoardStore = (initState: BoardState = defaultInitState) => {
  return createStore<BoardStore>()((set) => ({
    ...initState,
    setSearch: (search: string) =>
      set((state) => ({ filters: { ...state.filters, search } })),
    setPriority: (priority: string | null) =>
      set((state) => ({ filters: { ...state.filters, priority } })),
    clearFilters: () => set({ filters: { search: "", priority: null } }),
  }));
};

const useStore = create<BoardStore>()((set) => ({
  filters: {
    search: "",
    priority: null,
  },
  priorities: [],
  setSearch: (search: string) =>
    set((state) => ({ filters: { ...state.filters, search } })),
  setPriority: (priority: string | null) =>
    set((state) => ({ filters: { ...state.filters, priority } })),
  clearFilters: () => set({ filters: { search: "", priority: null } }),
}));