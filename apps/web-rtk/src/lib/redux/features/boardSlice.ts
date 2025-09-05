import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/redux/store";

// Define a type for the slice state
export interface BoardState {
  filters: {
    search: string;
    priority: string | null;
  };
  priorities: string[];
}

// Define the initial state using that type
const initialState: BoardState = {
  filters: {
    search: "",
    priority: null,
  },
  priorities: [],
};

export const boardSlice = createSlice({
  name: "board",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
    },
    setPriority: (state, action: PayloadAction<string | null>) => {
      state.filters.priority = action.payload;
    },
  },
});

export const { setSearch, setPriority } = boardSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBoard = (state: RootState) => state.board;

export default boardSlice.reducer;
