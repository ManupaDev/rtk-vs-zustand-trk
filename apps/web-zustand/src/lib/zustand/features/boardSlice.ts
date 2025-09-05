import { StateCreator } from "zustand";

export interface BoardSlice {
  filters: {
    search: string;
    priority: string | null;
  };
  setSearch: (search: string) => void;
  setPriority: (priority: string | null) => void;
  clearFilters: () => void;
}

const createBoardSlice: StateCreator<BoardSlice, [], [], BoardSlice> = (
  set
) => ({
  filters: {
    search: "",
    priority: null,
  },
  setSearch: (search: string) =>
    set((state) => ({ filters: { ...state.filters, search } })),
  setPriority: (priority: string | null) =>
    set((state) => ({ filters: { ...state.filters, priority } })),
  clearFilters: () => set({ filters: { search: "", priority: null } }),
});

export default createBoardSlice;