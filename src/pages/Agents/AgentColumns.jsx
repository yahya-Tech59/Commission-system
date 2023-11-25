import React, { useState } from "react";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { EditAgent } from "../../components/FormEvents/AgentForms/EdigAgent";
import { DeleteAgent } from "../../components/FormEvents/AgentForms/DeleteAgent";

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
    header: "Description",
    accessorKey: "description",
  },
  {
    header: "Business",
    accessorKey: "business",
  },
  {
    header: "Contact",
    accessorKey: "phone",
  },
  {
    header: "Actions",
    accessorKey: "actions",
    cell: ({ row }) => {
      const [showEditAgent, setShowEditAgent] = useState(false);
      const [showDeleteAgent, setShowDeleteAgent] = useState(false);
      const [id, setId] = useState([]);

      const handleEdit = () => {
        setId(row.id); // Set the id when the delete button is clicked
        setShowEditAgent(true);
      };

      const handleDelete = () => {
        setId(row.id); // Set the id when the edit button is clicked
        setShowDeleteAgent(true);
      };

      return (
        <div className="flex space-x-4 hover:text-black ">
          <button
            onClick={handleEdit}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiEditLine />
          </button>
          <button
            onClick={handleDelete}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiDeleteBin2Line />
          </button>

          {showEditAgent && (
            <div className="absolute top-0 left-0 bottom-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <EditAgent onClose={() => setShowEditAgent(false)} id={id} />
            </div>
          )}
          {showDeleteAgent && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <DeleteAgent onClose={() => setShowDeleteAgent(false)} id={id} />
            </div>
          )}
        </div>
      );
    },
  },
];
