"use client";

import { deletePayment } from "@/app/apis/payment-apis";
import useModal from "@/app/hooks/useModal";
import useStatus from "@/app/hooks/useStatus";
import { TransactionType } from "@/app/types/transaction-type";
import { ColumnDef, Row } from "@tanstack/react-table";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";

// 결제 정보 수정 컴포넌트
export const PaymentEditIcon = ({ row }: { row: Row<Payment> }) => {
  const { setIsEditPaymentsModal } = useModal();
  const { setEditPaymentId } = useStatus();

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
  // 결제 내역 삭제 함수
  const handleDeletePayment = async () => {
    const isConfirm = confirm("정말 삭제하시겠습니까?");

    if (isConfirm) {
      await deletePayment(row.original.id).then(() => {
        alert("결제 내역이 삭제되었습니다.");

        window.location.reload();
      });
    }
  };

  return (
    <MdDelete
      size={20}
      className="cursor-pointer"
      onClick={handleDeletePayment}
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
    header: "삭제",
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
