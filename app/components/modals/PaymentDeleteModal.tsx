import useModal from "@/app/hooks/useModal";
import { IoClose } from "react-icons/io5";

const PaymentDeleteModal = () => {
  const { setIsDeletePaymentsModal } = useModal();

  return (
    <div
      className={
        "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
      }
    >
      <div
        className={
          "bg-white p-5 rounded-lg shadow-lg overflow-y-auto flex flex-col gap-8 w-96 max-h-4/5 z-60 overflow-x-hidden"
        }
      >
        <div
          className="flex justify-end cursor-pointer"
          onClick={() => {
            setIsDeletePaymentsModal(false);
          }}
        >
          <IoClose size={20} />
        </div>
        <div className="bg-red-400 border-none text-white px-8 py-4 text-center no-underline inline-block text-lg mx-1 my-0.5 cursor-pointer rounded-sm w-full">
          결제 내역 삭제하기
        </div>
      </div>
    </div>
  );
};

export default PaymentDeleteModal;
