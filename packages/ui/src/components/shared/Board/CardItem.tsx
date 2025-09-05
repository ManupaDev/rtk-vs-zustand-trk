import { Badge } from "@workspace/ui/components/badge";
import { TCardItem } from "@workspace/types";

export const CardItem = ({ item }: { item: TCardItem }) => {
  return (
    <div className="flex flex-col justify-between h-24 bg-card text-card-foreground rounded-lg border p-3 shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
      <div className="text-sm font-medium">{item.title}</div>
      {item.priority && (
        <span className="text-xs text-muted-foreground font-bold block">{item.priority}</span>
      )}
    </div>
  );
};
