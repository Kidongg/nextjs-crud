import LoginForm from "@/app/components/(auth)/LoginForm";

const Page = () => {
  return (
    <div className="py-10 pl-10 pr-10 flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">로그인</h1>
      <LoginForm />
    </div>
  );
};

export default Page;
