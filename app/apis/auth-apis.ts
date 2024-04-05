import {
  getAccessToken,
  getRefreshToken,
  isAccessTokenExpired,
} from "../utils/utils";

// 로그인(토큰 발급) API 함수
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

// 토큰 갱신 API 함수
export const updateToken = async () => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API}/api/refresh-access-token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ refreshToken }),
    }
  );

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  //! 쿠키에 저장된 토큰 삭제하는 로직 추가
  //! 헤더에서 새로운 토큰 받아와서 쿠키에 저장하는 로직 추가
  //! API를 재호출하는 로딕 추가

  const data = await res.json();
  return data;
};

// 유저 정보 조회 API 함수
export const getUserInfo = async () => {
  const accessToken = getAccessToken();

  if (isAccessTokenExpired(accessToken)) {
    // 토큰이 만료됐을 때
    updateToken();
    return Promise.reject("Token is expired");
  } else {
    // 토큰이 만료되지 않았을 때
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
  }
};

//! 타입 정의
interface LoginType {
  username: string;
  password: string;
}
