"use client";

import { setSearch, setPriority, clearFilters } from "@/lib/redux/features/boardSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { TColumn } from "@workspace/types";
import Board from "@workspace/ui/components/shared/Board/Board";

const columns: TColumn[] = [
  {
    id: "todo",
    name: "TODO",
    items: [
      { id: "c1", title: "Set up project repo", priority: "HIGH" },
      { id: "c2", title: "Design Kanban types", priority: "MEDIUM" },
    ],
  },
  {
    id: "in-progress",
    name: "IN PROGRESS",
    items: [
      { id: "c3", title: "Build board page", priority: "HIGH" },
      { id: "c4", title: "Wire RTK Query", priority: "MEDIUM" },
    ],
  },
  {
    id: "in-review",
    name: "IN REVIEW",
    items: [{ id: "c5", title: "Add tests", priority: "LOW" }],
  },
  {
    id: "done",
    name: "COMPLETED",
    items: [{ id: "c6", title: "Initialize monorepo", priority: "HIGHEST" }],
  },
];

export default function Page() {
  const { filters } = useAppSelector((state) => state.board);
  const dispatch = useAppDispatch();

  return (
    <div className="min-h-svh">
      <Board
        columns={columns}
        title="Taxxa AI RTK"
        filters={filters}
        priorities={["LOW", "MEDIUM", "HIGH", "HIGHEST"]}
        setSearch={(q) => dispatch(setSearch(q))}
        setPriority={(p) => dispatch(setPriority(p))}
        clearFilters={() => dispatch(clearFilters())}
        newCard={() => {}}
        onCardClick={() => {}}
      />
    </div>
  );
}
