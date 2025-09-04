export type TCardItem = {
  id: string
  title: string
  labels?: string[]
}

export type TColumn = {
  id: string
  name: string
  items: TCardItem[]
}

export type TBoard = {
  title: string
  columns: TColumn[]
}


