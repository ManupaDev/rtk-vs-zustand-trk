import { TBoard, TCardItem } from "@workspace/types";
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
    addCard: async (
      boardId: string,
      columnId: string,
      data: { title: string; priority?: string | null }
    ): Promise<TCardItem | null> => {
      const board = boards.find((b) => b.id === boardId);
      if (!board) return null;
      const column = board.columns.find((c) => c.id === columnId);
      if (!column) return null;
      const genId = () => "c" + Math.random().toString(36).slice(2, 8);
      const item: TCardItem = {
        id: genId(),
        title: data.title,
        priority: data.priority ?? undefined,
      };
      column.items.unshift(item);
      return item;
    },
  },
};

export default db;
