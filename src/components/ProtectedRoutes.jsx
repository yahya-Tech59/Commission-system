import React from "react";
import { Outlet } from "react-router-dom";
import { SignIn } from "../pages/SignIn";

const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

export const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <SignIn />;
};
