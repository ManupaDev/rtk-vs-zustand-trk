"use client";

import { BoardToolbar } from "@workspace/ui/components/shared/Board/BoardToolbar";
import { TColumn } from "@workspace/types";
import { Separator } from "@workspace/ui/components/separator";
import { Column } from "@workspace/ui/components/shared/Board/BoardColumn";
import {
  BoardProvider,
  type BoardFilters,
} from "@workspace/ui/components/shared/Board/BoardContext";

type BoardProps = {
  title: string;
  columns: TColumn[];
  filters: BoardFilters;
  priorities: string[];
  isNewCardDialogOpen: boolean;
  setIsNewCardDialogOpen: (open: boolean) => void;
  setSearch: (q: string) => void;
  setPriority: (p: string | null) => void;
  clearFilters: () => void;
  onCardClick?: (cardId: string) => void;
};

const Board = ({
  columns,
  title,
  filters,
  priorities,
  isNewCardDialogOpen,
  setIsNewCardDialogOpen,
  setSearch,
  setPriority,
  clearFilters,
  onCardClick,
}: BoardProps) => {
  return (
    <BoardProvider
      value={{
        filters,
        priorities,
        isNewCardDialogOpen,
        setIsNewCardDialogOpen,
        setSearch,
        setPriority,
        clearFilters,
        onCardClick,
      }}
    >
      <div className="px-6 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        </div>
        <Separator className="my-4" />

        <BoardToolbar />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <Column key={column.id} column={column} />
          ))}
        </div>
      </div>
    </BoardProvider>
  );
};

export default Board;
