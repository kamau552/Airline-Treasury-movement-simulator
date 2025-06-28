import React, { useState, useMemo } from "react";
import { FX_RATES } from "@/constants";
import Table from "@/components/common/Table";
import { TTableColumn } from "@/interfaces";


const FXRatesPage = () => {
  const fxData = useMemo(
    () =>
      Object.entries(FX_RATES).map(([pair, rate]) => {
        const [from, to] = pair.split("_");
        return { pair, from, to, rate };
      }),
    []
  );

  const [query, setQuery] = useState("");
  const filteredData = fxData.filter(
    (item) =>
      item.from.toLowerCase().includes(query.toLowerCase()) ||
      item.to.toLowerCase().includes(query.toLowerCase())
  );

  type TData = (typeof fxData)[number];

  const columns: TTableColumn<TData>[] = [
    {
      id: "pair",
      label: "Currency Pair",
      setContent: (data) => (
        <span>
          {data.from} → {data.to}
        </span>
      ),
    },
    {
      id: "rate",
      label: "FX Rate",
      setContent: (data) => <span>{data.rate.toFixed(4)}</span>,
      align: "right",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">FxRatesView</h2>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="bg-white rounded-xl shadow p-4 w-full sm:w-50">
          <h3 className="text-sm text-gray-500">FX Pairs</h3>
          <p className="text-xl font-semibold text-blue-600">
            {filteredData.length}
          </p>
        </div>

        <input
          type="text"
          placeholder="Search currency..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:w-64 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <Table data={filteredData} columns={columns} isloading={false} />
    </div>
  )
}

export default FXRatesPage;
