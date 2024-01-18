import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axiosConfig";

const initialState = {
  agents: [],
  loading: true,
};

export const fetchAgent = createAsyncThunk(
  "agents/fetchAgent",
  async (page) => {
    const res = await axios.get(`/api/v1/agents?page=${page}`, {});

    return res.data.data;
  }
);

const agentSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAgent.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAgent.fulfilled, (state, action) => {
        state.loading = false;
        state.agents = action.payload;
      });
  },
});

export default agentSlice.reducer;
