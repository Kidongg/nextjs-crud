"use client";

import { useEffect, useState } from "react";
import DataTable from "../../table/DataTable";
import { paymentColumns } from "../../table/columns";
import useModal from "@/app/hooks/useModal";
import PaymentEditModal from "../../modals/PaymentEditModal";
import { getPayments } from "@/app/apis/payment-apis";

const Table = () => {
  const [payments, setPayments] = useState([]); // 결제 정보 상태

  const { isEditPaymentsModal } = useModal(); // 모달 상태

  // 데이터 패칭 함수 실행
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const payments = await getPayments();
        setPayments(payments);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPayments();
  }, []);

  // console.log("payments: ", payments);

  return (
    <>
      <DataTable data={payments} columns={paymentColumns} />
      {isEditPaymentsModal && <PaymentEditModal />}
    </>
  );
};

export default Table;
