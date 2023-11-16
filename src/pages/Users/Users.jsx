import React, { useState, useEffect } from "react";

import { columns } from "./UserColumns";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import axios from "axios";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";

  const fetchUsers = async () => {
    const token = localStorage.getItem("token");
    try {
      setLoading(true);
      const res = await axios.get(`${baseUrl}/api/v1/users`, {
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

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading === true) {
    return <h1 className="text-3xl font-semibold ml-[53rem]">Loading...</h1>;
  }

  return (
    <div className="ml-10">
      <Header />
      <div className="bg-white w-[96rem] mt-3 mb-6 ml-2 shadow-lg shadow-slate-300 rounded-lg">
        <h2 className="text-3xl pt-6 ml-7">Users</h2>

        <Table data={users} columns={columns} />
      </div>
    </div>
  );
};
