import {
  UsersRound,
  Tickets,
  ArrowRightLeft,
} from 'lucide-react';
import { ISidebarItem } from '@/interfaces';
import { Account } from '@/interfaces';
import { Transaction } from '@/interfaces';


export const items: ISidebarItem[] = [

  {
    name: "Accounts",
    icon: UsersRound,
    path: "/accounts",
  },
  {
    name: "Transaction Logs",
    icon: Tickets,
    path: "/transactionlog",
  },
  {
    name: "Fx Rates",
    icon: ArrowRightLeft,
    path: "/fxrates",
  },
];

//10 Airline Treasury Accounts
export const ACCOUNTS: Account[] = [
  { id: "1", name: "Nairobi Ops", currency: "KES", balance: 500000 },
  { id: "2", name: "Lagos Ops", currency: "NGN", balance: 300000 },
  { id: "3", name: "New York Ops", currency: "USD", balance: 150000 },
  { id: "4", name: "London Ops", currency: "USD", balance: 120000 },
  { id: "5", name: "Johannesburg Ops", currency: "ZAR", balance: 200000 },
  { id: "6", name: "Dubai Ops", currency: "USD", balance: 250000 },
  { id: "7", name: "Accra Ops", currency: "GHS", balance: 180000 },
  { id: "8", name: "Cairo Ops", currency: "EGP", balance: 160000 },
  { id: "9", name: "Tokyo Ops", currency: "JPY", balance: 1000000 },
  { id: "10", name: "Paris Ops", currency: "EUR", balance: 220000 },
];

// 💱 Static FX Rates (base: from → to)
export const FX_RATES: Record<string, number> = {
  USD_KES: 142.5,
  KES_USD: 1 / 142.5,
  USD_NGN: 1300,
  NGN_USD: 1 / 1300,
  USD_ZAR: 18.2,
  ZAR_USD: 1 / 18.2,
  USD_EUR: 0.93,
  EUR_USD: 1.08,
  USD_JPY: 157.8,
  JPY_USD: 1 / 157.8,
  USD_EGP: 47.5,
  EGP_USD: 1 / 47.5,
  USD_GHS: 15.5,
  GHS_USD: 1 / 15.5,
};

// 🧾 Static transaction log
export const STATIC_TRANSACTIONS: Transaction[] = [
  {
    id: "tx-001",
    from: "Nairobi Ops",
    to: "New York Ops",
    amountFrom: 100000,
    amountTo: 702.5,
    currencyFrom: "KES",
    currencyTo: "USD",
    fxRate: 1 / 142.5,
    note: "Flight ticket settlement",
    date: "2025-06-20T09:00:00Z",
    status: "Completed",
  },
  {
    id: "tx-002",
    from: "Lagos Ops",
    to: "Accra Ops",
    amountFrom: 200000,
    amountTo: 12903.23,
    currencyFrom: "NGN",
    currencyTo: "GHS",
    fxRate: (1 / 1300) * 15.5,
    note: "Regional fund distribution",
    date: "2025-06-23T11:30:00Z",
    status: "Completed",
  },
  {
    id: "tx-003",
    from: "Paris Ops",
    to: "Tokyo Ops",
    amountFrom: 10000,
    amountTo: 1690320,
    currencyFrom: "EUR",
    currencyTo: "JPY",
    fxRate: (1.08) * 157.8,
    note: "Aircraft maintenance fund",
    date: "2025-06-28T14:00:00Z",
    status: "Pending",
  },
  {
    id: "tx-004",
    from: "Dubai Ops",
    to: "London Ops",
    amountFrom: 80000,
    amountTo: 80000,
    currencyFrom: "USD",
    currencyTo: "USD",
    fxRate: 1,
    note: "Operations support",
    date: "2025-06-29T08:00:00Z",
    status: "Completed",
  },
  {
    id: "tx-005",
    from: "Cairo Ops",
    to: "Johannesburg Ops",
    amountFrom: 150000,
    amountTo: 5747.37,
    currencyFrom: "EGP",
    currencyTo: "ZAR",
    fxRate: (1 / 47.5) * 18.2,
    note: "Fuel payment",
    date: "2025-06-29T10:30:00Z",
    status: "Completed",
  },
  {
    id: "tx-006",
    from: "Accra Ops",
    to: "Lagos Ops",
    amountFrom: 10000,
    amountTo: 838709.67,
    currencyFrom: "GHS",
    currencyTo: "NGN",
    fxRate: (1 / 15.5) * 1300,
    note: "Route revenue",
    date: "2025-06-29T15:00:00Z",
    status: "Pending",
  },
];
