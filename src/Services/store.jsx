import { configureStore } from "@reduxjs/toolkit";

import agentReducer from "./AgentSlice";
import customerReducer from "./CustomerSlice";
import orderReducer from "./OrderSlice";
import productReducer from "./ProductSlice";
import userReducer from "./UserSlice";

const store = configureStore({
  reducer: {
    agents: agentReducer,
    customers: customerReducer,
    orders: orderReducer,
    products: productReducer,
    users: userReducer,
  },
});

export default store;
