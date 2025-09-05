import { TBoard } from "@workspace/types";
import ky from "ky";

export async function getBoardById(id: string): Promise<TBoard> {
  return ky.get(`http://localhost:3002/api/boards/${id}`).json();
}
