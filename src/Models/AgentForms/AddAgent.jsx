import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "../../api/axiosConfig";
import { IoCloseOutline } from "react-icons/io5";
import SubmitButton from "../../components/SubmitButton";
import ClearButton from "../../components/ClearButton";
import useAddAgent from "../../hooks/useAddAgent";

export const AddAgent = ({ onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [business, setBusiness] = useState("");
  const [contact, setContact] = useState("");

  const handleClear = () => {
    setName("");
    setDescription("");
    setBusiness("");
    setContact("");
  };

  const schema = yup.object().shape({
    fullname: yup.string().required(),
    description: yup.string().required(),
    business: yup.string().required(),
    phone: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const { loading, addAgent } = useAddAgent(onClose);

  if (loading === true) {
    return <h1 className="text-3xl font-semibold ">Loading...</h1>;
  }

  return (
    <div className="flex bg-slate-100">
      <form
        onSubmit={handleSubmit(addAgent)}
        className="flex flex-col gap-1 bg-white shadow-slate-300 shadow-sm w-[38rem] h-[38rem] rounded-xl p-3"
      >
        <div className="pb-16 ml-5 mt-8">
          <div className="flex">
            <h2 className="text-3xl ml-40">Add New Agent</h2>
            <button
              onClick={onClose}
              className=" h-8 w-8 p-1 bg-blue-500 text-white text-2xl font-medium rounded-md hover:bg-blue-600 ml-36"
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
              <label>Description</label>
              <input
                type="text"
                {...register("description")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Business </label>
              <input
                type="text"
                {...register("business")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="web..."
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Contact </label>
              <input
                type="string"
                {...register("phone")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="123456789"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-72 ml-5 ">
            <SubmitButton label="Submit" />
            <ClearButton label="Clear" onClick={handleClear} />
          </div>
        </div>
      </form>
    </div>
  );
};
