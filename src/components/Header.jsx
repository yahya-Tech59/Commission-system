import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

export const Header = () => {
  return (
    <div className="flex bg-white mt-3 ml-2 h-16 rounded-md w-[96rem] ">
      <button className="flex mt-5 ml-3 mr-3 ">
        <AiFillHome className="text-blue-600 text-2xl mr-3  " />
        Home
      </button>

      <div className="border border-slate-200 h-12 mt-2 ml-6"></div>

      <button className="flex mt-5 ml-3 mr-3 ">
        <AiFillHome className="text-blue-600 text-2xl mr-3  " />
        Paid
      </button>

      <div className="border border-slate-200 h-12 mt-2 ml-6"></div>

      <div className="flex gap-4 ml-[24rem] pl-[40rem]">
        <h2 className="text-xl mt-5 mr-8">EN</h2>
        <IoMdNotificationsOutline className="text-2xl mt-5 -ml-10" />
        <div className="border border-slate-300 h-8  mt-4"></div>
        <h2 className="text-xl mt-5">Jama Abdi</h2>
        <BiUserCircle className="ml-auto mt-4 text-3xl text-blue-600 mr-3" />
      </div>
    </div>
  );
};
