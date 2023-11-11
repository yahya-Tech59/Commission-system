import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState([]);

  const navigate = useNavigate();

  const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";
  const FetchLogin = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${baseUrl}/api/auth/login`);

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
        // alert("logged in Successfuly");
        setLogin(res.data);
        setLoading(false);
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.log("Login failed");
    }
  };

  useEffect(() => {
    FetchLogin();
  });

  if (loading === true) {
    return <h1 className="text-3xl font-semibold ml-[53rem]">Loading...</h1>;
  }
  return { login };
};
