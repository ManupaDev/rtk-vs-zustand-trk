"use client";

import { boardsKeys, createCard, getBoardById } from "@/lib/api/boards";
import { useActions, useFilters, useUi } from "@/lib/zustand/StoreProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import Board from "@workspace/ui/components/shared/Board/Board";
import { Loader2 } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

export default function Workspace({ boardId }: { boardId: string }) {
  const filters = useFilters();
  const { setSearch, setPriority, clearFilters, setIsNewCardDialogOpen } =
    useActions();
  const { isNewCardDialogOpen } = useUi();

  const {
    data: board,
    isPending,
    isError,
  } = useQuery({
    queryKey: boardsKeys.board(boardId),
    queryFn: ({ queryKey }) => getBoardById(queryKey[1]),
  });

  const queryClient = useQueryClient();

  const { mutate: createCardMutate } = useMutation({
    mutationFn: (data: {
      title: string;
      priority?: string | null;
      columnId: string;
    }) => {
      return createCard({
        boardId,
        columnId: data.columnId,
        data: { title: data.title, priority: data.priority },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: boardsKeys.board(boardId) });
    },
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
      <Board
        columns={board.columns}
        title="Taxxa AI Zustand"
        filters={filters}
        priorities={["LOW", "MEDIUM", "HIGH", "HIGHEST"]}
        setSearch={(q) => setSearch(q)}
        setPriority={(p) => setPriority(p)}
        clearFilters={() => clearFilters()}
        onCreateCard={(data) => {
          createCardMutate(data);
        }}
        isNewCardDialogOpen={isNewCardDialogOpen}
        setIsNewCardDialogOpen={(open) => setIsNewCardDialogOpen(open)}
        onCardClick={() => {}}
      />
    </div>
  );
}
