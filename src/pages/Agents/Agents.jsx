import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import Agent from "./Agent.json";
import { columns } from "./AgentColumns";
import { Header } from "../../components/Header";
import { CiSearch } from "react-icons/ci";

export const Agents = () => {
  const data = useMemo(() => Agent, []);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="ml-10">
      <Header />
      <div className="bg-white pl-2 pr-5 pt-1 pb-1 mt-5 mb-6 shadow-lg shadow-slate-300 rounded-lg">
        <h2 className="text-3xl m-5">Agents</h2>
        <div className="text-xl mt-16 ml-10">
          Showing :{" "}
          <select className="p-1 rounded-md text-xm">
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

        <div className="mt-[-40px]">
          <CiSearch className="ml-[840px] relative top-6 text-2xl" />
          <input
            type="text"
            placeholder="Search"
            className="w-44 h-8 ml-[700px] mt-[-120px] shadow-sm shadow-slate-400 p-1 rounded-md bg-zinc-100"
          />
        </div>

        <table className="w-[840px] ml-10 mt-10 mb-2">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
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
