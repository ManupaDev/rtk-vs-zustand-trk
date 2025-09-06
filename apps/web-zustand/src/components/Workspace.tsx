"use client";

import Board from "@/components/Board/Board";
import { boardsKeys, getBoardById } from "@/lib/api/boards";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

export default function Workspace({ boardId }: { boardId: string }) {
  const {
    data: board,
    isPending,
    isError,
  } = useQuery({
    queryKey: boardsKeys.board(boardId),
    queryFn: ({ queryKey }) => getBoardById(queryKey[1]),
  });

  if (isError) {
    return (
      <div className="min-h-svh flex items-center justify-center">
        <p>Error loading board</p>
      </div>
    );
  }

  if (isPending || !board) {
    return (
      <div className="min-h-svh flex items-center justify-center">
        <Loader2 className="w-4 h-4 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-svh">
      <Board columns={board.columns} title="Taxxa AI Zustand" />
    </div>
  );
}
