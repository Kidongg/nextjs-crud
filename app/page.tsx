import Button from "./components/(client)/button/Button";
import Table from "./components/(client)/table/Table";

const Page = () => {
  return (
    <div className="py-10 pl-10 pr-10 flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">클라이언트 컴포넌트</h1>
      <Button />
      <Table />
    </div>
  );
};

export default Page;
