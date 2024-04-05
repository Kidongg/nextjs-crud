import ProfileInfo from "@/app/components/(auth)/ProfileInfo";

const Page = () => {
  return (
    <div className="py-10 pl-10 pr-10 flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">프로필</h1>
      <ProfileInfo />
    </div>
  );
};

export default Page;
