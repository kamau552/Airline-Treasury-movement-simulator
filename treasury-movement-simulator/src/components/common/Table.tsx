import React from "react";
import { TableProps } from "@/interfaces";

const Table = <TData,>({ isloading, data, columns }: TableProps<TData>) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-x-auto">
      <table className="min-w-full text-sm text-left text-gray-800">
        <thead className="text-xs uppercase text-gray-500 bg-gray-100">
          <tr>
            {columns.map((column) => {
              const { id, label, align = "left", ...props } = column;
              return (
                <th
                  key={id.toString()}
                  {...props}
                  className={`py-3 px-4 ${
                    align === "right"
                      ? "text-right"
                      : align === "center"
                      ? "text-center"
                      : "text-left"
                  }`}
                >
                  {label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {isloading ? (
            <tr>
              <td
                colSpan={columns.length}
                className="py-4 text-center text-gray-500"
              >
                Loading...
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100 transition-colors`}
              >
                {columns.map((column) => {
                  const { id, setContent, align = "left", ...props } = column;
                  return (
                    <td
                      key={id.toString()}
                      {...props}
                      className={`py-3 px-4 ${
                        align === "right"
                          ? "text-right"
                          : align === "center"
                          ? "text-center"
                          : "text-left"
                      }`}
                    >
                      {setContent(row, index)}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
