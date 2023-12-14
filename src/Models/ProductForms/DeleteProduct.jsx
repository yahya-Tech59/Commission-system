import React, { useEffect, useState } from "react";
import axios from "../../api/axiosConfig";

export const DeleteProduct = ({ id, onClose }) => {
  const [loading, setLoading] = useState(false);

  const deleteProduct = async () => {
    try {
      setLoading(true);
      const res = await axios.delete(`/api/v1/products/${id}`);

      if (res.status === 204) {
        setLoading(false);
        onClose();
      }
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    deleteProduct();
  }, [id]);
  //   return (
  //     <div className="flex items-center justify-center h-full">
  //       {loading ? (
  //         <p className="text-xl font-semibold">Deleting...</p>
  //       ) : (
  //         <p className="text-xl font-semibold">Deletion completed.</p>
  //       )}
  //     </div>
  //   );
};
