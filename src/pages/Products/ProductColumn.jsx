import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { AddAgent } from "../../components/FormEvents/AgentForms/AddAgent";
import { EditAgent } from "../../components/FormEvents/AgentForms/EdigAgent";
import { DeleteAgent } from "../../components/FormEvents/AgentForms/DeleteAgent";

export const columns = [
  {
    header: "No",
    accessorKey: "id",
  },
  {
    header: "Prod_Name",
    accessorKey: "product_name",
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
      const [showAddAgent, setShowAddAgent] = useState(false);
      const [showEditAgent, setShowEditAgent] = useState(false);
      const [showDeleteAgent, setShowDeleteAgent] = useState(false);

      return (
        <div className="flex space-x-4 hover:text-black ">
          <button
            onClick={() => setShowAddAgent(true)}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <IoMdAdd />
          </button>
          <button
            onClick={() => setShowEditAgent(true)}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiEditLine />
          </button>
          <button
            onClick={() => setShowDeleteAgent(true)}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiDeleteBin2Line />
          </button>

          {showAddAgent && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <AddAgent onClose={() => setShowAddAgent(false)} />
            </div>
          )}
          {showEditAgent && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <EditAgent onClose={() => setShowEditAgent(false)} />
            </div>
          )}
          {showDeleteAgent && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <DeleteAgent onClose={() => setShowDeleteAgent(false)} />
            </div>
          )}
        </div>
      );
    },
  },
];
