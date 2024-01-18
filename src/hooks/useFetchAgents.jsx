import { useState } from "react";
import axios from "../api/axiosConfig";

export const useFetchAgents = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAgent = async (page) => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/v1/agents?page=${page}`);

      if (res.status === 200) {
        const response = await res.data;

        setAgents(response.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    agents,
    loading,
    fetchAgent,
  };
};
