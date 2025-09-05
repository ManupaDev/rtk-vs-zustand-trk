import * as React from "react";

type BoardFilters = {
  search: string | null;
  priority: string | null;
};

type BoardContextValue = {
  filters: BoardFilters;
  priorities: string[];
  isNewCardDialogOpen: boolean;
  setIsNewCardDialogOpen: (open: boolean) => void;
  setSearch: (query: string) => void;
  setPriority: (priority: string | null) => void;
  clearFilters: () => void;
  onCardClick?: (cardId: string) => void;
};

const noop = () => {};

const defaultValue: BoardContextValue = {
  filters: { search: null, priority: null },
  isNewCardDialogOpen: false,
  priorities: [],
  setIsNewCardDialogOpen: noop,
  setSearch: noop,
  setPriority: noop,
  clearFilters: noop,
  onCardClick: undefined,
};

const BoardContext = React.createContext<BoardContextValue>(defaultValue);

function useBoard() {
  return React.useContext(BoardContext);
}

function BoardProvider({
  value,
  children,
}: {
  value: Partial<BoardContextValue>;
  children: React.ReactNode;
}) {
  const merged = React.useMemo<BoardContextValue>(() => {
    return {
      filters: value.filters ?? defaultValue.filters,
      priorities: value.priorities ?? defaultValue.priorities,
      isNewCardDialogOpen:
        value.isNewCardDialogOpen ?? defaultValue.isNewCardDialogOpen,
      setSearch: value.setSearch ?? defaultValue.setSearch,
      setPriority: value.setPriority ?? defaultValue.setPriority,
      clearFilters: value.clearFilters ?? defaultValue.clearFilters,
      setIsNewCardDialogOpen:
        value.setIsNewCardDialogOpen ?? defaultValue.setIsNewCardDialogOpen,
      onCardClick: value.onCardClick ?? defaultValue.onCardClick,
    };
  }, [value]);

  return (
    <BoardContext.Provider value={merged}>{children}</BoardContext.Provider>
  );
}

export type { BoardFilters, BoardContextValue };
export { BoardProvider, useBoard };
