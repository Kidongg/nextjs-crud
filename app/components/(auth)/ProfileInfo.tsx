"use client";

import { getUserInfo } from "@/app/apis/auth-apis";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProfileInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({});

  const router = useRouter();

  // 데이터 패칭 함수 실행
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await getUserInfo();
        setUserInfo(res.data);
      } catch (error) {
        console.error(error);
        router.push("/login");
      }
    };

    fetchUserInfo();
  }, []);

  console.log("userInfo: ", userInfo);

  return (
    <div>
      <p>이름 : {userInfo.name}</p>
      <p>핸드폰 : {userInfo.phone}</p>
      <p>멤버십 : {userInfo.membership}</p>
    </div>
  );
};

export default ProfileInfo;

//! 타입 정의
interface UserInfo {
  id?: number;
  username?: string;
  name?: string;
  phone?: string;
  companyName?: string;
  companyId?: string;
  membership?: string;
  authorities?: string[];
}
