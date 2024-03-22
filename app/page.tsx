"use client";

import DataTable from "@/app/components/table/DataTable";
import { paymentColumns } from "@/app/components/table/columns";
import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";

// API 조회 함수
const getPayments = async () => {
  const res = await fetch("http://localhost:3001/payments", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  return data;
};

// API 추가 함수

// API 수정 함수

// API 삭제 함수

const Page = () => {
  const [payments, setPayments] = useState([]);

  // 데이터 패칭 함수 실행
  // useEffect(() => {
  //   const fetchPayments = async () => {
  //     const payments = await getPayments();
  //     setPayments(payments);
  //   };

  //   fetchPayments();
  // }, []);

  console.log("payments: ", payments);

  //! 데스트를 위한 UI 작업중

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-10">클라이언트 컴포넌트</h1>
      <Button>추가하기</Button>
      <DataTable data={payments} columns={paymentColumns} />
    </div>
  );
};

export default Page;
