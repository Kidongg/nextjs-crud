"use client";

import useModal from "@/app/hooks/useModal";
import PaymentAddModal from "../../modals/PaymentAddModal";

const Button = () => {
  const { isAddPaymentsModal, setIsAddPaymentsModal } = useModal();

  // 모달 열기 함수
  const handleModalOpen = () => {
    setIsAddPaymentsModal(true);
  };

  return (
    <>
      <div
        className="bg-blue-500 border-none text-white px-8 py-4 text-center no-underline inline-block text-lg mx-1 my-1 cursor-pointer rounded-sm w-full mt-10"
        onClick={handleModalOpen}
      >
        추가하기
      </div>
      {isAddPaymentsModal && <PaymentAddModal />}
    </>
  );
};

export default Button;
