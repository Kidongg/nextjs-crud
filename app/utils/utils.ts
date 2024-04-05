import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// 테일윈드 클래스와 병합하는 clsx 래퍼 함수
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Access Token을 가져오는 함수
export function getAccessToken() {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("accessToken="))
    ?.split("=")[1];
}
