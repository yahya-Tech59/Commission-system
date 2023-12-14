import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "../../api/axiosConfig";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export const EditOrder = ({ onClose, id }) => {
  const [product_id, setProduct_id] = useState("");
  const [customer, setCustomer] = useState("");
  const [agent, setAgent] = useState("");
  const [product_price_id, setProduct_price_id] = useState("");
  const [product_commission_id, setProduct_commission_id] = useState("");
  const [status, setStatus] = useState("");
  const [products, setProducts] = useState([]);
  const [agents, setAgents] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClear = () => {
    setProduct_id("");
    setCustomer("");
    setAgent("");
    setProduct_price_id("");
    setProduct_commission_id("");
    setStatus("");
  };

  const schema = yup.object().shape({
    product_id: yup.number().required(),
    customer: yup.number().required(),
    agent: yup.number().required(),
    product_price_id: yup.number().required(),
    product_commission_id: yup.number().required(),
    status: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`/api/v1/products`);

      if (res.status === 200) {
        const productsData = await res.data;
        setProducts(productsData.data);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCustomers = async () => {
      const res = await axios.get(`/api/v1/customers`);

      if (res.status === 200) {
        const customersData = await res.data;
        setCustomers(customersData.data);
      }
    };

    fetchCustomers();
  }, []);

  useEffect(() => {
    const fetchAgents = async () => {
      const res = await axios.get(`/api/v1/agents`);

      if (res.status === 200) {
        const agentsData = await res.data;
        setAgents(agentsData.data);
      }
    };

    fetchAgents();
  }, []);

  useEffect(() => {
    const fetchOrderStatus = async () => {
      const res = await axios.get(`/api/v1/orders`);

      if (res.status === 200) {
        const OrderStatusData = await res.data;
        setOrders(OrderStatusData.data);
      }
    };

    fetchOrderStatus();
  }, []);

  const fetchOrder = async () => {
    const res = await axios.get(`api/v1/orders/${id}/edit`);

    if (res.status === 200) {
      const OrderData = res.data[0];
      setProduct_id(OrderData?.product_id || "");
      setCustomer(OrderData?.customer || "");
      setAgent(OrderData?.agent || "");
      setProduct_price_id(OrderData?.product_price_id || "");
      setProduct_commission_id(OrderData?.product_commission_id || "");
      setStatus(OrderData?.status || "");

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const EditOrder = async (data) => {
    try {
      setProduct_id(data.product_id);
      setCustomer(data.customer);
      setAgent(data.agent);
      setProduct_price_id(data.product_price_id);
      setProduct_commission_id(data.product_commission_id);
      setStatus(data.status);

      setLoading(true);
      const res = await axios.put(`/api/v1/orders${id}`, {
        product_id,
        customer,
        agent,
        product_price_id,
        product_commission_id,
        status,
      });

      if (res.status === 200) {
        alert("Order Updated Successfully");
        onClose();
        setLoading(false);
      }
    } catch (error) {
      // Handle error appropriately
      console.error("Error adding order:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-slate-100">
      <form
        onSubmit={handleSubmit(EditOrder)}
        className="flex flex-col gap-1 bg-white shadow-slate-300 shadow-sm w-[38rem] h-[46rem] rounded-xl p-3"
      >
        <div className="pb-16 ml-5 mt-8">
          <div className="flex">
            <h2 className="text-3xl ml-40">Edit Order</h2>
            <button
              onClick={onClose}
              className=" h-8 w-8 p-1 bg-blue-500 text-white text-2xl font-medium rounded-md hover:bg-blue-600 ml-36"
            >
              <IoCloseOutline />
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <label>ProductID</label>
              <select
                {...register("product_id")}
                defaultValue={product_id}
                onChange={(e) => setProduct_id(e.target.value)}
                placeholder="select product ID"
                className="placeholder:text-slate-700 p-3 mr-1 rounded-lg w-[34rem]"
              >
                <option value="" disabled>
                  Select Product
                </option>
                {products.map((product) => (
                  <option
                    key={product.id}
                    value={product.id}
                    className="text-slate-700"
                  >
                    {product.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label>Customer</label>
              <select
                {...register("customer")}
                defaultValue={customer}
                onChange={(e) => setCustomer(e.target.value)}
                className="placeholder:text-slate-700 p-3 mr-1 rounded-lg w-[34rem]"
              >
                <option value="" disabled>
                  Select Customer
                </option>
                {customers.map((cust) => (
                  <option
                    key={cust.id}
                    value={cust.id}
                    className="text-slate-700"
                  >
                    {cust.fullname}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Agent </label>
              <select
                {...register("agent")}
                defaultValue={agent}
                onChange={(e) => setAgent(e.target.value)}
                className="placeholder:text-slate-700 p-3 mr-1 rounded-lg w-[34rem]"
              >
                <option value="" disabled>
                  Select an agent
                </option>
                {agents.map((agent) => (
                  <option
                    key={agent.id}
                    value={agent.id}
                    className="text-slate-700"
                  >
                    {agent.fullname}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Product Price</label>
              <select
                {...register("product_price_id")}
                defaultValue={product_price_id}
                onChange={(e) => setProduct_price_id(e.target.value)}
                className="placeholder:text-slate-400 p-3 mr-1 rounded-lg w-[34rem]"
              >
                <option value="" disabled>
                  Select Product Price
                </option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.price}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Product Commission</label>
              <select
                {...register("product_commission_id")}
                defaultValue={product_commission_id}
                onChange={(e) => setProduct_commission_id(e.target.value)}
                className="placeholder:text-slate-700 p-3 mr-1 rounded-lg w-[34rem]"
              >
                <option value="" disabled>
                  Select Product Commission
                </option>
                {products.map((product) => (
                  <option
                    key={product.id}
                    value={product.id}
                    className="text-slate-700"
                  >
                    {product.commission}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>status</label>
              <select
                {...register("status")}
                defaultValue={status}
                onChange={(e) => setStatus(e.target.value)}
                className="placeholder:text-slate-700 p-3 mr-1 rounded-lg w-[34rem]"
              >
                <option value="" disabled>
                  Select Order Status
                </option>
                {orders.map((order) => (
                  <option
                    key={order.id}
                    value={order.id}
                    className="text-slate-700"
                  >
                    {order.status_label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* <div className="flex mt-6 gap-4 justify-center ">
            <input type="checkbox" />
            <p>I agree With The Terms Of Use</p>
          </div> */}
          <div className="flex gap-72 ml-5 ">
            <button
              type="submit"
              className="p-1 mr-1 rounded-lg w-28 h-12 mt-10 bg-blue-600 text-white text-xl "
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="p-1 mr-1 rounded-lg w-28 h-12 mt-10 bg-red-600 text-white text-xl "
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
