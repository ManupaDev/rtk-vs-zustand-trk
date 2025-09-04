import { Badge } from "@workspace/ui/components/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { Separator } from "@workspace/ui/components/separator"

type CardItem = {
  id: string
  title: string
  labels?: string[]
}

type Column = {
  id: string
  name: string
  items: CardItem[]
}

const columns: Column[] = [
  {
    id: "todo",
    name: "TODO",
    items: [
      { id: "c1", title: "Set up project repo", labels: ["setup"] },
      { id: "c2", title: "Design Kanban types", labels: ["types"] },
    ],
  },
  {
    id: "in-progress",
    name: "IN PROGRESS",
    items: [
      { id: "c3", title: "Build board page", labels: ["ui"] },
      { id: "c4", title: "Wire RTK Query", labels: ["data"] },
    ],
  },
  {
    id: "in-review",
    name: "IN REVIEW",
    items: [
      { id: "c5", title: "Add tests", labels: ["qa"] },
    ],
  },
  {
    id: "done",
    name: "COMPLETED",
    items: [
      { id: "c6", title: "Initialize monorepo", labels: ["setup"] },
    ],
  },
]

export default function Page() {
  return (
    <div className="min-h-svh">
      <div className="px-6 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Demo Board</h1>
        </div>
        <Separator className="my-4" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <Card key={column.id} className="h-[70vh]">
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
                    {column.items.map((item) => (
                      <div
                        key={item.id}
                        className="bg-card text-card-foreground rounded-lg border p-3 shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
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
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
