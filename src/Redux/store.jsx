import { configureStore } from "@reduxjs/toolkit";

import agentReducer from "./AgentSlice";
// import customersSlice from "./customersSlice";
// import ordersSlice from "./ordersSlice";
// import productsSlice from "./productsSlice";
// import usersSlice from "./usersSlice";

const store = configureStore({
  reducer: {
    agents: agentReducer,
    // customers: customersSlice.reducer,
    // orders: ordersSlice.reducer,
    // products: productsSlice.reducer,
    // users: usersSlice.reducer,
  },
});

export default store;
