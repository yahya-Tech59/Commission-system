import React, { useState } from "react";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { EditAgent } from "../../Models/AgentForms/EditAgent";
import { DeleteAgent } from "../../Models/AgentForms/DeleteAgent";

export const columns = [
  { field: "id", headerName: "No", flex: 1 },
  { field: "fullname", headerName: "Name", flex: 1 },
  { field: "description", headerName: "Description", flex: 1 },
  { field: "business", headerName: "Business", flex: 1 },
  { field: "phone", headerName: "Contact", flex: 1 },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    sortable: false,
    renderCell: ({ row }) => {
      const [showEditAgent, setShowEditAgent] = useState(false);
      const [showDeleteAgent, setShowDeleteAgent] = useState(false);
      const [id, setId] = useState(null);

      // const handleDeleteAgent = (agentId) => {
      //   setAgents((prevAgents) =>
      //     prevAgents.filter((agent) => agent.id !== agentId)
      //   );
      //   setShowDeleteAgent(false);
      // };

      return (
        <div className="flex space-x-4 hover:text-black justify-center">
          <button
            onClick={() => {
              setId(row.id);
              setShowEditAgent(true);
            }}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiEditLine />
          </button>
          <button
            onClick={() => {
              setId(row.id);
              setShowDeleteAgent(true);
              alert("deleted successfuly");
            }}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiDeleteBin2Line />
          </button>

          {showEditAgent && (
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-20">
              <EditAgent onClose={() => setShowEditAgent(false)} id={id} />
            </div>
          )}
          {showDeleteAgent && (
            <div>
              <DeleteAgent onClose={() => setShowDeleteAgent(false)} id={id} />
            </div>
          )}
        </div>
      );
    },
  },
];

// please help to pop EditAgent modal over the whole table
