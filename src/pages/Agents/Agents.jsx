import { useState, useEffect, useMemo } from "react";

// import agent from "./Agent.json";
import { columns } from "./AgentColumns";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import axios from "axios";

const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";

export const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  const data = useMemo(() => agents, [agents]);

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

      if (res.status === 200) {
        const response = await res.data;
        console.log(response);

        setAgents(response.data);
        setLoading(false);
      }

      // console.log("API Response:", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAgentData();
  }, []);

  if (loading === true) {
    return <h1 className="text-3xl font-semibold ml-[53rem]">Loading...</h1>;
  }

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

        <Table data={data} columns={columns} />

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
