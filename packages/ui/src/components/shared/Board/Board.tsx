import { FiltersToolbar } from "@workspace/ui/components/shared/Board/FiltersToolbar";
import { TColumn } from "@workspace/types";
import { Separator } from "@workspace/ui/components/separator";
import { Column } from "@workspace/ui/components/shared/Board/Column";

const Board = ({ columns, title }: { columns: TColumn[], title: string }) => {
  return (
    <div className="px-6 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      </div>
      <Separator className="my-4" />

      <FiltersToolbar />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {columns.map((column) => (
          <Column key={column.id} column={column} />
        ))}
      </div>
    </div>
  );
};

export default Board;
