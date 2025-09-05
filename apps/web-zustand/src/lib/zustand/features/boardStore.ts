import { createStore } from "zustand/vanilla";

export type BoardState = {
  filters: {
    search: string;
    priority: string | null;
  };
};

export type BoardActions = {
  actions: {
    setSearch: (search: string) => void;
    setPriority: (priority: string | null) => void;
    clearFilters: () => void;
  };
};

export type BoardStore = BoardState & BoardActions;

export const defaultInitState: BoardState = {
  filters: {
    search: "",
    priority: null,
  },
};

export const initBoardStore = (): BoardState => {
  return { filters: { search: "", priority: null } };
};

export const createBoardStore = (initState: BoardState = defaultInitState) => {
  return createStore<BoardStore>()((set) => ({
    ...initState,
    actions: {
      setSearch: (search: string) =>
        set((state) => ({ filters: { ...state.filters, search } })),
      setPriority: (priority: string | null) =>
        set((state) => ({ filters: { ...state.filters, priority } })),
      clearFilters: () =>
        set((state) => ({ filters: { search: "", priority: null } })),
    },
  }));
};
