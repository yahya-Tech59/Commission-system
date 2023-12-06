import { createContext, useState } from "react";

import axios from "axios";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const values = {
    users,
    loading,
    fetchUser,
  };

  return (
    <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
  );
};
