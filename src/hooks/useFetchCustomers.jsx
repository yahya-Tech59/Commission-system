import { useState } from "react";
import axios from "../api/axiosConfig";

export const useFetchCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCustomer = async (page) => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/v1/customers?page=${page}`);

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
  return {
    customers,
    loading,
    fetchCustomer,
  };
};
