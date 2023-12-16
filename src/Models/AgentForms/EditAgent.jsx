import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "../../api/axiosConfig";
import { IoCloseOutline } from "react-icons/io5";
import SubmitButton from "../../components/SubmitButton";
import ClearButton from "../../components/ClearButton";

export const EditAgent = ({ onClose, id }) => {
  const [fullname, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const [business, setBusiness] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    fullname: yup.string().required(),
    description: yup.string().required(),
    business: yup.string().required(),
    phone: yup.number().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClear = () => {
    setFullName("");
    setDescription("");
    setBusiness("");
    setContact("");
  };

  const fetchEditAgent = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/v1/agents/${id}/edit`);

      if (res.status === 200) {
        const agentData = res.data[0];
        setFullName(agentData?.fullname || "");
        setDescription(agentData?.description || "");
        setBusiness(agentData?.business || "");
        setContact(agentData?.phone || "");

        setLoading(false);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchEditAgent();
  }, [id]);

  const editAgent = async () => {
    try {
      setLoading(true);
      const res = await axios.put(`/api/v1/agents/${id}`, {
        fullname,
        description,
        business,
        phone: contact,
      });
      if (res.status === 200) {
        alert("updated Successfuly");
        onclose();
      }
    } catch (error) {
      alert(error);
    }
  };
  if (loading === true) {
    return <h1 className="text-3xl font-semibold ">Loading...</h1>;
  }
  return (
    <div className="flex bg-slate-100">
      <form
        onSubmit={handleSubmit(editAgent)}
        className="flex flex-col gap-1 bg-white shadow-slate-300 shadow-sm w-[38rem] h-[38rem] rounded-xl p-3"
      >
        <div className="pb-16 ml-5 mt-8">
          <div className="flex">
            <h2 className="text-3xl ml-40">Edit Agent</h2>
            <button
              onClick={onClose}
              className=" h-8 w-8 p-1 bg-blue-500 text-white text-2xl font-medium rounded-md hover:bg-blue-600 ml-56"
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
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
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
                type="number"
                {...register("phone")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="123456789"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>
          {/* <div className="flex mt-6 gap-4 justify-center ">
              <input type="checkbox" />
              <p>I agree With The Terms Of Use</p>
            </div> */}
          <div className="flex gap-72 ml-5 ">
            <SubmitButton label="Submit" />
            <ClearButton label="Clear" onClick={handleClear} />
          </div>
        </div>
      </form>
    </div>
  );
};
