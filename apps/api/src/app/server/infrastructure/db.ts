import { TBoard } from "@workspace/types";
import { boards } from "./data";

const db = {
  boards: {
    getAllBoards: async() => boards,
    getBoardById: async(id: string) => boards.find((board) => board.id === id),
    createBoard: async(board: TBoard) => {
      boards.push(board);
      return board;
    },
    updateBoard: async(id: string, board: TBoard) => {
      const index = boards.findIndex((board) => board.id === id);
      boards[index] = board;
      return board;
    },
    deleteBoard: async(id: string) => {
      boards.filter((board) => board.id !== id);
    },
  },
};

export default db;
