import React, { useState } from "react";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { EditCustomer } from "../../components/Models/CustomerForms/EditCustomer";
import { DeleteCustomer } from "../../components/Models/CustomerForms/DeleteCustomer";

export const columns = [
  {
    header: "No",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "fullname",
  },
  {
    header: "Contact",
    accessorKey: "phone",
  },
  {
    header: "Address",
    accessorKey: "address",
  },
  {
    header: "Description",
    accessorKey: "description",
  },
  {
    header: "Agency",
    accessorKey: "agency",
  },
  {
    header: "Actions",
    accessorKey: "actions",
    cell: ({ row }) => {
      const [showEditCustomer, setShowEditCustomer] = useState(false);
      const [showDeleteCustomer, setShowDeleteCustomer] = useState(false);

      return (
        <div className="flex space-x-4 hover:text-black ">
          <button
            onClick={() => setShowEditCustomer(true)}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiEditLine />
          </button>
          <button
            onClick={() => setShowDeleteCustomer(true)}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiDeleteBin2Line />
          </button>

          {showEditCustomer && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <EditCustomer onClose={() => setShowEditCustomer(false)} />
            </div>
          )}
          {showDeleteCustomer && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <DeleteCustomer onClose={() => setShowDeleteCustomer(false)} />
            </div>
          )}
        </div>
      );
    },
  },
];
