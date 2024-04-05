"use client";

import useModal from "@/app/hooks/useModal";
import { TransactionType } from "@/app/types/transaction-type";
import { ColumnDef, Row } from "@tanstack/react-table";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";

// 결제 정보 수정 컴포넌트
export const PaymentEditIcon = ({ row }: { row: Row<Payment> }) => {
  const { setIsEditPaymentsModal, setEditPaymentId } = useModal();

  return (
    <MdEditSquare
      size={20}
      className="cursor-pointer"
      onClick={() => {
        setIsEditPaymentsModal(true);
        setEditPaymentId(row.original.id);
      }}
    />
  );
};

// 결제 정보 삭제 컴포넌트
export const PaymentDeleteIcon = ({ row }: { row: Row<Payment> }) => {
  const { setIsDeletePaymentsModal, setDeletePaymentId } = useModal();

  return (
    <MdDelete
      size={20}
      className="cursor-pointer"
      onClick={() => {
        setIsDeletePaymentsModal(true);
        setDeletePaymentId(row.original.id);
      }}
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
    accessorKey: "price",
    header: "금액",
  },
  {
    accessorKey: "email",
    header: "이메일",
  },
  {
    accessorKey: "status",
    header: "상태",
    cell: ({ row }) => {
      return <span>{TransactionType[row.original.status]}</span>;
    },
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

//! 타입 정의
interface Payment {
  id: string;
  price: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}
