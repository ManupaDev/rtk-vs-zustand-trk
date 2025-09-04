export type TCardItem = {
  id: string;
  title: string;
  labels?: string[];
};

export type TColumn = {
  id: string;
  name: string;
  items: TCardItem[];
};
