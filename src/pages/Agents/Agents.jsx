import { useState, useEffect } from "react";

import { columns } from "./AgentColumns";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import axios from "axios";

export const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchAgent(newPage);
  };

  // const handlePageChange = () => {
  //   const prevPage = {
  //     first_page_url:
  //       "http://spiky-crater-dep2vxlep8.ploi.online/api/v1/agents?page=1",
  //   };
  // };

  const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";

  const fetchAgent = async (page) => {
    const token = localStorage.getItem("token");
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
        console.log(response);

        setAgents(response.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAgent(currentPage);
  }, [currentPage]);

  if (loading === true) {
    return <h1 className="text-3xl font-semibold ml-[53rem]">Loading...</h1>;
  }

  return (
    <div className="ml-10">
      <Header />
      <div className="bg-white w-[96rem] mt-3 mb-6 ml-2 shadow-lg shadow-slate-300 rounded-lg ">
        <h2 className="text-3xl pt-6 ml-7">Agents</h2>

        <Table data={agents} columns={columns} />

        <div className="ml-[76rem] pb-3">
          <button
            onClick={() => handlePageChange(currentPage === 20)}
            className="bg-slate-200 p-1 m-1 rounded-md pl-2 pr-2"
          >
            {"<<"}
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-slate-200 p-1 m-1 rounded-md pl-2 pr-2"
          >
            Previous Page
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === 20}
            className="bg-slate-200 p-1 m-1 rounded-md pl-2 pr-2"
          >
            Next Page
          </button>
          <button
            onClick={() => handlePageChange()}
            className="bg-slate-200 p-1 m-1 rounded-md pl-2 pr-2"
          >
            {">>"}
          </button>
        </div>

        {/* <table className="w-[92rem] ml-8 mt-10 mb-2">
          <thead>
            <tr className="hover:bg-zinc-700 hover:text-white">
              <th className="border border-zinc-200 p-3 text-slate-400">No</th>
              <th className="border border-zinc-200 p-3 text-slate-400">
                Name
              </th>
              <th className="border border-zinc-200 p-3 text-slate-400">
                Description
              </th>
              <th className="border border-zinc-200 p-3 text-slate-400">
                Bussiness
              </th>
              <th className="border border-zinc-200 p-3 text-slate-400">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent, index) => (
              <tr key={index} className="hover:bg-zinc-700 hover:text-white">
                <td className=" border border-zinc-200 p-4">{agent.id}</td>
                <td className=" border border-zinc-200 p-4">
                  {agent.fullname}
                </td>
                <td className=" border border-zinc-200 p-4">
                  {agent.description}
                </td>
                <td className=" border border-zinc-200 p-4">
                  {agent.business}
                </td>
                <td className=" border border-zinc-200 p-4">{agent.phone}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </div>
  );
};
