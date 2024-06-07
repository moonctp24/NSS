import { loginAction } from "@/store/login/login-slice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const isLoginYN = localStorage.getItem("isLogin");
  const userName = localStorage.getItem("userName");

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

  const [isSubMenuShow, setIsSubMenuShow] = useState(false);

  const LogoutProcess = () => {
    dispatch(loginAction.logout());
    goMenu("nauth/login");
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
          <div className="h-[70px]">
            <button className="navBtn" onMouseOver={() => setIsSubMenuShow(true)} onMouseOut={() => setIsSubMenuShow(false)}>
              관리자설정
            </button>
            {isSubMenuShow && (
              <div className="subNavList" onMouseOver={() => setIsSubMenuShow(true)} onMouseOut={() => setIsSubMenuShow(false)}>
                <ul>
                  <li onClick={() => goMenu("admSttng/sysPlcy")}>시스템 정책 관리</li>
                  <li onClick={() => goMenu("admSttng/sysNtc")}>전체공지</li>
                  <li onClick={() => goMenu("admSttng/abTest")}>AB Test Page</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="w-[350px] mt-2">
          <div className="userNameCircle w-[70px] h-[70px]">
            <div className="text-m text-center mt-6 text-white">{userName || "관리자1"}</div>
          </div>
          <button className="navLogoutBtn" onClick={LogoutProcess}>
            로그아웃
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
