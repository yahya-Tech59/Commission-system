export const initialState = {
  sidebarOpen: true,
  loading: true,
  agents: [],
  customers: [],
  orders: [],
  products: [],
  users: [],
};

export const Action_Types = {
  SET_SIDEBAR_OPEN: "SET_SIDEBAR_OPEN",
  SET_LOADING: "SET_LOADING",
  SET_AGENTS: "SET_AGENTS",
  SET_CUSTOMERS: "SET_CUSTOMERS",
  SET_ORDERS: "SET_ORDERS",
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_USERS: "SET_USERS",
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case Action_Types.SET_SIDEBAR_OPEN:
      return { ...state, sidebarOpen: payload };
    case Action_Types.SET_LOADING:
      return { ...state, loading: payload };
    case Action_Types.SET_AGENTS:
      return { ...state, agents: payload };
    case Action_Types.SET_CUSTOMERS:
      return { ...state, customers: payload };
    case Action_Types.SET_ORDERS:
      return { ...state, orders: payload };
    case Action_Types.SET_PRODUCTS:
      return { ...state, products: payload };
    case Action_Types.SET_USERS:
      return { ...state, users: payload };

    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};
