import { createContext, useState } from "react";

import axios from "axios";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";
  const token = localStorage.getItem("token");

  const fetchUser = async (page) => {
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

  const values = {
    users,
    loading,
    fetchUser,
  };

  return (
    <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
  );
};
