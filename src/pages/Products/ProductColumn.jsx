import React, { useState } from "react";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { EditProduct } from "../../Models/ProductForms/EditProduct";
import { DeleteProduct } from "../../Models/ProductForms/DeleteProduct";

export const columns = [
  {
    header: "No",
    accessorKey: "id",
  },
  {
    header: "Prod_Name",
    accessorKey: "name",
  },
  {
    header: "Price",
    accessorKey: "price",
  },
  {
    header: "Commission",
    accessorKey: "commission",
  },
  {
    header: "Actions",
    accessorKey: "actions",
    cell: ({ row }) => {
      const [showEditProduct, setShowEditProduct] = useState(false);
      const [showDeleteProduct, setShowDeleteProduct] = useState(false);

      return (
        <div className="flex space-x-4 hover:text-black ">
          <button
            onClick={() => setShowEditProduct(true)}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiEditLine />
          </button>
          <button
            onClick={() => setShowDeleteProduct(true)}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiDeleteBin2Line />
          </button>

          {showEditProduct && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <EditProduct onClose={() => setShowEditProduct(false)} />
            </div>
          )}
          {showDeleteProduct && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <DeleteProduct onClose={() => setShowDeleteProduct(false)} />
            </div>
          )}
        </div>
      );
    },
  },
];
