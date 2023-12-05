import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./Context/Context.jsx";
import { AgentsProvider } from "./Context/AgentContext.jsx";
import { CustomersProvider } from "./Context/CustomerContext.jsx";
import { ProductsProvider } from "./Context/ProductContext.jsx";
import { OrdersProvider } from "./Context/OrderContext.jsx";
import { UsersProvider } from "./Context/UserContext.jsx";
// import { Provider } from "react-redux";
// import store from "./Redux/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <AgentsProvider>
        <CustomersProvider>
          <ProductsProvider>
            <OrdersProvider>
              <UsersProvider>
                {/* <Provider store={store}> */}
                <App />
                {/* </Provider> */}
              </UsersProvider>
            </OrdersProvider>
          </ProductsProvider>
        </CustomersProvider>
      </AgentsProvider>
    </ContextProvider>
  </React.StrictMode>
);
