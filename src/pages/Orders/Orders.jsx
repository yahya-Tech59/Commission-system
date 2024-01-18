import React, { useState, useEffect, useContext } from "react";

import { columns } from "./OrderColumns";
import { Header } from "../../layouts/Header";
// import { Table } from "../../components/Table";
import { DataGrid } from "@mui/x-data-grid";
import { AddOrder } from "../../Models/OrderForms/AddOrder";
import { IoMdAdd } from "react-icons/io";
import { Context } from "../../Context/Context";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../../Services/OrderSlice";

export const Orders = () => {
  const [showAddOrder, setShowAddOrder] = useState(false);

  const { currentPage, handlePageChange } = useContext(Context);

  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);
  const loading = useSelector((state) => state.orders.loading);

  useEffect(() => {
    dispatch(fetchOrder(currentPage));
  }, [currentPage]);

  if (loading === true) {
    return <h1 className="text-3xl font-semibold ml-[53rem]">Loading...</h1>;
  }

  return (
    <div className="ml-10">
      <Header />
      <div className="bg-white w-[96rem] mt-3 mb-6 ml-2 shadow-lg shadow-slate-300 rounded-lg">
        <h2 className="text-3xl pt-6 ml-7">Orders</h2>

        <div className="ml-[85rem] mb-5 ">
          <button
            onClick={() => setShowAddOrder(true)}
            className=" flex gap-4 text-md p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer "
          >
            Add Order
            <IoMdAdd className=" text-2xl" />
          </button>
          {showAddOrder && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10">
              <AddOrder onClose={() => setShowAddOrder(false)} />
            </div>
          )}
        </div>

        <div style={{ height: 630, width: "95%" }} className="ml-10 mb-4  ">
          <DataGrid
            rows={orders}
            columns={columns}
            getRowId={(row) => row.id}
          />
        </div>

        <div className="ml-[76rem] pb-3">
          <button
            onClick={() => handlePageChange(currentPage === 20)}
            className="bg-slate-200 p-1 m-1 rounded-md pl-2 pr-2"
          >
            {"<<"}
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-slate-200 p-1 m-1 rounded-md pl-2 pr-2"
          >
            Previous Page
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === 20}
            className="bg-slate-200 p-1 m-1 rounded-md pl-2 pr-2"
          >
            Next Page
          </button>
          <button
            onClick={() => handlePageChange()}
            className="bg-slate-200 p-1 m-1 rounded-md pl-2 pr-2"
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};
