import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  loading: true,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setOrders, setLoading } = orderSlice.actions;

export const fetchOrder = async (page) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.get(`${baseUrl}/api/v1/orders?page=${page}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 200) {
      const response = await res.data;
      console.log(response);

      dispatch(setOrders(response.data));

      dispatch(setLoading(false));
    }
  } catch (err) {
    console.log(err);
  }
};

export default orderSlice.reducer;
