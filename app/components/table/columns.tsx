"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const paymentColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "상태",
  },
  {
    accessorKey: "amount",
    header: "금액",
  },
  {
    accessorKey: "email",
    header: "이메일",
  },
  {
    id: "edit",
    header: "수정",
    cell: ({ row }) => {
      return <MdEditSquare className="cursor-pointer" />;
    },
  },
  {
    id: "delete",
    cell: ({ row }) => {
      return <MdDelete className="cursor-pointer" />;
    },
  },
];
