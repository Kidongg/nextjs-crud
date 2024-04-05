// 로그인 API 함수
export const login = async (req: LoginType) => {
  console.log("API to loginData: ", req);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API}/api/authenticate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    }
  );

  return res;
};

//! 타입 정의
interface LoginType {
  username: string;
  password: string;
}
