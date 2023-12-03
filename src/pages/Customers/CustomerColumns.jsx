import React, { useState } from "react";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { EditCustomer } from "../../Models/CustomerForms/EditCustomer";
import { DeleteCustomer } from "../../Models/CustomerForms/DeleteCustomer";

export const columns = [
  { field: "id", headerName: "No", flex: 1 },
  { field: "fullname", headerName: "Name", flex: 1 },
  { field: "phone", headerName: "Contact", flex: 1 },
  { field: "address", headerName: "Address", flex: 1 },
  { field: "description", headerName: "Description", flex: 1 },
  {
    field: "agency",
    headerName: "Agency",
    flex: 1,
    renderCell: ({ row }) => {
      return <>{row.agency?.fullname}</>;
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    renderCell: ({ row }) => {
      const [showEditCustomer, setShowEditCustomer] = useState(false);
      const [showDeleteCustomer, setShowDeleteCustomer] = useState(false);
      const [id, setId] = useState(null);

      return (
        <div className="flex space-x-4 hover:text-black ">
          <button
            onClick={() => {
              setId(row.id);
              setShowEditCustomer(true);
            }}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiEditLine />
          </button>
          <button
            onClick={() => {
              setId(row.id);
              setShowDeleteCustomer(true);
            }}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiDeleteBin2Line />
          </button>

          {showEditCustomer && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <EditCustomer
                onClose={() => setShowEditCustomer(false)}
                id={id}
              />
            </div>
          )}
          {showDeleteCustomer && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <DeleteCustomer
                onClose={() => setShowDeleteCustomer(false)}
                id={id}
              />
            </div>
          )}
        </div>
      );
    },
  },
];
