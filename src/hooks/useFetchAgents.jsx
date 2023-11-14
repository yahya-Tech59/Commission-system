import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchAgents = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";

  const fetchAgentData = async () => {
    const token = localStorage.getItem("token");
    try {
      setLoading(true);
      const res = await axios.get(`${baseUrl}/api/v1/agents`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const response = await res.data;
      setAgents(response.data);
      setLoading(false);
    } catch (error) {
      console.log(err);
    }

    useEffect(() => {
      fetchAgentData();
    }, []);

    return { agents, loading };
  };
};
