import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { IoCloseOutline } from "react-icons/io5";

export const AddOrder = ({ onClose }) => {
  const schema = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
    business: yup.string().email().required(),
    contact: yup.number().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex bg-slate-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col ml-56 mr-80 mb-12 mt-28 gap-1 bg-white shadow-slate-300 shadow-sm w-[38rem] h-[54rem] rounded-xl p-3"
      >
        <div className="pb-16 ml-5 mt-8">
          <div className="flex">
            <h2 className="text-3xl ml-40">Add New Order</h2>
            <button
              onClick={onClose}
              className=" h-8 w-8 p-1 bg-blue-500 text-white text-2xl font-medium rounded-md hover:bg-blue-600 ml-36"
            >
              <IoCloseOutline />
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <label>ID</label>
              <input
                type="text"
                {...register("id")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="1"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Product</label>
              <input
                type="text"
                {...register("product")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="speaker"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Customer</label>
              <input
                type="text"
                {...register("customer")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="james"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Agent </label>
              <input
                type="text"
                {...register("agent")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="web..."
              />
            </div>
            <div>
              <label>Amount </label>
              <input
                type="number"
                {...register("amount")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="$12"
              />
            </div>
            <div>
              <label>Description</label>
              <input
                type="text"
                {...register("description")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="something"
              />
            </div>
            <div>
              <label>status</label>
              <input
                type="text"
                {...register("phone")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="active"
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
