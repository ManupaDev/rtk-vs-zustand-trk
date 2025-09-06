"use client";

import Board from "@/components/Board/Board";
import { useGetBoardByIdQuery } from "@/lib/redux/api";
import { Loader2 } from "lucide-react";

export default function Workspace({ boardId }: { boardId: string }) {
  const { data: board, isLoading, isError } = useGetBoardByIdQuery(boardId);

  if (isError) {
    return (
      <div className="min-h-svh flex items-center justify-center">
        <p>Error loading board</p>
      </div>
    );
  }

  if (isLoading || !board) {
    return (
      <div className="min-h-svh flex items-center justify-center">
        <Loader2 className="w-4 h-4 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-svh">
      <Board columns={board.columns} title="Taxxa AI RTK" />
    </div>
  );
}
