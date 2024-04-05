"use client";

import DataTable from "../../table/DataTable";
import { paymentColumns } from "../../table/columns";
import useModal from "@/app/hooks/useModal";
import PaymentEditModal from "../../modals/PaymentEditModal";
import PaymentDeleteModal from "../../modals/PaymentDeleteModal";

const Table: React.FC<TableProps> = ({ payments }) => {
  const { isEditPaymentsModal, isDeletePaymentsModal } = useModal(); // 모달 상태

  return (
    <>
      <DataTable data={payments} columns={paymentColumns} />
      {isEditPaymentsModal && <PaymentEditModal />}
      {isDeletePaymentsModal && <PaymentDeleteModal />}
    </>
  );
};

export default Table;

//! 타입 정의
interface TableProps {
  payments: Payment[];
}

interface Payment {
  id: string;
  price: number;
  status: PaymentStatus;
  email: string;
  name: string;
}

type PaymentStatus = "pending" | "processing" | "success" | "failed";
