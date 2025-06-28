import { LucideIcon } from 'lucide-react';

export interface ISubItem {
  name: string;
  path: string;
}

export interface ISidebarItem {
  name: string;
  icon: LucideIcon;
  path: string;
  items?: ISubItem[];
}

export interface TableProps<TData> {
  isloading: boolean;
  data: Array<TData>;
  columns: Array<TTableColumn<TData>>
}

// Define TData as a generic type parameter for TTableColumn
export interface TTableColumn<TData = unknown> {
  id: string;
  label: string;
  align?: "left" | "center" | "right" | "justify"
  setContent: (data: TData, index?: number) => React.ReactNode;
}