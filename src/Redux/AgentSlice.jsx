import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  agents: [],
  loading: true,
};

const agentsSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {
    setAgents: (state, action) => {
      state.agents = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setAgents, setLoading } = agentsSlice.actions;

export const fetchAgent = async (page) => {
  try {
    dispatch(setLoading(true));
    const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";
    const token = localStorage.getItem("token");

    const res = await axios.get(`${baseUrl}/api/v1/agents?page=${page}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 200) {
      const response = await res.data;
      dispatch(setAgents(response.data));
      dispatch(setLoading(false));
    }
  } catch (err) {
    console.log(err);
  }
};

export default agentsSlice.reducer;
