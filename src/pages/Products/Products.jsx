import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import product from "./Product.json";
import { columns } from "./ProductColumn";
import { Header } from "../../components/Header";
import { CiSearch } from "react-icons/ci";

export const Products = () => {
  const [sorting, setsorting] = useState([]);
  const [filter, setfilter] = useState("");

  let i;

  const data = useMemo(() => product, []);

  const table = useReactTable({
    columns,
    data,
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
    <div className="ml-10">
      <Header />
      <div className="bg-white w-[96rem] mt-3 mb-6 ml-2 shadow-lg shadow-slate-300 rounded-lg">
        <h2 className="text-3xl pt-6 ml-7">Products</h2>
        <div className="text-xl mt-10 ml-10">
          Showing :{" "}
          <select className="p-1 rounded-md text-xl">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
          </select>
          {/* <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            className="w-24 h-8 ml-2 shadow-md shadow-slate-400 p-1 rounded-md"
          /> */}
        </div>

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

        <table className="w-[92rem] ml-10 mt-10 mb-2">
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
                    className="border border-zinc-200 p-5 text-slate-400"
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

        <div className="ml-[78rem] pb-3">
          <button
            onClick={() => table.setPageIndex(0)}
            className="bg-slate-200 p-1 m-1 rounded-md"
          >
            {"<<"}
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="bg-slate-200 p-1 m-1 rounded-md"
          >
            Previous Page
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="bg-slate-200 p-1 m-1 rounded-md"
          >
            Next Page
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            className="bg-slate-200 p-1 m-1 rounded-md"
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};
