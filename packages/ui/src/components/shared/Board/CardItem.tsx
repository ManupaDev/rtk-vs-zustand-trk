import { Badge } from "@workspace/ui/components/badge";
import { TCardItem } from "@workspace/types";

export const CardItem = ({ item }: { item: TCardItem }) => {
  return (
    <div className="bg-card text-card-foreground rounded-lg border p-3 shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
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
  );
};
