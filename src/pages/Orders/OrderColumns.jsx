import React, { useState } from "react";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { EditOrder } from "../../components/FormEvents/OrderForms/EditOrder";
import { DeleteOrder } from "../../components/FormEvents/OrderForms/DeleteOrder";

export const columns = [
  {
    header: "No",
    accessorKey: "id",
  },
  {
    header: "Description",
    accessorKey: "description",
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    header: "Product",
    accessorKey: "product_id",
  },
  {
    header: "Product-Pride-ID",
    accessorKey: "product_price_id",
  },
  {
    header: "Customer",
    accessorKey: "customer",
  },
  {
    header: "Agent",
    accessorKey: "Agent",
  },
  {
    header: "Amount",
    accessorKey: "Amount",
  },
  {
    header: "Actions",
    accessorKey: "actions",
    cell: ({ row }) => {
      const [showEditOrder, setShowEditOrder] = useState(false);
      const [showDeleteOrder, setShowDeleteOrder] = useState(false);

      return (
        <div className="flex space-x-4 hover:text-black ">
          <button
            onClick={() => setShowEditOrder(true)}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiEditLine />
          </button>
          <button
            onClick={() => setShowDeleteOrder(true)}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiDeleteBin2Line />
          </button>

          {showEditOrder && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <EditOrder onClose={() => setShowEditOrder(false)} />
            </div>
          )}
          {showDeleteOrder && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <DeleteOrder onClose={() => setShowDeleteOrder(false)} />
            </div>
          )}
        </div>
      );
    },
  },
];
