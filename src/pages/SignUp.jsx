import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { hope } from "../assets/img";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import axios from "axios";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";

  const schema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "password must match")
      .required(),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const fetchRegister = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(`${baseUrl}/api/auth/register`, data);

      localStorage.setItem("token", res.data.token);

      if (res.status === 200) {
        alert("Resgistration successful");
      }
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  if (loading === false) {
    return <h1 className="text-3xl font-semibold ml-[53rem]">Loading...</h1>;
  }
  return (
    <div className="flex bg-slate-100">
      <img src={hope} alt="" className="h-screen" />
      <form
        onSubmit={handleSubmit(fetchRegister)}
        className="flex flex-col ml-56 mr-80 mb-12 mt-32 gap-1 bg-white shadow-slate-300 shadow-sm w-[60rem] h-[42rem] rounded-xl p-3"
      >
        <div className="pb-16 ml-5 mt-8">
          <h2 className="text-3xl ml-40">Sign Up</h2>
          <h2 className="text-lg ml-28 mt-2">Create Your Hope UI Account</h2>

          <div className="flex mt-4 gap-5">
            <div>
              <span className="flex flex-col gap-1">
                <label>Name </label>
                <input
                  type="text"
                  {...register("name")}
                  className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mb-1  mr-1 rounded-lg w-60"
                  placeholder="john"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </span>
              <p className="text-red-400 ml-2">{errors.name?.message}</p>
            </div>

            <div>
              <span className="flex flex-col gap-1">
                <label>Email </label>
                <input
                  type="text"
                  {...register("email")}
                  className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-60"
                  placeholder="xyz@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>
              <p className="text-red-400 ml-2">{errors.email?.message}</p>
            </div>
          </div>

          <div className="flex mt-4 gap-5">
            <div>
              <span className="flex flex-col gap-1">
                <label>Password</label>
                <input
                  type="password"
                  {...register("password")}
                  className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-60"
                  placeholder="xxxxxx"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </span>
              <p className="text-red-400 ml-2">{errors.password?.message}</p>
            </div>

            <div>
              <span className="flex flex-col gap-1">
                <label>Confirm password</label>
                <input
                  type="password"
                  {...register("ConfirmPassword")}
                  className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-60"
                  placeholder="xxxxxx"
                />
              </span>
              <p className="text-red-400 ml-2">
                {errors.ConfirmPassword?.message}
              </p>
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
            <Link className="text-blue-600 ml-1" to="/">
              Sign In
            </Link>
          </h2>
        </div>
      </form>
    </div>
  );
};
