import { createStore } from "zustand/vanilla";
import { BoardSlice } from "./features/boardSlice";
import createBoardSlice from "./features/boardSlice";

export const createAppStore = (initState: BoardSlice) =>
  createStore<BoardSlice>((...a) => ({
    ...createBoardSlice(...a),
  }));
