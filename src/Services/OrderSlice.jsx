import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../api/axiosConfig";

const initialState = {
  orders: [],
  loading: true,
};

export const fetchOrder = createAsyncThunk(
  "orders/fetchOrder",
  async (page) => {
    const res = await axios.get(`/api/v1/orders?page=${page}`);

    return res.data.data;
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      });
  },
});

export default orderSlice.reducer;
