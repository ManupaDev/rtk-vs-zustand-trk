"use client";

import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import { Separator } from "@workspace/ui/components/separator";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Checkbox } from "@workspace/ui/components/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";

type CardItem = {
  id: string;
  title: string;
  labels?: string[];
};

type Column = {
  id: string;
  name: string;
  items: CardItem[];
};

const columns: Column[] = [
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
      <div className="px-6 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Demo Board</h1>
        </div>
        <Separator className="my-4" />

        {/* Toolbar: placeholders for future global state triggers */}
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 items-center gap-3">
            <div className="relative w-full max-w-sm">
              <Input
                type="search"
                placeholder="Search cards..."
                aria-label="Search cards"
                // onChange={(e) => dispatch(setSearch(e.target.value))}
              />
            </div>

            <Select
              defaultValue="" /* onValueChange={(v) => dispatch(setLabel(v))} */
            >
              <SelectTrigger aria-label="Filter by label" className="w-40">
                <SelectValue placeholder="Label" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Labels</SelectLabel>
                  <SelectItem value="setup">setup</SelectItem>
                  <SelectItem value="types">types</SelectItem>
                  <SelectItem value="ui">ui</SelectItem>
                  <SelectItem value="data">data</SelectItem>
                  <SelectItem value="qa">qa</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select
              defaultValue="" /* onValueChange={(v) => dispatch(setAssignee(v))} */
            >
              <SelectTrigger aria-label="Filter by assignee" className="w-40">
                <SelectValue placeholder="Assignee" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Assignees</SelectLabel>
                  <SelectItem value="alice">Alice</SelectItem>
                  <SelectItem value="bob">Bob</SelectItem>
                  <SelectItem value="carol">Carol</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <div className="inline-flex items-center gap-2">
              <Checkbox
                id="show-archived" /* onCheckedChange={(v) => dispatch(setShowArchived(!!v))} */
              />
              <Label htmlFor="show-archived" className="text-muted-foreground">
                Show archived
              </Label>
            </div>

            <Button
              variant="secondary"
              size="sm"
              // onClick={() => dispatch(clearFilters())}
            >
              Clear filters
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              // onClick={() => dispatch(openNewCardModal())}
            >
              New card
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <Card key={column.id} className="h-[70vh]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium tracking-wide">
                    {column.name}
                  </CardTitle>
                  <Badge variant="secondary">{column.items.length}</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[calc(70vh-5rem)]">
                  <div className="flex flex-col gap-3 p-4">
                    {column.items.map((item) => (
                      <div
                        key={item.id}
                        className="bg-card text-card-foreground rounded-lg border p-3 shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <div className="text-sm font-medium">{item.title}</div>
                        {item.labels && item.labels.length > 0 ? (
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {item.labels.map((label) => (
                              <Badge key={label} variant="outline">
                                {label}
                              </Badge>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
