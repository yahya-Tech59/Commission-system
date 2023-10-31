import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
} from "./pages/index";
import { Sidebar } from "./components/Sidebar";

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
