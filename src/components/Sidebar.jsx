import React, { useState } from "react";
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
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [sidebarOpen, setsidebarOpen] = useState(true);

  const handleOpen = () => {
    setsidebarOpen(true);
  };

  const handleClose = () => {
    setsidebarOpen(false);
  };
  return (
    <div>
      {!sidebarOpen ? (
        <div onClick={handleOpen}>
          <FaBars className="text-3xl ml-10 mt-5 " />
        </div>
      ) : (
        <div className="w-72 h-screen shadow-slate-400 shadow-md bg-white">
          <div onClick={handleClose}>
            <BsFillArrowLeftCircleFill className="text-blue-700 text-2xl ml-[275px] relative top-10" />
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

            <div className="mt-10 text-xl list-none ml-2">
              <div className="border border-slate-200 w-56 ml-8 mb-5"></div>
              <div className="flex text-slate-500 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 ">
                <AiOutlineHome className="ml-12 mr-5 mt-3 " />
                <Link to="/" className="py-2">
                  Admin Dashboard
                </Link>
              </div>
              <div className="flex text-slate-500 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 ">
                <MdRealEstateAgent className="ml-12 mr-5 mt-3" />
                <Link to="/agents" className="py-2">
                  Agents
                </Link>
              </div>
              <div className="flex text-slate-500 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 ">
                <MdOutlineDashboardCustomize className="ml-12 mr-5 mt-3 " />
                <Link to="/customers" className="py-2">
                  Customers
                </Link>
              </div>
              <div className="flex text-slate-500 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 ">
                <MdProductionQuantityLimits className="ml-12 mr-5 mt-3" />
                <Link to="/products" className="py-2">
                  Products
                </Link>
              </div>
              <div className="flex text-slate-500 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 ">
                <AiOutlineOrderedList className="ml-12 mr-5 mt-3" />
                <Link to="/orders" className="py-2">
                  Orders
                </Link>
              </div>
              <div className="flex text-slate-500 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 ">
                <HiUserGroup className="ml-12 mr-5 mt-3" />
                <Link to="/users" className="py-2">
                  Users
                </Link>
              </div>

              <div className="border border-slate-200 w-56 ml-8 mt-5"></div>
              <h2 className="-ml-36 mt-5 mb-3">OTHERS</h2>
              <div className="flex text-slate-500 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 ">
                <GoSignOut className="ml-12 mr-5 mt-4" />
                <Link to="/signout" className="py-3">
                  SignOut
                </Link>
              </div>

              <div className="flex text-slate-500 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 ">
                <BsFillExclamationCircleFill className="ml-12 mr-5 mt-4" />
                <Link to="/help" className="py-3">
                  Help
                </Link>
              </div>
            </div>
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
