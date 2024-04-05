import { getPayments } from "@/app/apis/payment-apis";
import Button from "@/app/components/(server)/button/Button";
import Table from "@/app/components/(server)/table/Table";

const Page = async () => {
  const payments = await getPayments();

  return (
    <div className="py-10 pl-10 pr-10 flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">서버 컴포넌트</h1>
      <Button />
      <Table payments={payments} />
    </div>
  );
};

export default Page;
