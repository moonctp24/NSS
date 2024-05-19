import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const router = useRouter();
  // const isLogin = useSelector((state: any) => state.login.isLogin); // 현재 로그인여부를 Redux에서 불러오기
  const isLoginYN = localStorage.getItem("isLogin");
  const userName = useSelector((state: any) => state.login.userName);
  // console.log(userName);
  useEffect(() => {
    if (isLoginYN) {
      //
    } else {
      router.push("/nauth/login");
    }
  }, [isLoginYN, router]);

  const goMenu = (pageName: string) => {
    router.push(`/${pageName}`);
  };

  return (
    <>
      <div className="w-full h-[120px] bg-[#e6e6e6] headerFlex">
        {/* <p className="w-[300px] h-[100px] left-[-81px] top-[-5px] text-[40px] text-center text-[#00c1a6]" onClick={() => goMenu("")}>
          LOGO
        </p> */}
        <div className="w-[350px] h-[100px] mt-2 text-center makePointer" onClick={() => goMenu("")}>
          <Image className="m-auto" width={50} height={50} src="https://cdn.icon-icons.com/icons2/1465/PNG/512/740pill_100923.png" alt={"pillImg"} style={{ width: "auto", height: "auto" }} />
          (임시로고)
        </div>
        <div className="btngrp w-[1200px]">
          <button className="navBtn" onClick={() => goMenu("")}>
            대시보드
          </button>
          <button className="navBtn" onClick={() => goMenu("userMng/userList")}>
            회원관리
          </button>
          <button className="navBtn" onClick={() => goMenu("medicineMng/mdcnList")}>
            의약품관리
          </button>
          <button className="navBtn" onClick={() => goMenu("acct/admSttng")}>
            관리자설정
          </button>
        </div>
        <div className="w-[350px] mt-2">
          <div className="userNameCircle w-[70px] h-[70px]">
            <div className="text-m text-center mt-6 text-white">{userName || "관리자1"}</div>
          </div>
          <button className="navLogoutBtn" onClick={() => goMenu("nauth/login")}>
            로그아웃
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
