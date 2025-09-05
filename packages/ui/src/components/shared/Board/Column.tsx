import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from "@workspace/ui/components/card";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import type { TColumn } from "@workspace/types";
import { CardItem } from "@workspace/ui/components/shared/Board/CardItem";
import { useBoard } from "@workspace/ui/components/shared/Board/BoardContext";

export const Column = ({ column }: { column: TColumn }) => {
  const { filters } = useBoard();

  const filteredItems = column.items.filter((item) => {
    return (
      item.title.toLowerCase().includes(filters.search?.toLowerCase() ?? "") &&
      (filters.priority === null || item.priority === filters.priority)
    );
  });

  return (
    <Card className="h-[70vh]">
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
            {filteredItems.map((item) => (
              <CardItem key={item.id} item={item} />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
