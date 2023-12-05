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

//  {
//     "id": 5000,
//     "description": "Mohammad Larson",
//     "status": "2",
//     "created_at": "2023-09-11 19:58:39",
//     "updated_at": "2023-11-06 10:24:04",
//     "deleted_at": null,
//     "product_id": 739,
//     "product_price_id": 739,
//     "product_commission_id": 739,
//     "owner_id": null,
//     "status_label": "UnPaid",
//     "product": {
//       "id": 739,
//       "name": "Miss Berenice Deckow V",
//       "price": "8.00",
//       "commission": "6.00",
//       "created_at": "2023-11-06 10:23:10",
//       "updated_at": "2023-11-06 10:23:10",
//       "deleted_at": null
//     },
//     "customer": [
//       {
//         "id": 51,
//         "fullname": "Corrine Konopelski",
//         "phone": "(216) 518-7830",
//         "address": "7866 Bridgette Forks\nAlleneberg, WY 29958",
//         "description": "Dolorem nemo modi sint ut.",
//         "created_at": "2023-11-06 10:23:07",
//         "updated_at": "2023-11-06 10:23:07",
//         "deleted_at": null,
//         "agency_id": 136,
//         "owner_id": null,
//         "pivot": {
//           "order_id": 5000,
//           "customer_id": 51
//         }
//       }
//     ],
//   }
