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

export interface Account {
  id: string;
  name: string;
  currency: string;
  balance: number;
}
export interface Transaction {
  id: string;
  from: string;
  to: string;
  amountFrom: number;
  amountTo: number;
  currencyFrom: string;
  currencyTo: string;
  fxRate: number;
  note?: string; // optional if note isn't always present
  date: string;  // ISO timestamp format
  status: 'Completed' | 'Pending'; // restrict to known values
}
export interface TableProps<TData> {
  isloading: boolean;
  data: Array<TData>;
  columns: Array<TTableColumn<TData>>
}

export interface TTableColumn<TData = unknown> {
  id: string;
  label: string;
  align?: "left" | "center" | "right" | "justify"
  setContent: (data: TData, index?: number) => React.ReactNode;
}