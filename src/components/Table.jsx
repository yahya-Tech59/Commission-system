import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

export const Table = ({ data, columns }) => {
  const [sorting, setsorting] = useState([]);
  const [filter, setfilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilterdRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filter,
    },
    onSortingChange: setsorting,
    onGlobalFilterChange: setfilter,
  });
  return (
    <div className="">
      <div className="mt-3 mb-6 rounded-lg ">
        <div className="mt-[-4rem]">
          <CiSearch className="ml-[91rem] relative top-6 text-2xl" />
          <input
            type="text"
            value={filter}
            onChange={(e) => setfilter(e.target.value)}
            placeholder="Search"
            className="w-44 h-8 ml-[82rem] mt-[-20rem] shadow-sm shadow-slate-400 p-1 rounded-md bg-zinc-100"
          />
        </div>

        <table className="w-[92rem] ml-8 mt-10 mb-2">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="border border-zinc-200 p-3 text-slate-400"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}

                    {
                      { asc: "🔼", desc: "🔽" }[
                        header.column.getIsSorted() ?? null
                      ]
                    }
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className=" border border-zinc-200 p-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
