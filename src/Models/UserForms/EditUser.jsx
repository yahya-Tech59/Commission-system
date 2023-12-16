import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "../../api/axiosConfig";
import { IoCloseOutline } from "react-icons/io5";

export const EditUser = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("");
  const [role, setRole] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    roles: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchRoles = async () => {
      const res = await axios.get(`/api/v1/roles`);

      if (res.status === 200) {
        const roleData = await res.data;
        setRole(roleData.data);
      }
    };

    fetchRoles();
  }, []);

  const addUser = async (data) => {
    setLoading(true);
    const res = await axios.post("/api/v1/users", data);

    if (res.status === 200) {
      alert("User Registered successfully");
      setUsers(res.data);
      onClose();
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-slate-100">
      <form
        onSubmit={handleSubmit(addUser)}
        className="flex flex-col gap-1 bg-white shadow-slate-300 shadow-sm w-[38rem] h-[36rem] rounded-xl p-3"
      >
        <div className="pb-16 ml-5 mt-8">
          <div className="flex">
            <h2 className="text-3xl ml-40">Edit User</h2>
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
                {...register("name")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="john"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Email</label>
              <input
                type="text"
                {...register("email")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="$xyz@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Password</label>
              <input
                type="password"
                {...register("password")}
                className=" bg-[#F9F9F9] placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <select
                {...register("roles")}
                defaultValue={roles}
                onChange={(e) => setRoles(e.target.value)}
                className="placeholder:text-slate-700 p-3 mr-1 rounded-lg w-[34rem]"
              >
                <option value="" disabled>
                  Select Role
                </option>
                {role.map((rol) => (
                  <option
                    key={rol.id}
                    value={rol.id}
                    className="text-slate-700"
                  >
                    {rol.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

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
