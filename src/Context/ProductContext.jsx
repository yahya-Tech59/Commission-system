import { createContext, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = "https://spiky-crater-dep2vxlep8.ploi.online";
  const token = localStorage.getItem("token");

  const fetchProduct = async (page) => {
    try {
      setLoading(true);

      const res = await axios.get(`${baseUrl}/api/v1/products?page=${page}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        const response = await res.data;
        console.log(response);

        setProducts(response.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const values = {
    products,
    loading,
    fetchProduct,
  };

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};
