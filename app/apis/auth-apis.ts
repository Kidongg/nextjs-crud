import { getAccessToken } from "../utils/utils";

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

// 유저 정보 조회 API 함수
export const getUserInfo = async () => {
  const accessToken = getAccessToken();

  const res = await fetch(`${process.env.NEXT_PUBLIC_DEV_API}/api/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  return data;
};

//! 타입 정의
interface LoginType {
  username: string;
  password: string;
}
