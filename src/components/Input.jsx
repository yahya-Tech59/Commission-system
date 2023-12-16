import React from "react";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type || "text"}
      className="bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
