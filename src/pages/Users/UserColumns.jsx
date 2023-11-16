import { IoMdAddCircle } from "react-icons/io";

export const columns = [
  {
    header: "Id",
    accessorKey: "id",
  },
  {
    header: "UserName",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  // {
  //   header: "Action",
  //   cell: (row) => {
  //     return (
  //       <button
  //         // onClick={a function based on the cell value}
  //       >
  //         {row.getValue() as ReactNode}
  //       </button>
  //     );
  //   },
  //   accessorKey: "actions",
  // },
];
