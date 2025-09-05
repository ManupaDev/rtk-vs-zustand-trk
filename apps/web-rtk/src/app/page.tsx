"use client";

import { useCreateCardMutation, useGetBoardByIdQuery } from "@/lib/redux/api";
import {
  clearFilters,
  setPriority,
  setSearch,
  setIsNewCardDialogOpen,
} from "@/lib/redux/features/boardSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import Board from "@workspace/ui/components/shared/Board/Board";
import { Loader2 } from "lucide-react";

export default function Page() {
  const { filters, isNewCardDialogOpen } = useAppSelector(
    (state) => state.board
  );
  const dispatch = useAppDispatch();
  const { data: board, isLoading, isError } = useGetBoardByIdQuery("1");
  const [createCard, { isLoading: isCreating }] = useCreateCardMutation();

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
      <Board
        columns={board.columns}
        title="Taxxa AI RTK"
        filters={filters}
        priorities={["LOW", "MEDIUM", "HIGH", "HIGHEST"]}
        setSearch={(q) => dispatch(setSearch(q))}
        setPriority={(p) => dispatch(setPriority(p))}
        clearFilters={() => dispatch(clearFilters())}
        isNewCardDialogOpen={isNewCardDialogOpen}
        setIsNewCardDialogOpen={(open) =>
          dispatch(setIsNewCardDialogOpen(open))
        }
        onCreateCard={(data) =>
          createCard({
            boardId: board.id,
            columnId: data.columnId,
            data: { title: data.title, priority: data.priority },
          })
        }
        onCardClick={() => {}}
      />
    </div>
  );
}
