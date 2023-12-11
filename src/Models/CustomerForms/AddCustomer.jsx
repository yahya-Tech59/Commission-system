import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "../../api/axiosConfig";
import { IoCloseOutline } from "react-icons/io5";

export const AddCustomer = ({ onClose }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [agency_id, setAgency_id] = useState("");
  const [agents, setAgents] = useState([]);

  const handleClear = () => {
    setName("");
    setContact("");
    setAddress("");
    setAgency_id("");
  };

  const schema = yup.object().shape({
    fullname: yup.string().required(),
    phone: yup.string().required(),
    address: yup.string().required(),
    agency_id: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchAgents = async () => {
      const res = await axios.get(`/api/v1/agents`);

      if (res.status === 200) {
        const agentsData = await res.data;
        setAgents(agentsData.data);
      }
    };

    fetchAgents();
  }, []);

  const AddCustomer = async (data) => {
    data.agency_id = agency_id;
    setLoading(true);
    const res = await axios.post(`/api/v1/customers`, data);

    if (res.status === 201) {
      alert("Customer Registered Successfully");
      handleClear();
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-slate-100">
      <form
        onSubmit={handleSubmit(AddCustomer)}
        className="flex flex-col gap-1 bg-white shadow-slate-300 shadow-sm w-[38rem] h-[38rem] rounded-lg p-3"
      >
        <div className="pb-16 ml-5 mt-8">
          <div className="flex">
            <h2 className="text-3xl ml-40">Add New Customer</h2>
            <button
              onClick={onClose}
              className="h-8 w-8 p-1 bg-blue-500 text-white text-2xl font-medium rounded-md hover:bg-blue-600 ml-28"
            >
              <IoCloseOutline />
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <label>Name</label>
              <input
                type="text"
                {...register("fullname")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="john"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Contact</label>
              <input
                type="string"
                {...register("phone")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="123456"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div>
              <label>Address </label>
              <input
                type="text"
                {...register("address")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="mogadishu..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <label>Agent</label>
              <select
                {...register("agency_id")}
                defaultValue={agency_id}
                onChange={(e) => setAgency_id(e.target.value)}
                className="placeholder:text-slate-700 p-3 mr-1 rounded-lg w-[34rem]"
              >
                <option value="" disabled>
                  Select an agent
                </option>
                {agents.map((agent) => (
                  <option
                    key={agent.id}
                    value={agent.id}
                    className="text-slate-700"
                  >
                    {agent.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* <div className="flex mt-6 gap-4 justify-center ">
            <input type="checkbox" />
            <p>I agree With The Terms Of Use</p>
          </div> */}
          <div className="flex gap-72 ml-5 ">
            <button
              type="submit"
              className="p-1 mr-1 rounded-lg w-28 h-12 mt-10 bg-blue-600 text-white text-xl "
            >
              Submit
            </button>
            <button
              type="submit"
              className="p-1 mr-1 rounded-lg w-28 h-12 mt-10 bg-red-600 text-white text-xl "
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
