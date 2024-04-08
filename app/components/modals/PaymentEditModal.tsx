import useModal from "@/app/hooks/useModal";
import { IoClose } from "react-icons/io5";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useEffect, useRef, useState } from "react";
import { editPayment, getPayment } from "@/app/apis/payment-apis";
import { TransactionType } from "@/app/types/transaction-type";
import useStatus from "@/app/hooks/useStatus";

const PaymentEditModal = () => {
  const [payment, setPayment] = useState<Payment | null>(null); // 결제 정보 상태

  const { setIsEditPaymentsModal } = useModal();
  const { editPaymentId, setEditPaymentId } = useStatus();

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<PaymentStatus>("pending"); // ["pending", "processing", "success", "failed"]

  // 데이터 패칭 함수 실행
  useEffect(() => {
    const fetchPayment = async (editPaymentId: string) => {
      try {
        const payment = await getPayment(editPaymentId);
        setPayment(payment);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPayment(editPaymentId);
  }, []);

  // 모달 나가는 함수
  const handleModalClose = () => {
    setIsEditPaymentsModal(false);
  };

  // 상태 변경 함수
  const handleStatusChange = (value: PaymentStatus) => {
    setStatus(value);
  };

  // 결제 내역 수정 함수
  const handleEditPayment = async () => {
    try {
      const name = nameRef.current?.value || "";
      const price = priceRef.current?.value;
      const email = emailRef.current?.value || "";

      const payment = {
        name,
        price: Number(price),
        email,
        status,
      };

      await editPayment(editPaymentId, payment).then(() => {
        alert("결제 내역이 수정되었습니다.");
        setIsEditPaymentsModal(false);
        setEditPaymentId(null);
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
            <Input
              id="name"
              type="text"
              defaultValue={payment?.name}
              ref={nameRef}
            />
          </div>
          <div className="w-full">
            <Label htmlFor="price">금액</Label>
            <Input
              id="price"
              type="number"
              defaultValue={payment?.price}
              ref={priceRef}
            />
          </div>
          <div className="w-full">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              defaultValue={payment?.email}
              ref={emailRef}
            />
          </div>
          <div className="w-full">
            <Label htmlFor="status">상태</Label>
            <Select
              defaultValue={payment?.status}
              onValueChange={handleStatusChange}
            >
              <SelectTrigger>
                <SelectValue
                  placeholder={
                    TransactionType[
                      payment?.status as keyof typeof TransactionType
                    ]
                  }
                />
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
          onClick={handleEditPayment}
        >
          결제 내역 수정하기
        </div>
      </div>
    </div>
  );
};

export default PaymentEditModal;

//! 타입 정의
interface Payment {
  name: string;
  price: number;
  email: string;
  status: "pending" | "processing" | "success" | "failed";
}

type PaymentStatus = "pending" | "processing" | "success" | "failed";
