import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  customers: [],
  loading: true,
};

export const fetchCustomer = createAsyncThunk(
  "customers/fetchCustomer",
  async (page) => {
    const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";
    const token = localStorage.getItem("token");

    const res = await axios.get(`${baseUrl}/api/v1/customers?page=${page}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

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

// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   customers: [],
//   loading: true,
// };

// const customersSlice = createSlice({
//   name: "customers",
//   initialState,
//   reducers: {
//     setCustomers: (state, action) => {
//       state.customers = action.payload;
//     },
//     setLoading: (state, action) => {
//       state.loading = action.payload;
//     },
//   },
// });

// export const { setCustomers, setLoading } = customersSlice.actions;

// export const fetchCustomer = async (page) => {
//   try {
//     dispatch(setLoading(true));
//     dispatch({ type: Action_Types.setLoading, payload: true });
//     const res = await axios.get(`${baseUrl}/api/v1/customers?page=${page}`, {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (res.status === 200) {
//       const response = await res.data;
//       console.log(response);
//       dispatch(setCustomers(response.data));
//       dispatch(setLoading(false));
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default customersSlice.reducer;
