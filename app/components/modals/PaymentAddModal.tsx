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

const PaymentAddModal = () => {
  const { setIsAddPaymentsModal } = useModal();

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
        {/* 나가기 버튼 */}
        <div
          className="flex justify-end cursor-pointer"
          onClick={() => {
            setIsAddPaymentsModal(false);
          }}
        >
          <IoClose size={20} />
        </div>
        {/* 양식 */}
        <div className={"flex flex-col justify-center items-center gap-5"}>
          <div className="w-full">
            <Label htmlFor="name">결제명</Label>
            <Input id="name" type="text" />
          </div>
          <div className="w-full">
            <Label htmlFor="price">금액</Label>
            <Input id="price" type="number" />
          </div>
          <div className="w-full">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" />
          </div>
          <div className="w-full">
            <Label htmlFor="status">상태</Label>
            <Select>
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
        <div className="bg-green-500 border-none text-white px-8 py-4 text-center no-underline inline-block text-lg mx-1 my-1 cursor-pointer rounded-sm w-full mt-10">
          결제 내역 추가하기
        </div>
      </div>
    </div>
  );
};

export default PaymentAddModal;
