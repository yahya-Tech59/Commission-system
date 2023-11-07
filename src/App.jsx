import { useState, useContext } from "react";
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
    <div>
      <div className="flex bg-zinc-100 ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="/dashboard" element={[<Sidebar />, <Dashboard />]} />
            <Route path="agents" element={[<Sidebar />, <Agents />]} />
            <Route path="customers" element={[<Sidebar />, <Customers />]} />
            <Route path="products" element={[<Sidebar />, <Products />]} />
            <Route path="orders" element={[<Sidebar />, <Orders />]} />
            <Route path="users" element={[<Sidebar />, <Users />]} />
            <Route path="signout" element={[<Sidebar />, <SignOut />]} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
