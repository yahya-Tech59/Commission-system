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

      const response = res.data.json();
      setAgents(response);
      setLoading(false);
    } catch (error) {
      console.log(err);
    }

    useEffect(() => {
      fetchAgentData();
    }, []);

    if (loading === true) {
      return <h1 className="text-3xl font-semibold ml-[53rem]">Loading...</h1>;
    }

    return { agents };
  };
};
