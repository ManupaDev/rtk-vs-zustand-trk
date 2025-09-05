import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/redux/store";

// Define a type for the slice state
export interface BoardState {
  filters: {
    search: string;
    priority: string | null;
  };
  ui: {
    isNewCardDialogOpen: boolean;
  };
}

// Define the initial state using that type
const defaultInitState: BoardState = {
  filters: {
    search: "",
    priority: null,
  },
  ui: {
    isNewCardDialogOpen: false,
  },
};

export const boardSlice = createSlice({
  name: "board",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: defaultInitState,
  reducers: {
    initilizeBoardState: (state, action: PayloadAction<BoardState>) => {
      state.filters = {
        search: action.payload.filters.search,
        priority: action.payload.filters.priority,
      };
      state.ui.isNewCardDialogOpen = action.payload.ui.isNewCardDialogOpen;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
    },
    setPriority: (state, action: PayloadAction<string | null>) => {
      state.filters.priority = action.payload;
    },
    clearFilters: (state) => {
      state.filters.search = "";
      state.filters.priority = null;
    },
    setIsNewCardDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.ui.isNewCardDialogOpen = action.payload;
    },
  },
});

export const {
  setSearch,
  setPriority,
  clearFilters,
  setIsNewCardDialogOpen,
  initilizeBoardState,
} = boardSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBoard = (state: RootState) => state.board;
export const selectUi = (state: RootState) => state.board.ui;

export default boardSlice.reducer;
