import useModal from "@/app/hooks/useModal";
import { IoClose } from "react-icons/io5";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRef, useState } from "react";
import { addPayment } from "@/app/apis/apis";

const PaymentAddModal = () => {
  const { setIsAddPaymentsModal } = useModal();

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState(""); // ["pending", "processing", "success", "failed"]

  // 모달 나가는 함수
  const handleModalClose = () => {
    setIsAddPaymentsModal(false);
  };

  // 상태 변경 함수
  const handleStatusChange = (value: string) => {
    setStatus(value);
  };

  // 결제 내역 추가 함수
  const handleAddPayment = async () => {
    // 여기서 API 요청을 보내고, 성공하면 모달을 닫아줍니다.
    try {
      const name = nameRef.current?.value;
      const price = priceRef.current?.value;
      const email = emailRef.current?.value;

      if (!name || !price || !email || !status) {
        alert("모든 필드를 입력해주세요.");
        return;
      }

      const payment = {
        name,
        price: Number(price),
        email,
        status,
      };

      const res = await addPayment(payment).then((res) => {
        alert("결제 내역이 추가되었습니다.");
        setIsAddPaymentsModal(false);
        window.location.reload();
      });
    } catch (error) {
      console.error(error);
    }
  };

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
        {/* 나가기 버튼 */}
        <div
          className="flex justify-end cursor-pointer"
          onClick={handleModalClose}
        >
          <IoClose size={20} />
        </div>
        {/* 양식 */}
        <div className={"flex flex-col justify-center items-center gap-5"}>
          <div className="w-full">
            <Label htmlFor="name">결제명</Label>
            <Input id="name" type="text" ref={nameRef} />
          </div>
          <div className="w-full">
            <Label htmlFor="price">금액</Label>
            <Input id="price" type="number" ref={priceRef} />
          </div>
          <div className="w-full">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" ref={emailRef} />
          </div>
          <div className="w-full">
            <Label htmlFor="status">상태</Label>
            <Select onValueChange={handleStatusChange}>
              <SelectTrigger>
                <SelectValue placeholder="상태" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">보류 중</SelectItem>
                <SelectItem value="processing">처리 중</SelectItem>
                <SelectItem value="success">결제 완료</SelectItem>
                <SelectItem value="failed">결제 실패</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* 양식 버튼 */}
        <div
          className="bg-blue-500 border-none text-white px-8 py-4 text-center no-underline inline-block text-lg mx-1 my-1 cursor-pointer rounded-sm w-full mt-10"
          onClick={handleAddPayment}
        >
          결제 내역 추가하기
        </div>
      </div>
    </div>
  );
};

export default PaymentAddModal;
