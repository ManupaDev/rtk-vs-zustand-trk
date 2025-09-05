"use client";

import { Button } from "@workspace/ui/components/button";
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
import { useBoard } from "@workspace/ui/components/shared/Board/BoardContext";

export function FiltersToolbar() {
  const { filters, priorities, setSearch, setPriority, clearFilters, newCard } = useBoard();
  
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
        <Button size="sm" onClick={newCard}>
          New card
        </Button>
      </div>
    </div>
  );
}
