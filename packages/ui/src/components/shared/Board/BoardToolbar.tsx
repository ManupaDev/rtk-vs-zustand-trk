import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { useBoard } from "@workspace/ui/components/shared/Board/BoardContext";
import TaskCreateForm from "@workspace/ui/components/shared/Board/TaskCreateForm";

export function BoardToolbar() {
  const {
    filters,
    isNewCardDialogOpen,
    priorities,
    setSearch,
    setPriority,
    clearFilters,
    setIsNewCardDialogOpen,
  } = useBoard();

  return (
    <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-1 items-center gap-3">
        <div className="relative w-full max-w-sm">
          <Input
            type="search"
            placeholder="Search cards..."
            aria-label="Search cards"
            value={filters.search ?? ""}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Select
          value={filters.priority ?? ""}
          onValueChange={(v) => setPriority(v === "ALL" ? null : v)}
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

        <Button variant="secondary" size="sm" onClick={clearFilters}>
          Clear filters
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button size="sm" onClick={() => setIsNewCardDialogOpen(true)}>
          New card
        </Button>
      </div>

      <Dialog open={isNewCardDialogOpen} onOpenChange={setIsNewCardDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New card</DialogTitle>
            <DialogDescription>
              Create a new task in the selected column.
            </DialogDescription>
          </DialogHeader>
          <TaskCreateForm
            statuses={["TODO", "IN PROGRESS", "IN REVIEW", "COMPLETED"]}
            priorities={priorities}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
