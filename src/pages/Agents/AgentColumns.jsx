import React, {  useState } from "react";
import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import { EditAgent } from "../../components/Models/AgentForms/EditAgent";
import { DeleteAgent } from "../../components/Models/AgentForms/DeleteAgent";
// import { Context } from "../../Context/Context";

// export const columns = [
//   {
//     header: "No",
//     accessorKey: "id",
//   },
//   {
//     header: "Name",
//     accessorKey: "fullname",
//   },
//   {
//     header: "Description",
//     accessorKey: "description",
//   },
//   {
//     header: "Business",
//     accessorKey: "business",
//   },
//   {
//     header: "Contact",
//     accessorKey: "phone",
//   },
//   {
//     header: "Actions",
//     accessorKey: "actions",
//     cell: ({ row }) => {
//       const [showEditAgent, setShowEditAgent] = useState(false);
//       const [showDeleteAgent, setShowDeleteAgent] = useState(false);
//       // const [id, setId] = useState(null);
//       // console.log(row);
//       const rowID = row.id;
//       // console.log(rowID);

//       // console.log(row.id);
//       // const { id, setId } = useContext(Context);
//       const { setId } = useContext(Context);

//       // function handleSetId() {
//       //   setId(row.id);
//       // }
//       // url renders null in id  https://spiky-crater-dep2vxlep8.ploi.online/api/v1/agents/null/edit

//       return (
//         <div className="flex space-x-4 hover:text-black justify-center ">
//           <button
//             onClick={() => {
//               // handleSetId();
//               setId(row.id);
//               setShowEditAgent(true);
//             }}
//             className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             <RiEditLine />
//           </button>
//           <button
//             onClick={() => {
//               setId(row.id);
//               setShowDeleteAgent(true);
//             }}
//             className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             <RiDeleteBin2Line />
//           </button>

//           {showEditAgent && (
//             <div className="absolute top-0 left-0 bottom-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//               <EditAgent onClose={() => setShowEditAgent(false)} id={rowID} />
//             </div>
//           )}
//           {showDeleteAgent && (
//             <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//               <DeleteAgent onClose={() => setShowDeleteAgent(false)} />
//             </div>
//           )}
//         </div>
//       );
//     },
//   },
// ];



export const columns = [
  { field: "id", headerName: "No", flex: 1,  },
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
      const [id, setId] = useState(null)


      return (
        <div className="flex space-x-4 hover:text-black justify-center">
          <button
            onClick={() => {
              setId(row.id)
               setShowEditAgent(true);
            }}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiEditLine />
          </button>
          <button
            onClick={() => {
              setId(row.id)
              setShowDeleteAgent(true) 
              alert("deleted successfuly");
            }}
            className="text-md p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            <RiDeleteBin2Line />
          </button>

          {showEditAgent && (
            <div className="absolute top-0 left-0 bottom-0 w-full h-full flex items-center justify-center bg-black bg-opacity-20">
              <EditAgent
                onClose={() => setShowEditAgent(false)}
               id={id}
              />
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
