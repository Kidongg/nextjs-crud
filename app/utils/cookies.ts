import { Cookies } from "react-cookie";

const cookies = new Cookies();

// 쿠키를 가져오는 함수
export const getCookie = (name: string) => {
  return cookies.get(name);
};

// 쿠키를 설정하는 함수
export const setCookie = (
  name: string,
  value: string | null,
  options?: any
) => {
  return cookies.set(name, value, { ...options });
};

// 쿠키를 제거하는 함수
export const removeCookie = (name: string, options?: any) => {
  return cookies.remove(name, { ...options });
};
