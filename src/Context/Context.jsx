import React, { createContext, useReducer } from "react";
import axios from "axios";

export const initialState = {
  sidebarOpen: true,
  loading: true,
  currentPage: 1,
  agents: [],
  customers: [],
  orders: [],
  products: [],
  users: [],
  showAddCustomer: false,
  showAddOrder: false,
  showAddProduct: false,
  showAddUser: false,
};

export const Action_Types = {
  setsidebarOpen: "setsidebarOpen",
  setLoading: "setLoading",
  setCurrentPage: "setCurrentPage",
  setAgents: "SetAgents",
  setCustomers: "setCustomers",
  setOrders: "setOrderS",
  setProducts: "setProducts",
  setUsers: "setUsers",
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case Action_Types.setsidebarOpen:
      return { ...state, sidebarOpen: payload };
    case Action_Types.setLoading:
      return { ...state, loading: payload };
    case Action_Types.setCurrentPage:
      return { ...state, currentPage: payload };
    case Action_Types.setAgents:
      return { ...state, agents: payload };
    case Action_Types.setCustomers:
      return { ...state, customers: payload };
    case Action_Types.setOrders:
      return { ...state, orders: payload };
    case Action_Types.setProducts:
      return { ...state, products: payload };
    case Action_Types.setUsers:
      return { ...state, users: payload };

    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  // const [loading, setLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [agents, setAgents] = useState([]);
  // const [customers, setCustomers] = useState([]);
  // const [orders, setOrders] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [users, setUsers] = useState([]);

  const [
    {
      sidebarOpen,
      loading,
      currentPage,
      agents,
      customers,
      orders,
      products,
      users,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const handleOpen = () => {
    // setsidebarOpen(true);
    dispatch({ type: Action_Types.setsidebarOpen, payload: true });
  };

  const handleClose = () => {
    // setsidebarOpen(false);
    dispatch({ type: Action_Types.setsidebarOpen, payload: false });
  };

  const handlePageChange = (newPage) => {
    // setCurrentPage(newPage);
    dispatch({ type: Action_Types.setCurrentPage, payload: newPage });
  };

  const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";
  const token = localStorage.getItem("token");

  const fetchAgent = async (page) => {
    try {
      // setLoading(true);
      dispatch({ type: Action_Types.setLoading, payload: true });
      const res = await axios.get(`${baseUrl}/api/v1/agents?page=${page}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        const response = await res.data;
        // console.log(response);

        // setAgents(response.data);
        dispatch({ type: Action_Types.setAgents, payload: response.data });
        // setLoading(false);
        dispatch({ type: Action_Types.setLoading, payload: false });
      }
    } catch (err) {
      console.log(err);
    }
  };

  //FetchCustomer
  const fetchCustomer = async (page) => {
    try {
      dispatch({ type: Action_Types.setLoading, payload: true });
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

        // setCustomers(response.data);
        dispatch({ type: Action_Types.setCustomers, payload: response.data });

        // setLoading(false);
        dispatch({ type: Action_Types.setLoading, payload: false });
      }
    } catch (err) {
      console.log(err);
    }
  };

  //FetchOrder
  const fetchOrder = async (page) => {
    try {
      // setLoading(true);
      dispatch({ type: Action_Types.setLoading, payload: true });

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

        // setOrders(response.data);
        dispatch({ type: Action_Types.setOrders, payload: response.data });

        // setLoading(false);
        dispatch({ type: Action_Types.setLoading, payload: false });
      }
    } catch (err) {
      console.log(err);
    }
  };

  //FetchProducts
  const fetchProduct = async (page) => {
    try {
      // setLoading(true);
      dispatch({ type: Action_Types.setLoading, payload: true });

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

        // setProducts(response.data);
        dispatch({ type: Action_Types.setProducts, payload: response.data });

        // setLoading(false);
        dispatch({ type: Action_Types.setLoading, payload: false });
      }
    } catch (err) {
      console.log(err);
    }
  };

  //FetchUsers
  const fetchUser = async (page) => {
    try {
      // setLoading(true);
      dispatch({ type: Action_Types.setLoading, payload: true });

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

        // setUsers(response.data);
        dispatch({ type: Action_Types.setUsers, payload: response.data });

        // setLoading(false);
        dispatch({ type: Action_Types.setLoading, payload: false });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    sidebarOpen,
    handleOpen,
    handleClose,
    loading,
    currentPage,
    agents,
    handlePageChange,
    fetchAgent,
    customers,
    fetchCustomer,
    orders,
    fetchOrder,
    products,
    fetchProduct,
    users,
    fetchUser,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
