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
    cell: ({ row }) => (
      <div className="space-x-4">
        <button onClick={<AddAgent />} className="text-xl">
          <IoMdAdd />
        </button>
        <button onClick={() => handleEdit(row.original)} className="text-xl">
          <RiEditLine />
        </button>
        <button
          onClick={() => handleDelete(row.original.id)}
          className="text-xl"
        >
          <RiDeleteBin2Line />
        </button>
      </div>
    ),
  },
];
