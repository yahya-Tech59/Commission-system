import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { IoCloseOutline } from "react-icons/io5";

export const AddCustomer = ({ onClose }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [agency, setAgency] = useState([]);

  const handleClear = () => {
    setName("");
    setContact("");
    setAddress("");
    setDescription("");
  };

  const schema = yup.object().shape({
    fullname: yup.string().required(),
    phone: yup.string().required(),
    address: yup.string().required(),
    description: yup.string().required(),
    agencyId: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    // Fetch the list of agencies when the component mounts
    const fetchAgency = async () => {
      try {
        const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";
        const token = localStorage.getItem("token");

        const res = await axios.get(`${baseUrl}/api/v1/agency`, {
          headers: {
            "Content-Type": "Application/json",
            Accept: "Application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 200) {
          const agencyData = await res.data;
          setAgency(agencyData.data);
        }
      } catch (err) {
        console.error("Error fetching agencies:", err);
      }
    };

    fetchAgency();
  }, []);

  const AddCustomer = async (data) => {
    const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";
    const token = localStorage.getItem("token");

    try {
      setLoading(true);
      const res = await axios.post(`${baseUrl}/api/v1/customers`, data, {
        headers: {
          "Content-Type": "Application/json",
          Accept: "Application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 201) {
        alert("Customer Registered Successfuly");
        handleClear();
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex bg-slate-100">
      <form
        onSubmit={handleSubmit(AddCustomer)}
        className="flex flex-col gap-1 bg-white shadow-slate-300 shadow-sm w-[38rem] h-[44rem] rounded-lg p-3"
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
              <label>Description</label>
              <input
                type="text"
                {...register("description")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="something..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label>Agency</label>
              <select
                {...register("agencyId")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
              >
                {agency.map((agency) => (
                  <option key={agency.id} value={agency.id}>
                    {agency.name}
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
