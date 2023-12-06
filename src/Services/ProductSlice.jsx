import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: true,
};

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (page) => {
    const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";
    const token = localStorage.getItem("token");

    const res = await axios.get(`${baseUrl}/api/v1/products?page=${page}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

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
