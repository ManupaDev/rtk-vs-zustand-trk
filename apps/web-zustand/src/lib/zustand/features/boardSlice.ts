import { StateCreator } from "zustand";

export interface BoardState {
  filters: {
    search: string;
    priority: string | null;
  };
}

export interface BoardSlice {
  board: BoardState;
  setSearch: (search: string) => void;
  setPriority: (priority: string | null) => void;
  clearFilters: () => void;
}

export const initBoardSlice = () => {
  return {
    board: { filters: { search: "", priority: null } },
  } as BoardSlice;
};

const createBoardSlice: StateCreator<BoardSlice, [], [], BoardSlice> = (
  set
) => ({
  board: initBoardSlice().board,
  setSearch: (search: string) =>
    set((state) => ({
      board: { ...state.board, filters: { ...state.board.filters, search } },
    })),
  setPriority: (priority: string | null) =>
    set((state) => ({
      board: { ...state.board, filters: { ...state.board.filters, priority } },
    })),
  clearFilters: () =>
    set((state) => ({
      board: { ...state.board, filters: { search: "", priority: null } },
    })),
});

export default createBoardSlice;
