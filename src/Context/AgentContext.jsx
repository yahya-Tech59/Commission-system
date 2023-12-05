import { createContext, useState } from "react";
import axios from "axios";

export const AgentsContext = createContext();

export const AgentsProvider = ({ children }) => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";
  const token = localStorage.getItem("token");

  const fetchAgent = async (page) => {
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

        setAgents(response.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const values = {
    agents,
    loading,
    fetchAgent,
  };

  return (
    <AgentsContext.Provider value={values}>{children}</AgentsContext.Provider>
  );
};
