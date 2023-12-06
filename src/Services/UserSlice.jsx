import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: true,
};

export const fetchUser = createAsyncThunk("users/fetchUser", async (page) => {
  const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";
  const token = localStorage.getItem("token");

  const res = await axios.get(`${baseUrl}/api/v1/users?page=${page}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data.data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
  },
});

export default userSlice.reducer;
