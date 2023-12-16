import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const CloseButton = ({ onClick, className }) => (
  <button
    onClick={onClick}
    className="h-8 w-8 p-1 bg-blue-500 text-white text-2xl font-medium rounded-md hover:bg-blue-600"
  >
    <IoCloseOutline />
  </button>
);

export default CloseButton;
