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
  labels?: string[];
  assignees?: string[];
};

const DEFAULT_LABELS = ["setup", "types", "ui", "data", "qa"];
const DEFAULT_ASSIGNEES = ["Alice", "Bob", "Carol"];

export function FiltersToolbar({
  labels = DEFAULT_LABELS,
  assignees = DEFAULT_ASSIGNEES,
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
          <SelectTrigger aria-label="Filter by label" className="w-40">
            <SelectValue placeholder="Label" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Labels</SelectLabel>
              {labels.map((label) => (
                <SelectItem key={label} value={label}>
                  {label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select defaultValue="">
          <SelectTrigger aria-label="Filter by assignee" className="w-40">
            <SelectValue placeholder="Assignee" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Assignees</SelectLabel>
              {assignees.map((name) => (
                <SelectItem key={name.toLowerCase()} value={name.toLowerCase()}>
                  {name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="inline-flex items-center gap-2">
          <Checkbox id="show-archived" />
          <Label htmlFor="show-archived" className="text-muted-foreground">
            Show archived
          </Label>
        </div>

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
