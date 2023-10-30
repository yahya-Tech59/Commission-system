import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Dashboard } from "./pages/Dashboard";
import { Agents } from "./pages/Agents/Agents";
import { Customers } from "./pages/Customers/Customers";
import { Products } from "./pages/Products/Products";
import { Orders } from "./pages/Orders/Orders";
import { Users } from "./pages/Users/Users";
import { SignOut } from "./pages/SignOut";
import { Sidebar } from "./components/Sidebar";
import { AddUser } from "./components/FormEvents/UserForms/AddUsers";
// import { EditOrder } from "./components/FormEvents/OrderForms/AddOrder";

const App = () => {
  return (
    <div className="card">
      <div className="flex bg-zinc-100 ">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="agents" element={<Agents />} />
            <Route path="customers" element={<Customers />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="signout" element={<SignOut />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
