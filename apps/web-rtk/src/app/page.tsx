"use client";

import { TColumn } from "@workspace/types";
import Board from "@workspace/ui/components/shared/Board/Board";

const columns: TColumn[] = [
  {
    id: "todo",
    name: "TODO",
    items: [
      { id: "c1", title: "Set up project repo", labels: ["setup"] },
      { id: "c2", title: "Design Kanban types", labels: ["types"] },
    ],
  },
  {
    id: "in-progress",
    name: "IN PROGRESS",
    items: [
      { id: "c3", title: "Build board page", labels: ["ui"] },
      { id: "c4", title: "Wire RTK Query", labels: ["data"] },
    ],
  },
  {
    id: "in-review",
    name: "IN REVIEW",
    items: [{ id: "c5", title: "Add tests", labels: ["qa"] }],
  },
  {
    id: "done",
    name: "COMPLETED",
    items: [{ id: "c6", title: "Initialize monorepo", labels: ["setup"] }],
  },
];

export default function Page() {
  return (
    <div className="min-h-svh">
      <Board columns={columns} title="Demo Board" />
    </div>
  );
}
