import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// 테일윈드 클래스와 병합하는 clsx 래퍼 함수
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// Access Token이 만료됐는지 확인하는 함수
export const isAccessTokenExpired = (token: string | undefined) => {
  if (!token) return true;

  const payload = JSON.parse(atob(token.split(".")[1]));
  const exp = payload.exp * 1000;
  const now = Date.now();

  return now > exp;
};
