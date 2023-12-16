import React from "react";

const ClearButton = ({ label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="p-1 mr-1 rounded-lg w-28 h-12 mt-10 bg-red-600 text-white text-xl"
  >
    {label}
  </button>
);

export default ClearButton;
