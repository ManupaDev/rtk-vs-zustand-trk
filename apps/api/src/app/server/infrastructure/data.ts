import { TBoard } from "@workspace/types";

export const boards: TBoard[] = [
  {
    id: "1",
    title: "Board 1",
    columns: [
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
        items: [
          { id: "c6", title: "Initialize monorepo", priority: "HIGHEST" },
        ],
      },
    ],
  },
];
