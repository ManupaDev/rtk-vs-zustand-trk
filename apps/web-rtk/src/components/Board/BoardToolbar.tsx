import TaskCreateForm from "@/components/Board/TaskCreateForm";
import {
  clearFilters,
  selectBoard,
  selectUi,
  setIsNewCardDialogOpen,
  setPriority,
  setSearch,
} from "@/lib/redux/features/boardSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { Button } from "@workspace/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import { Input } from "@workspace/ui/components/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";

export function BoardToolbar() {
  const { filters } = useAppSelector(selectBoard);
  const { isNewCardDialogOpen } = useAppSelector(selectUi);
  const dispatch = useAppDispatch();

  const priorities = ["LOW", "MEDIUM", "HIGH", "HIGHEST"];

  return (
    <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-1 items-center gap-3">
        <div className="relative w-full max-w-sm">
          <Input
            type="search"
            placeholder="Search cards..."
            aria-label="Search cards"
            value={filters.search ?? ""}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </div>

        <Select
          value={filters.priority ?? ""}
          onValueChange={(v) => dispatch(setPriority(v === "ALL" ? null : v))}
        >
          <SelectTrigger aria-label="Filter by priority" className="w-40">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Priorities</SelectLabel>
              {["ALL", ...priorities].map((priority) => (
                <SelectItem key={priority} value={priority}>
                  {priority}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button
          variant="secondary"
          size="sm"
          onClick={() => dispatch(clearFilters())}
        >
          Clear filters
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button
          size="sm"
          onClick={() => dispatch(setIsNewCardDialogOpen(true))}
        >
          New card
        </Button>
      </div>

      <Dialog
        open={isNewCardDialogOpen}
        onOpenChange={(open) => dispatch(setIsNewCardDialogOpen(open))}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New card</DialogTitle>
            <DialogDescription>
              Create a new task in the selected column.
            </DialogDescription>
          </DialogHeader>
          <TaskCreateForm
            statuses={[
              {
                label: "TODO",
                value: "todo",
              },
              {
                label: "IN PROGRESS",
                value: "in-progress",
              },
              {
                label: "IN REVIEW",
                value: "in-review",
              },
              {
                label: "COMPLETED",
                value: "completed",
              },
            ]}
            priorities={priorities}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
