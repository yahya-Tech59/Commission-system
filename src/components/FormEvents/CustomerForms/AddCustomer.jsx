import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { IoCloseOutline } from "react-icons/io5";

export const AddCustomer = ({ onClose }) => {
  const schema = yup.object().shape({
    fullname: yup.string().required(),
    contact: yup.number().required(),
    address: yup.string().required(),
    description: yup.string().required(),
    agency: yup.number().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";
    const token = localStorage.getItem("token");

    try {
      setLoading(true);
      const res = await axios
        .post(`${baseUrl}/api/v1/customers`, data, {
          headers: {
            "Content-Type": "Application/json",
            Accept: "Application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => result.res.data.json());

      if (res.status === 200) {
        alert("Customer Registered Successfuly");
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex bg-slate-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col ml-56 mr-80 mb-12 mt-28 gap-1 bg-white shadow-slate-300 shadow-sm w-[38rem] h-[54rem] rounded-xl p-3"
      >
        <div className="pb-16 ml-5 mt-8">
          <div className="flex">
            <h2 className="text-3xl ml-40">Add New Customer</h2>
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
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Contact</label>
              <input
                type="number"
                {...register("phone")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="123456"
              />
            </div>

            <div>
              <label>Address </label>
              <input
                type="text"
                {...register("address")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="mogadishu..."
              />
            </div>
            <div>
              <label>Description</label>
              <input
                type="text"
                {...register("description")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="something..."
              />
            </div>
            <div>
              <label>Agency</label>
              <input
                type="number"
                {...register("agency")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="web..."
              />
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
