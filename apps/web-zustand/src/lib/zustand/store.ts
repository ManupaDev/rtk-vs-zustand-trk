import { createStore } from "zustand/vanilla";
import { BoardSlice } from "./features/boardSlice";
import createBoardSlice from "./features/boardSlice";

export const createAppStore = () =>
  createStore<BoardSlice>((...a) => ({
    ...createBoardSlice(...a),
  }));
