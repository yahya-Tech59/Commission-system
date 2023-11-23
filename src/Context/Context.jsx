import React, { createContext, useState } from "react";
import axios from "axios";

// export const initialState = {
//   loading: true,
//   currentPage: 1,
//   agents: [],
//   customers: [],
//   orders: [],
//   products: [],
//   users: [],
//   showAddAgent: false,
//   showAddCustomer: false,
//   showAddOrder: false,
//   showAddProduct: false,
//   showAddUser: false,
// };

// export const Action_Types = {
//   SET_LOADING: "SET_LOADING",
//   SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
//   SET_AGENTS: "SET_AGENTS",
//   SET_CUSTOMERS: "SET_CUSTOMERS",
//   SET_ORDERS: "SET_ORDERS",
//   SET_PRODUCTS: "SET_PRODUCTS",
//   SET_USERS: "SET_USERS",
//   SET_SHOW_ADD_AGENT: "SET_SHOW_ADD_AGENT",
//   SET_SHOW_ADD_CUSTOMER: "SET_SHOW_ADD_CUSTOMER",
//   SET_SHOW_ADD_ORDER: "SET_SHOW_ADD_ORDER",
//   SET_SHOW_ADD_PRODUCT: "SET_SHOW_ADD_PRODUCT",
//   SET_SHOW_ADD_USER: "SET_SHOW_ADD_USER",
// };

// export const reducer = (state, action) = {
//   const {type, payload} = action();
// }

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [agents, setAgents] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [showAddAgent, setShowAddAgent] = useState(false);
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [showAddOrder, setShowAddOrder] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);

  const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchAgent(newPage);
  };

  const fetchAgent = async (page) => {
    const token = localStorage.getItem("token");
    try {
      setLoading(true);
      const res = await axios.get(`${baseUrl}/api/v1/agents?page=${page}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        const response = await res.data;
        console.log(response);

        setAgents(response.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //FetchCustomer
  const fetchCustomer = async (page) => {
    const token = localStorage.getItem("token");
    try {
      setLoading(true);
      const res = await axios.get(`${baseUrl}/api/v1/customers?page=${page}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        const response = await res.data;
        console.log(response);

        setCustomers(response.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //FetchOrder
  const fetchOrder = async (page) => {
    const token = localStorage.getItem("token");
    try {
      setLoading(true);
      const res = await axios.get(`${baseUrl}/api/v1/orders?page=${page}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        const response = await res.data;
        console.log(response);

        setOrders(response.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //FetchProducts
  const fetchProducts = async (page) => {
    const token = localStorage.getItem("token");
    try {
      setLoading(true);
      const res = await axios.get(`${baseUrl}/api/v1/products?page=${page}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        const response = await res.data;
        console.log(response);

        setProducts(response.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //FetchUsers
  const fetchUsers = async (page) => {
    const token = localStorage.getItem("token");
    try {
      setLoading(true);
      const res = await axios.get(`${baseUrl}/api/v1/users?page=${page}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        const response = await res.data;
        console.log(response);

        setUsers(response.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    loading,
    currentPage,
    agents,
    showAddAgent,
    setShowAddAgent,
    handlePageChange,
    fetchAgent,
    customers,
    fetchCustomer,
    showAddCustomer,
    setShowAddCustomer,
    orders,
    fetchOrder,
    showAddOrder,
    setShowAddOrder,
    products,
    fetchProducts,
    showAddProduct,
    setShowAddProduct,
    users,
    fetchUsers,
    showAddUser,
    setShowAddUser,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
