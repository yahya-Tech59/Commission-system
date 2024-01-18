import React from "react";
import { Footer } from "../layouts/Footer";
import { Chart } from "../components/Chart/Chart";
import { Header } from "../layouts/Header";

export const Dashboard = () => {
  return (
    <div className="bg-slate-100 pr-10 flex">
      <div className="flex-col">
        <div className="ml-11 ">
          <Header className="ml-20" />
          <div className="mt-[-4rem] ml-2">
            <div className="flex justify-between">
              <h2 className="mt-20 text-2xl font-medium mb-6">Dashboard</h2>
              <select className="h-7 mt-20 text-blue-500">
                <option value="">Last 30 Days</option>
              </select>
            </div>

            <div className="">
              <div className="h-36 w-[23rem] bg-white shadow-md shadow-slate-300 rounded-lg">
                <span className="flex">
                  <h2 className="text-xl ml-5 mt-5">Hide</h2>

                  <h3 className="bg-slate-200 w-12 h-6 ml-[14rem] text-blue-500 rounded-md relative top-4 ">
                    Yearly
                  </h3>
                </span>
                <p className="text-3xl font-medium ml-5 mt-2">2,590</p>
                <h2 className=" mt-1 ml-5 text-slate-400">Agency</h2>
              </div>

              <div className="h-36 w-[23rem] bg-white shadow-md shadow-slate-300 rounded-lg ml-[24.2rem] mt-[-9rem]">
                <h3 className="bg-slate-200 w-12 h-6 ml-[19rem] text-blue-500 rounded-md relative top-3 ">
                  Yearly
                </h3>
                <p className="text-3xl font-medium ml-5 mt-3">10,000</p>
                <h2 className="mt-5 ml-5 text-slate-400">Customers</h2>
              </div>

              <div className="h-36 w-[23rem] bg-white shadow-md shadow-slate-300 rounded-lg ml-[48.5rem] mt-[-9rem]">
                <h3 className="bg-slate-200 w-12 h-6 ml-[19rem] text-blue-500 rounded-md relative top-3 ">
                  Yearly
                </h3>
                <p className="text-3xl font-medium ml-5 mt-3">100</p>
                <h2 className="mt-5 ml-5 text-slate-400">Products</h2>
              </div>

              <div className="h-36 w-[23rem] bg-white shadow-md shadow-slate-300 rounded-lg ml-[72.7rem] mt-[-9rem]">
                <h3 className="bg-slate-200 w-12 h-6 ml-[19rem] text-blue-500 rounded-md relative top-3 ">
                  Yearly
                </h3>
                <p className="text-3xl font-medium ml-5 mt-3">150</p>
                <h2 className="mt-5 ml-5 text-slate-400">Orders</h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col ">
            <Chart />
            <Footer className="" />
          </div>
        </div>
      </div>
    </div>
  );
};
