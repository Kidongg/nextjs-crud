import useModal from "@/app/hooks/useModal";
import { IoClose } from "react-icons/io5";

const PaymentEditModal = () => {
  const { setIsEditPaymentsModal } = useModal();

  return (
    <div
      className={
        "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
      }
    >
      <div
        className={
          "bg-white p-5 rounded-lg shadow-lg overflow-y-auto flex flex-col gap-8 w-1/2 max-h-4/5 z-60 overflow-x-hidden"
        }
      >
        <div
          className="flex justify-end cursor-pointer"
          onClick={() => {
            setIsEditPaymentsModal(false);
          }}
        >
          <IoClose size={20} />
        </div>
        <div className={"flex flex-col justify-center items-center gap-5"}>
          모달 내용
        </div>
        <div className="bg-green-500 border-none text-white px-8 py-4 text-center no-underline inline-block text-lg mx-1 my-0.5 cursor-pointer rounded-sm w-full">
          결제 내역 수정하기
        </div>
      </div>
    </div>
  );
};

export default PaymentEditModal;
