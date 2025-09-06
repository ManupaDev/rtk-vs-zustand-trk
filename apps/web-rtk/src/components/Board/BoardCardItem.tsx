import { TCardItem } from "@workspace/types";
import { Badge } from "@workspace/ui/components/badge";
import { useBoard } from "@workspace/ui/components/shared/Board/BoardContext";

export const CardItem = ({ item }: { item: TCardItem }) => {
  return (
    <button
      type="button"
      className="flex flex-col justify-between h-24 bg-card text-card-foreground rounded-lg border p-3 shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors text-left"
    >
      <div className="text-sm font-medium">{item.title}</div>
      {item.priority && (
        <Badge className="text-xs text-destructive bg-background font-bold block">
          {item.priority}
        </Badge>
      )}
    </button>
  );
};
