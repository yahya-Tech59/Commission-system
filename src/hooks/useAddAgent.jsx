import { useState } from "react";
import axios from "../api/axiosConfig";

const useAddAgent = (onClose) => {
  const [loading, setLoading] = useState(false);

  const addAgent = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/v1/agents", data);

      if (res.status === 201) {
        alert("Agent Registered successfully");
        console.log(res);
        onClose();
        setLoading(false);
      }
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  return {
    loading,
    addAgent,
  };
};

export default useAddAgent;
