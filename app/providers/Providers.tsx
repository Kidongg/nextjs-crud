"use client";

import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [isAddPaymentsModal, setIsAddPaymentsModal] = useState(false); // 결제 정보를 추가하는 모달 상태
  const [isEditPaymentsModal, setIsEditPaymentsModal] = useState(false); // 결제 정보를 수정하는 모달 상태

  return (
    <Context.Provider
      value={{
        isAddPaymentsModal,
        setIsAddPaymentsModal,
        isEditPaymentsModal,
        setIsEditPaymentsModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
