import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { hope } from "../assets/img";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("email format is not valid")
      .required("email is required"),
    password: yup.string().min(4).max(15).required("password is required"),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(`${baseUrl}/api/auth/login`, data);

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
        // alert("logged in Successfuly");
        setLoading(false);
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.log("Login failed");
    }
  };

  if (loading === true) {
    return <h1 className="text-3xl font-semibold ml-[53rem]">Loading...</h1>;
  }

  return (
    <div className="flex bg-slate-100">
      <img src={hope} alt="" className="h-screen" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col ml-[16rem] mr-80 mb-12 mt-28 gap-1 bg-white shadow-slate-300 shadow-sm w-[65rem] h-[43rem] rounded-xl p-3"
      >
        <div className="pb-16 ml-5 mt-8">
          <h2 className="text-3xl ml-40">Sign In</h2>
          <h2 className="text-lg ml-28 mt-2">Sign In to stay Connected</h2>

          <div className="flex flex-col mt-4 gap-5">
            <div>
              <span className="flex flex-col gap-1">
                <label>Email </label>
                <input
                  type="text"
                  {...register("email")}
                  className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[30rem]"
                  placeholder="xyz@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>
              <p className="text-red-400 ml-2">{errors.email?.message}</p>
            </div>

            <div>
              <span className="flex flex-col gap-1">
                <label>Password</label>
                <input
                  type="password"
                  {...register("password")}
                  className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[30rem]"
                  placeholder="xxxxxx"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </span>
              <p className="text-red-400 ml-2">{errors.password?.message}</p>
            </div>
          </div>

          <div className="flex mt-6 gap-4 ">
            <input type="checkbox" />
            <p>I agree With The Terms Of Use</p>
            <a className="text-sky-600 ml-[5rem]">Forget Password</a>
          </div>
          <button
            type="submit"
            className="p-1 mr-1 rounded-lg w-28 h-12 ml-48 mt-10 bg-blue-700 text-white text-xl "
          >
            Sign In
          </button>
        </div>

        <div className="flex flex-col">
          <h2 className="relative bottom-10 text-center">
            or Sign In with other Account?
          </h2>

          <div className="flex justify-center gap-3 mt-[-17px] ">
            <FcGoogle className="text-xl" />
            <FaFacebook className="text-xl text-blue-700" />
            <FaInstagramSquare className="text-xl text-[]" />
            <AiFillLinkedin className="text-xl text-blue-700" />
          </div>

          <h2 className="text-center mt-3">
            Don't have an account?
            <Link className="text-blue-600 ml-1" to="/signUp">
              Click here to SignUp
            </Link>
          </h2>
        </div>
      </form>
    </div>
  );
};
