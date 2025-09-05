import { TBoard } from "@workspace/types";
import ky from "ky";

const BASE_URL = "http://localhost:3002/api";

export const boardsKeys = {
  all: ["boards"] as const,
  board: (id: string) => [...boardsKeys.all, id] as const,
};

export async function getBoardById(id: string): Promise<TBoard> {
  return ky.get(`${BASE_URL}/boards/${id}`).json();
}
