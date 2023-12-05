import React, { useState } from "react";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { EditUser } from "../../Models/UserForms/EditUser";
import { DeleteUser } from "../../Models/UserForms/DeleteUser";

export const columns = [
  { field: "id", headerName: "Id", flex: 1 },
  { field: "name", headerName: "UserName", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    renderCell: ({ row }) => {
      const [showEditUser, setShowEditUser] = useState(false);
      const [showDeleteUser, setShowDeleteUser] = useState(false);

      return (
        <div className="flex space-x-4 hover:text-black ">
          <button
            onClick={() => setShowEditUser(true)}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiEditLine />
          </button>
          <button
            onClick={() => setShowDeleteUser(true)}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiDeleteBin2Line />
          </button>

          {showEditUser && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <EditUser onClose={() => setShowEditUser(false)} />
            </div>
          )}
          {showDeleteUser && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <DeleteUser onClose={() => setShowDeleteUser(false)} />
            </div>
          )}
        </div>
      );
    },
  },
];
