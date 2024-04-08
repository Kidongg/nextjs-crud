import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// 테일윈드 클래스와 병합하는 clsx 래퍼 함수
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// Access Token을 가져오는 함수
export const getAccessToken = () => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("accessToken="))
    ?.split("=")[1];
};

// Access Token이 만료됐는지 확인하는 함수
export const isAccessTokenExpired = (token: string | undefined) => {
  if (!token) return true;

  const payload = JSON.parse(atob(token.split(".")[1]));
  const exp = payload.exp * 1000;
  const now = Date.now();

  return now > exp;
};

// Refresh Token을 가져오는 함수
export const getRefreshToken = () => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("refreshToken="))
    ?.split("=")[1];
};
