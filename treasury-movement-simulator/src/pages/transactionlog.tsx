import React, { useState, useMemo } from "react";
import { STATIC_TRANSACTIONS } from "@/constants";
import Table from "@/components/common/Table";
import { TTableColumn } from "@/interfaces";

type TData = (typeof STATIC_TRANSACTIONS)[number];

const TransactionLogPage = () => {
  const [query, setQuery] = useState("");

  const filteredTransactions = useMemo(() => {
    return STATIC_TRANSACTIONS.filter(
      (tx) =>
        tx.id.toLowerCase().includes(query.toLowerCase()) ||
        tx.from.toLowerCase().includes(query.toLowerCase()) ||
        tx.to.toLowerCase().includes(query.toLowerCase()) ||
        tx.currencyFrom.toLowerCase().includes(query.toLowerCase()) ||
        tx.currencyTo.toLowerCase().includes(query.toLowerCase()) ||
        tx.status.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const totalIncome = filteredTransactions
    .filter((tx) => tx.status === "Completed")
    .reduce((sum, tx) => sum + tx.amountTo, 0);

  const totalExpense = filteredTransactions
    .filter((tx) => tx.status === "Completed")
    .reduce((sum, tx) => sum + tx.amountFrom, 0);

  const totalTransactions = filteredTransactions.length;

  const columns: TTableColumn<TData>[] = [
    {
      id: "id",
      label: "Transaction ID",
      setContent: (data) => <span>{data.id}</span>,
    },
    {
      id: "from",
      label: "From",
      setContent: (data) => <span>{data.from}</span>,
    },
    {
      id: "to",
      label: "To",
      setContent: (data) => <span>{data.to}</span>,
    },
    {
      id: "amountFrom",
      label: "Amount Sent",
      setContent: (data) => (
        <span>
          {data.amountFrom.toLocaleString()} {data.currencyFrom}
        </span>
      ),
    },
    {
      id: "amountTo",
      label: "Amount Received",
      setContent: (data) => (
        <span>
          {data.amountTo.toLocaleString()} {data.currencyTo}
        </span>
      ),
    },
    {
      id: "status",
      label: "Status",
      setContent: (data) => (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            data.status === "Completed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {data.status}
        </span>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Transaction logs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-sm text-gray-500">
            Total Transactions This Month
          </h3>
          <p className="text-2xl font-semibold text-gray-800">
            {totalTransactions}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-sm text-gray-500">Total Income</h3>
          <p className="text-2xl font-semibold text-green-600">
            ${totalIncome.toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-sm text-gray-500">Total Expenses</h3>
          <p className="text-2xl font-semibold text-red-500">
            ${totalExpense.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="flex justify-end mt-2">
        <input
          type="text"
          placeholder="Search transactions..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <Table data={filteredTransactions} columns={columns} isloading={false} />
    </div>
  )
}

export default TransactionLogPage;
