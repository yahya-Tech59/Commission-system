import React, { useContext, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { cart, heart, notif } from "../assets/img";
import { AiOutlineHome } from "react-icons/ai";
import { MdRealEstateAgent } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineOrderedList } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { GoSignOut } from "react-icons/go";
import { BsFillExclamationCircleFill } from "react-icons/bs";

import { user } from "../assets/img";
import { NavLink } from "react-router-dom";
import { Context } from "../Context/Context";

export const Sidebar = () => {
  const { sidebarOpen, handleOpen, handleClose } = useContext(Context);

  return (
    <div>
      {!sidebarOpen ? (
        <div onClick={handleOpen}>
          <FaBars className="text-3xl ml-10 mt-5 cursor-pointer " />
        </div>
      ) : (
        <div className="w-72 h-screen shadow-slate-400 shadow-md bg-white ">
          <div onClick={handleClose}>
            <BsFillArrowLeftCircleFill className="text-blue-700 text-2xl ml-[275px] relative top-10 cursor-pointer " />
          </div>
          <h1 className="text-3xl text-center relativeIoNotificationsSharp top-4">
            Billing System
          </h1>

          <div className="relative top-10">
            <img src={user} alt="user" className="ml-24 mt-10" />
            <h1 className="text-xl ml-24">Jama Abdi</h1>
            <p className="text-slate-400 ml-28">@Abdi</p>
            <span className="flex ml-20 mt-8 space-x-4 ">
              <img src={cart} alt="cart" />
              <img src={heart} alt="cart" />
              <img src={notif} alt="cart" />
            </span>

            <nav className="mt-10 text-xl list-none ml-2 space-y-4">
              <div className="border border-slate-200 w-56 ml-8 mb-5"></div>
              <>
                <NavLink
                  to="/dashboard"
                  className="flex text-slate-500 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 active:bg-zinc-200"
                >
                  <AiOutlineHome className="ml-12 mr-5  " />
                  Admin Dashboard
                </NavLink>
              </>
              <>
                <NavLink
                  to="/agents"
                  className="flex text-slate-500 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 active:bg-zinc-200"
                >
                  <MdRealEstateAgent className="ml-12 mr-5 mt-1" />
                  Agents
                </NavLink>
              </>
              <>
                <NavLink
                  to="/customers"
                  className="flex text-slate-500 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 active:bg-zinc-200"
                >
                  <MdOutlineDashboardCustomize className="ml-12 mr-5 mt-1 " />
                  Customers
                </NavLink>
              </>
              <>
                <NavLink
                  to="/products"
                  className="flex text-slate-500 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 active:bg-zinc-200"
                >
                  <MdProductionQuantityLimits className="ml-12 mr-5 mt-1" />
                  Products
                </NavLink>
              </>
              <>
                <NavLink
                  to="/orders"
                  className="flex text-slate-500 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 active:bg-zinc-200"
                >
                  <AiOutlineOrderedList className="ml-12 mr-5 mt-1" />
                  Orders
                </NavLink>
              </>
              <>
                <NavLink
                  to="/users"
                  className="flex text-slate-500 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 active:bg-zinc-200"
                >
                  <HiUserGroup className="ml-12 mr-5 mt-1" />
                  Users
                </NavLink>
              </>

              <div className="border border-slate-200 w-56 ml-8 mt-5 "></div>
              <h2 className="ml-10 mt-10 mb-6 text-slate-600">OTHERS</h2>
              <>
                <NavLink
                  to="/signout"
                  className="flex mb-3  text-slate-500 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 active:bg-zinc-200"
                >
                  <GoSignOut className="ml-12 mr-5 mt-1" />
                  SignOut
                </NavLink>
              </>

              <>
                <NavLink
                  to="/help"
                  className="flex text-slate-500 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 active:bg-zinc-200"
                >
                  <BsFillExclamationCircleFill className="ml-12 mr-5 mt-1" />
                  Help
                </NavLink>
              </>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

// const cols = [
//   {
//     header: "Actions",
//     cell: (row) => {
//       return (
//         <button
//           // onClick={a function based on the cell value}
//         >
//           {row.getValue() as ReactNode}
//         </button>
//       );
//     },
//     accessorKey: "actions",
//   },
// ],
