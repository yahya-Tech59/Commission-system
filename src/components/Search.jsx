import React from "react";
import { CiSearch } from "react-icons/ci";

export const Search = ({ value, onChange }) => {
  return (
    <div className="mt-[-4rem]">
      <CiSearch className="ml-[91rem] relative top-6 text-2xl" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search"
        className="w-44 h-8 ml-[82rem] mt-[-20rem] shadow-sm shadow-slate-400 p-1 rounded-md bg-zinc-100"
      />
    </div>
  );
};
