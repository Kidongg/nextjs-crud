"use client";

import useModal from "@/app/hooks/useModal";
import { ColumnDef, Row } from "@tanstack/react-table";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

// 결제 정보 수정 컴포넌트
export const PaymentEditIcon = ({ row }: { row: Row<Payment> }) => {
  const { setIsEditPaymentsModal } = useModal();

  return (
    <MdEditSquare
      className="cursor-pointer"
      onClick={() => setIsEditPaymentsModal(true)}
    />
  );
};

// 결제 정보 삭제 컴포넌트
export const PaymentDeleteIcon = ({ row }: { row: Row<Payment> }) => {
  const { setIsDeletePaymentsModal } = useModal();

  return (
    <MdDelete
      className="cursor-pointer"
      onClick={() => setIsDeletePaymentsModal(true)}
    />
  );
};

// 결제 정보 컬럼
export const paymentColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "결제명",
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
    accessorKey: "status",
    header: "상태",
  },
  {
    id: "edit",
    header: "수정",
    cell: PaymentEditIcon,
  },
  {
    id: "delete",
    cell: PaymentDeleteIcon,
  },
];
