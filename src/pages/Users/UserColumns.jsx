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
      const [id, setId] = useState(null);

      return (
        <div className="flex space-x-4 hover:text-black ">
          <button
            onClick={() => {
              setShowEditUser(true);
              setId(row.id);
            }}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiEditLine />
          </button>
          <button
            onClick={() => {
              setShowDeleteUser(true);
              setId(row.id);
              alert("User Deleted Succesfully");
            }}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiDeleteBin2Line />
          </button>

          {showEditUser && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <EditUser onClose={() => setShowEditUser(false)} id={id} />
            </div>
          )}
          {showDeleteUser && (
            <div>
              <DeleteUser onClose={() => setShowDeleteUser(false)} id={id} />
            </div>
          )}
        </div>
      );
    },
  },
];
