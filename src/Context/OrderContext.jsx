import { createContext, useState } from "react";
import axios from "axios";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";
  const token = localStorage.getItem("token");

  const fetchOrder = async (page) => {
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
  const values = {
    orders,
    loading,
    fetchOrder,
  };

  return (
    <OrdersContext.Provider value={values}>{children}</OrdersContext.Provider>
  );
};
