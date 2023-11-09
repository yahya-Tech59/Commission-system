import React from "react";
import { Navigate } from "react-router-dom";

export const SignOut = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    return <Navigate to="/" />;
  };
  return handleLogout();
};
