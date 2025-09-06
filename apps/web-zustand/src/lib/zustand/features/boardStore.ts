import { createStore } from "zustand/vanilla";
import { devtools } from "zustand/middleware";

export type BoardState = {
  filters: {
    search: string;
    priority: string | null;
  };
  ui: {
    isNewCardDialogOpen: boolean;
  };
};

export type BoardActions = {
  actions: {
    setSearch: (search: string) => void;
    setPriority: (priority: string | null) => void;
    clearFilters: () => void;
    setIsNewCardDialogOpen: (open: boolean) => void;
  };
};

export type BoardStore = BoardState & BoardActions;

export const defaultInitState: BoardState = {
  filters: {
    search: "",
    priority: null,
  },
  ui: {
    isNewCardDialogOpen: false,
  },
};

export const initBoardStore = (state: BoardState): BoardState => {
  return state;
};

export const createBoardStore = (initState: BoardState = defaultInitState) => {
  return createStore<BoardStore>()(
    devtools(
      (set, get) => ({
        ...initState,
        actions: {
          setSearch: (search: string) =>
            set(
              (state) => ({ filters: { ...state.filters, search } }),
              false,
              "board/setSearch"
            ),
          setPriority: (priority: string | null) =>
            set(
              (state) => ({ filters: { ...state.filters, priority } }),
              false,
              "board/setPriority"
            ),
          clearFilters: () =>
            set(
              () => ({ filters: { search: "", priority: null } }),
              false,
              "board/clearFilters"
            ),
          setIsNewCardDialogOpen: (open: boolean) =>
            set(
              (state) => ({ ui: { ...state.ui, isNewCardDialogOpen: open } }),
              false,
              open ? "board/openNewCardDialog" : "board/closeNewCardDialog"
            ),
        },
      }),
      { name: "boardStore" }
    )
  );
};
