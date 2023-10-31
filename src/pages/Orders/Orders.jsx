import React, { useMemo } from "react";

import order from "./Orders.json";
import { columns } from "./OrderColumns";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";

export const Orders = () => {
  const data = useMemo(() => order, []);

  return (
    <div className="ml-10">
      <Header />
      <div className="bg-white w-[96rem] mt-3 mb-6 ml-2 shadow-lg shadow-slate-300 rounded-lg">
        <h2 className="text-3xl pt-6 ml-7">Orders</h2>
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
          />  */}
        </div>

        <Table data={data} columns={columns} />
      </div>
    </div>
  );
};
