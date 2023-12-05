import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  agents: [],
  loading: true,
};

export const fetchAgent = createAsyncThunk(
  "agents/fetchAgent",
  async (page) => {
    const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";
    const token = localStorage.getItem("token");

    const res = await axios.get(`${baseUrl}/api/v1/agents?page=${page}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

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

// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   agents: [],
//   loading: true,
// };

// const agentSlice = createSlice({
//   name: "agents",
//   initialState,
//   reducers: {
//     setAgents: (state, action) => {
//       state.agents = action.payload;
//     },
//     setLoading: (state, action) => {
//       state.loading = action.payload;
//     },
//   },
// });

// export const { setAgents, setLoading } = agentSlice.actions;

// export const fetchAgent = async (page, dispatch) => {
//   const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";
//   const token = localStorage.getItem("token");

//   try {
//     dispatch(setLoading(true));
//     const res = await axios.get(`${baseUrl}/api/v1/agents?page=${page}`, {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (res.status === 200) {
//       const response = await res.data;

//       dispatch(setAgents(response.data));
//       dispatch(setLoading(false));
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default agentSlice.reducer;
