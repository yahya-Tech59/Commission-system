import {
  Dashboard,
  Agents,
  Customers,
  Products,
  Orders,
  Users,
  SignIn,
  SignUp,
  SignOut,
} from "../pages/index";
import { NoMatch } from "./NoMatch";
import { Sidebar } from "../layouts/Sidebar";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "signUp",
    element: <SignUp />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: (
          <>
            <Sidebar />,
            <Dashboard />,
          </>
        ),
      },
      {
        path: "agents",
        element: (
          <>
            <Sidebar />,
            <Agents />,
          </>
        ),
      },
      {
        path: "customers",
        element: (
          <>
            <Sidebar />,
            <Customers />,
          </>
        ),
      },
      {
        path: "products",
        element: (
          <>
            <Sidebar />,
            <Products />,
          </>
        ),
      },
      {
        path: "orders",
        element: (
          <>
            <Sidebar />,
            <Orders />,
          </>
        ),
      },
      {
        path: "users",
        element: (
          <>
            <Sidebar />,
            <Users />,
          </>
        ),
      },
      {
        path: "signout",
        element: (
          <>
            <Sidebar />,
            <SignOut />,
          </>
        ),
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);
