import React from "react";

const SubmitButton = ({ label, onClick }) => (
  <button
    type="submit"
    onClick={onClick}
    className="p-1 mr-1 rounded-lg w-28 h-12 mt-10 bg-blue-600 text-white text-xl"
  >
    {label}
  </button>
);

export default SubmitButton;
