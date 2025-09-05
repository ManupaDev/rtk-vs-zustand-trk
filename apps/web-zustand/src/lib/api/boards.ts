import { TBoard, TCardItem } from "@workspace/types";
import ky from "ky";

const BASE_URL = "http://localhost:3002/api";

export const boardsKeys = {
  all: ["boards"] as const,
  board: (id: string) => [...boardsKeys.all, id] as const,
};

export async function getBoardById(id: string): Promise<TBoard> {
  return ky.get(`${BASE_URL}/boards/${id}`).json();
}

export async function createCard(data: {
  boardId: string;
  columnId: string;
  data: { title: string; priority?: string | null };
}): Promise<TCardItem> {
  return ky
    .post(`${BASE_URL}/boards/${data.boardId}/columns/${data.columnId}/cards`, {
      json: data.data,
    })
    .json();
}
