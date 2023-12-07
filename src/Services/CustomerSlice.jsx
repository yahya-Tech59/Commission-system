import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../api/axiosConfig";

const initialState = {
  customers: [],
  loading: true,
};

export const fetchCustomer = createAsyncThunk(
  "customers/fetchCustomer",
  async (page) => {
    const res = await axios.get(`/api/v1/customers?page=${page}`);

    return res.data.data;
  }
);

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomer.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = action.payload;
      });
  },
});

export default customersSlice.reducer;
