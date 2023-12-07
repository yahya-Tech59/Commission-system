import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../api/axiosConfig";

const initialState = {
  users: [],
  loading: true,
};

export const fetchUser = createAsyncThunk("users/fetchUser", async (page) => {
  const res = await axios.get(`/api/v1/users?page=${page}`);

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
