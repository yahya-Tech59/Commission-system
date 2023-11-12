import { useState, useEffect, useMemo } from "react";

// import agent from "./Agent.json";
// import { columns } from "./AgentColumns";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { useFetchAgents } from "../../hooks/useFetchAgents";

export const Agents = () => {
  const [agents, setAgents] = useState([]);
  // const [loading, setLoading] = useState(true);

  const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";

  const fetchAgentData = async () => {
    const token = localStorage.getItem("token");
    try {
      // setLoading(true);
      const res = await axios.get(`${baseUrl}/api/v1/agents`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log(res.data);
      const response = await res.data;
      // console.log(response);
      setAgents(response);
      // setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAgentData();
  }, []);
  // if (loading === true) {
  //   return <h1 className="text-3xl font-semibold ml-[53rem]">Loading...</h1>;
  // }

  const data = useMemo(() => agents, [agents]);

  const columns = [
    {
      header: "No",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "fullname",
    },
    {
      header: "Description",
      accessorKey: "description",
    },
    {
      header: "Business",
      accessorKey: "business",
    },
    {
      header: "Contact",
      accessorKey: "phone",
    },
  ];

  return (
    <div className="ml-10">
      <Header />
      <div className="bg-white w-[96rem] mt-3 mb-6 ml-2 shadow-lg shadow-slate-300 rounded-lg ">
        <h2 className="text-3xl pt-6 ml-7">Agents</h2>
        <div className="text-xl mt-10 ml-10">
          Showing :{" "}
          <select className="p-1 rounded-md text-xl">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
          </select>
        </div>

        {/* <div className="mt-[-4rem]">
          <CiSearch className="ml-[91rem] relative top-6 text-2xl" />
          <input
            type="text"
            // value={filter}
            // onChange={(e) => setfilter(e.target.value)}
            placeholder="Search"
            className="w-44 h-8 ml-[82rem] mt-[-20rem] shadow-sm shadow-slate-400 p-1 rounded-md bg-zinc-100"
          />
        </div> */}

        <Table data={data} columns={columns} />

        {/* <table className="w-[92rem] ml-8 mt-10 mb-2">
          <thead>
            {columns.map((column) => (
              <tr className="hover:bg-zinc-700 hover:text-white">
                <th className="border border-zinc-200 p-3 text-slate-400">
                  {column.No}
                </th>
                <th className="border border-zinc-200 p-3 text-slate-400">
                  {column.Name}
                </th>
                <th className="border border-zinc-200 p-3 text-slate-400">
                  {column.Description}
                </th>
                <th className="border border-zinc-200 p-3 text-slate-400">
                  {column.Bussiness}
                </th>
                <th className="border border-zinc-200 p-3 text-slate-400">
                  {column.Phone}
                </th>
              </tr>
            ))}
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

        {/* <div className="ml-[78rem] pb-3">
          <button
            onClick={() => table.setPageIndex(0)}
            className="bg-slate-200 p-1 m-1 rounded-md"
          >
            {"<<"}
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="bg-slate-200 p-1 m-1 rounded-md"
          >
            Previous Page
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="bg-slate-200 p-1 m-1 rounded-md"
          >
            Next Page
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            className="bg-slate-200 p-1 m-1 rounded-md"
          >
            {">>"}
          </button>
        </div>  */}
      </div>
    </div>
  );
};
