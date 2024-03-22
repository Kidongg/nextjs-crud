"use client";

import { ColumnDef } from "@tanstack/react-table";

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
];
