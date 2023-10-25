import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { hope } from "../assets/img";

export const SignUp = () => {
  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().required(),
    password: yup.string().min(4).max(15).required(),
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
    // age: yup.number().positive().integer().min(18).required(),
    //address: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex bg-slate-100">
      <img src={hope} alt="" className="h-screen" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col ml-56 mr-80 mb-12 mt-28 gap-1 bg-white shadow-slate-300 shadow-sm w-[600px] h-[760px] rounded-xl p-3"
      >
        <div className="pb-16 ml-5 mt-8">
          <h2 className="text-3xl ml-40">Sign Up</h2>
          <h2 className="text-lg ml-28 mt-2">Create Your Hope UI Account</h2>
          <div className="flex mt-4 gap-5">
            <div className="flex flex-col gap-1">
              <label>First Name </label>
              <input
                type="text"
                {...register("firstname")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-60"
                placeholder="john"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>lastName</label>
              <input
                type="text"
                {...register("lastname")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-60"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex mt-4 gap-5">
            <div className="flex flex-col gap-1">
              <label>Email </label>
              <input
                type="text"
                {...register("Email")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-60"
                placeholder="xyz@example.com"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Phone </label>
              <input
                type="number"
                {...register("phone")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-60"
                placeholder="123456789"
              />
            </div>
          </div>

          <div className="flex mt-4 gap-5">
            <div className="flex flex-col gap-1">
              <label>Password</label>
              <input
                type="password"
                {...register("password")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-60"
                placeholder="xxxxxx"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Confirm password</label>
              <input
                type="password"
                {...register("ConfirmPassword")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-60"
                placeholder="xxxxxx"
              />
            </div>
          </div>

          <div className="flex mt-6 gap-4 justify-center ">
            <input type="checkbox" />
            <p>I agree With The Terms Of Use</p>
          </div>
          <button
            type="submit"
            className="p-1 mr-1 rounded-lg w-28 h-12 ml-48 mt-10 bg-blue-700 text-white text-xl "
          >
            Sign Up
          </button>
        </div>

        <div className="flex flex-col">
          <h2 className="relative bottom-10 text-center">
            or Sign Up with other Account?
          </h2>

          <div className="flex justify-center gap-3 mt-[-17px] ">
            <FcGoogle className="text-xl" />
            <FaFacebook className="text-xl text-blue-700" />
            <FaInstagramSquare className="text-xl text-[]" />
            <AiFillLinkedin className="text-xl text-blue-700" />
          </div>

          <h2 className="text-center mt-3">
            Already have an account
            <span className="text-blue-600 ml-1">Sign Up</span>
          </h2>
        </div>
      </form>
    </div>
  );
};
