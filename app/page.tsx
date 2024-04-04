"use client";

import DataTable from "@/app/components/table/DataTable";
import { paymentColumns } from "@/app/components/table/columns";
import { useEffect, useState } from "react";
import PaymentAddModal from "./components/modals/PaymentAddModal";
import useModal from "./hooks/useModal";
import PaymentEditModal from "./components/modals/PaymentEditModal";
import PaymentDeleteModal from "./components/modals/PaymentDeleteModal";
import { getPayments } from "./apis/apis";

const Page = () => {
  const [payments, setPayments] = useState([]); // 결제 정보 상태
  const {
    isAddPaymentsModal,
    setIsAddPaymentsModal,
    isEditPaymentsModal,
    isDeletePaymentsModal,
  } = useModal(); // 모달 상태

  // 데이터 패칭 함수 실행
  useEffect(() => {
    const fetchPayments = async () => {
      const payments = await getPayments();
      setPayments(payments);
    };

    fetchPayments();
  }, []);

  // console.log("payments: ", payments);

  return (
    <div className="py-10 pl-10 pr-10 flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">클라이언트 컴포넌트</h1>
      <div
        className="bg-blue-500 border-none text-white px-8 py-4 text-center no-underline inline-block text-lg mx-1 my-1 cursor-pointer rounded-sm w-full mt-10"
        onClick={() => {
          setIsAddPaymentsModal(true);
        }}
      >
        추가하기
      </div>
      <DataTable data={payments} columns={paymentColumns} />
      {isAddPaymentsModal && <PaymentAddModal />}
      {isEditPaymentsModal && <PaymentEditModal />}
      {isDeletePaymentsModal && <PaymentDeleteModal />}
    </div>
  );
};

export default Page;
