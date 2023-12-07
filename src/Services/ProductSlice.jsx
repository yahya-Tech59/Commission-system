import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../api/axiosConfig";

const initialState = {
  products: [],
  loading: true,
};

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (page) => {
    const res = await axios.get(`/api/v1/products?page=${page}`);

    return res.data.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      });
  },
});

export default productSlice.reducer;
