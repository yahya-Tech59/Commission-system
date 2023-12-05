import { configureStore } from "@reduxjs/toolkit";

import agentReducer from "./AgentSlice";
import customerReducer from "./CustomerSlice";
import orderReducer from "./orderSlice";

const store = configureStore({
  reducer: {
    agents: agentReducer,
    customers: customerReducer,
    orders: orderReducer,
    // products: productReducer,
    // users: userReducer,
  },
});

export default store;
