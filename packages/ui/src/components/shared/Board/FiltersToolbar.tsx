"use client";

import { Button } from "@workspace/ui/components/button";
import { Checkbox } from "@workspace/ui/components/checkbox";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";

type FiltersToolbarProps = {
  priorities?: string[];
};

const DEFAULT_PRIORITIES = ["LOW", "MEDIUM", "HIGH", "HIGHEST"]

export function FiltersToolbar({
  priorities = DEFAULT_PRIORITIES,
}: FiltersToolbarProps) {
  return (
    <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-1 items-center gap-3">
        <div className="relative w-full max-w-sm">
          <Input
            type="search"
            placeholder="Search cards..."
            aria-label="Search cards"
          />
        </div>

        <Select defaultValue="">
          <SelectTrigger aria-label="Filter by priority" className="w-40">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Priorities</SelectLabel>
              {priorities.map((priority) => (
                <SelectItem key={priority} value={priority}>
                  {priority}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button variant="secondary" size="sm">
          Clear filters
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button size="sm">New card</Button>
      </div>
    </div>
  );
}
