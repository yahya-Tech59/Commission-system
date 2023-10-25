import React from "react";
import { Footer } from "../components/Footer";
import { Chart } from "../components/Chart/Chart";

export const Dashboard = () => {
  return (
    <div className="bg-slate-100 flex">
      <div className="flex-col">
        <div className="ml-10 mt-[-40px]">
          <h2 className="mt-20 text-2xl font-medium mb-10">Dashboard</h2>

          <div className="h-36 w-[370px] bg-white shadow-md shadow-slate-300 rounded-lg">
            <h3 className="bg-slate-200 w-12 h-6 ml-[300px] text-blue-500 rounded-md relative top-3 ">
              Yearly
            </h3>
            <p className="text-3xl font-medium ml-5 mt-3">2,590</p>
            <h2 className="mt-5 ml-5 text-slate-400">Agency</h2>
          </div>

          <div className="h-36 w-[370px] bg-white shadow-md shadow-slate-300 rounded-lg ml-[395px] mt-[-145px]">
            <h3 className="bg-slate-200 w-12 h-6 ml-[300px] text-blue-500 rounded-md relative top-3 ">
              Yearly
            </h3>
            <p className="text-3xl font-medium ml-5 mt-3">10,000</p>
            <h2 className="mt-5 ml-5 text-slate-400">Customers</h2>
          </div>

          <div className="h-36 w-[370px] bg-white shadow-md shadow-slate-300 rounded-lg ml-[790px] mt-[-145px]">
            <h3 className="bg-slate-200 w-12 h-6 ml-[300px] text-blue-500 rounded-md relative top-3 ">
              Yearly
            </h3>
            <p className="text-3xl font-medium ml-5 mt-3">100</p>
            <h2 className="mt-5 ml-5 text-slate-400">Products</h2>
          </div>

          <div className="h-36 w-[370px] bg-white shadow-md shadow-slate-300 rounded-lg ml-[1185px] mt-[-145px]">
            <h3 className="bg-slate-200 w-12 h-6 ml-[300px] text-blue-500 rounded-md relative top-3 ">
              Yearly
            </h3>
            <p className="text-3xl font-medium ml-5 mt-3">150</p>
            <h2 className="mt-5 ml-5 text-slate-400">Orders</h2>
          </div>
        </div>

        <div className="flex flex-col">
          <Chart />
          <Footer className="" />
        </div>
      </div>
    </div>
  );
};
