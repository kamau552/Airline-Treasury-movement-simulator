import React, { useState, useMemo } from "react";
import { ACCOUNTS } from "@/constants";
import Table from "@/components/common/Table";
import { TTableColumn } from "@/interfaces";

const AccountsPage = () => {
  const [query, setQuery] = useState("");

  const filteredAccounts = useMemo(() => {
    return ACCOUNTS.filter(
      (account) =>
        account.name.toLowerCase().includes(query.toLowerCase()) ||
        account.currency.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const totalAccounts = filteredAccounts.length;
  const totalUSDBalance = filteredAccounts
    .filter((acc) => acc.currency === "USD")
    .reduce((sum, acc) => sum + acc.balance, 0);

  type TData = (typeof filteredAccounts)[number];

  const columns: TTableColumn<TData>[] = [
    {
      id: "id",
      label: "ID",
      setContent: (data) => <span>{data.id}</span>,
    },
    {
      id: "name",
      label: "Account Name",
      setContent: (data) => <span>{data.name}</span>,
    },
    {
      id: "currency",
      label: "Currency",
      setContent: (data) => <span>{data.currency}</span>,
    },
    {
      id: "balance",
      label: "Balance",
      setContent: (data) => <span>{data.balance.toLocaleString()}</span>,
      align: "right",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Client Accounts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-sm text-gray-500">Total Accounts</h3>
          <p className="text-2xl font-semibold text-blue-600">
            {totalAccounts}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-sm text-gray-500">USD Balance</h3>
          <p className="text-2xl font-semibold text-green-600">
            ${totalUSDBalance.toLocaleString()}
          </p>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search accounts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-56 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <Table data={filteredAccounts} columns={columns} isloading={false} />
    </div>
  )
}

export default AccountsPage;
