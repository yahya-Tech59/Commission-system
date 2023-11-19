import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { CiSearch } from "react-icons/ci";

export const Table = ({ data, columns }) => {
  const [sorting, setsorting] = useState([]);
  const [filter, setfilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
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
        {/* <div className="text-xl mt-10 ml-10">
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                show {pageSize}
              </option>
            ))}
          </select>
        </div> */}

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
              <tr
                key={headerGroup.id}
                className="hover:bg-zinc-700 hover:text-white"
              >
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
              <tr key={row.id} className="hover:bg-zinc-700 hover:text-white">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className=" border border-zinc-200 p-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* <span>
          Page{" "}
          <strong>
            {table.pageIndex + 1} of {table.pageOptions.length}
          </strong>{" "}
        </span> */}

        {/* <div className="ml-[76rem] pb-3">
          <button
            onClick={() => table.setPageIndex(0)}
            className="bg-slate-200 p-1 m-1 rounded-md pl-2 pr-2"
          >
            {"<<"}
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="bg-slate-200 p-1 m-1 rounded-md pl-2 pr-2"
          >
            Previous Page
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="bg-slate-200 p-1 m-1 rounded-md pl-2 pr-2"
          >
            Next Page
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            className="bg-slate-200 p-1 m-1 rounded-md pl-2 pr-2"
          >
            {">>"}
          </button>
        </div> */}
      </div>
    </div>
  );
};
