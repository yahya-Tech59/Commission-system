import React, { useState } from "react";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { EditOrder } from "../../Models/OrderForms/EditOrder";
import { DeleteOrder } from "../../Models/OrderForms/DeleteOrder";

export const columns = [
  { field: "id", headerName: "No", flex: 1 },
  { field: "description", headerName: "Description", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
  {
    field: "product_id",
    headerName: "Product",
    flex: 1,
    renderCell: ({ row }) => <>{row.product?.name}</>,
  },
  {
    field: "product_price_id",
    headerName: "Product-Price",
    flex: 1,
    renderCell: ({ row }) => <>{row.product?.price}</>,
  },
  {
    field: "product_commission",
    headerName: "Product-Commission",
    flex: 1,
    renderCell: ({ row }) => <>{row.product?.price}</>,
  },
  {
    field: "customer",
    headerName: "Customer",
    flex: 1,
    renderCell: ({ row }) => {
      const customer =
        row.customer && row.customer.length > 0 ? row.customer[0] : null;
      return <>{customer ? customer.fullname : ""}</>;
    },
  },
  {
    field: "agent",
    headerName: "Agent",
    flex: 1,
    renderCell: ({ row }) => {
      const agent = row.agent && row.agent.length > 0 ? row.agent[0] : null;
      return <>{agent ? agent.fullname : ""}</>;
    },
  },
  { field: "status_label", headerName: "Status-Label", flex: 1 },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    renderCell: ({ row }) => {
      const [showEditOrder, setShowEditOrder] = useState(false);
      const [showDeleteOrder, setShowDeleteOrder] = useState(false);
      const [id, setId] = useState(null);

      return (
        <div className="flex space-x-4 hover:text-black ">
          <button
            onClick={() => {
              setShowEditOrder(true);
              setId(row.id);
            }}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiEditLine />
          </button>
          <button
            onClick={() => {
              setShowDeleteOrder(true);
              setId(row.id);
              alert("Order Deleted Successfully ");
            }}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiDeleteBin2Line />
          </button>

          {showEditOrder && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <EditOrder onClose={() => setShowEditOrder(false)} id={id} />
            </div>
          )}
          {showDeleteOrder && (
            <div>
              <DeleteOrder onClose={() => setShowDeleteOrder(false)} id={id} />
            </div>
          )}
        </div>
      );
    },
  },
];
