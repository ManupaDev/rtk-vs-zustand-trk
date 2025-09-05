import { create } from "zustand";

type Store = {
  filters: {
    search: string;
    priority: string | null;
  };
  priorities: string[];
  setSearch: (search: string) => void;
  setPriority: (priority: string | null) => void;
  clearFilters: () => void;
};

const useStore = create<Store>()((set) => ({
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

export default useStore;
