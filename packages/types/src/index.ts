export type TCardItem = {
  id: string;
  title: string;
  priority?: string;
};

export type TColumn = {
  id: string;
  name: string;
  items: TCardItem[];
};

export type TBoard = {
  id: string;
  title: string;
  columns: TColumn[];
};
