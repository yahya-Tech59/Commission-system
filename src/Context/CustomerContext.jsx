import { createContext, useState } from "react";
import axios from "axios";

export const CustomersContext = createContext();

export const CustomersProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";
  const token = localStorage.getItem("token");

  const fetchCustomer = async (page) => {
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
  const values = {
    customers,
    loading,
    fetchCustomer,
  };

  return (
    <CustomersContext.Provider value={values}>
      {children}
    </CustomersContext.Provider>
  );
};
