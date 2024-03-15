import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const isLogin = useSelector((state: any) => state.login.isLogin); // 현재 로그인여부를 Redux에서 불러오기
  const userName = useSelector((state: any) => state.login.userName);
  console.log(userName);
  useEffect(() => {
    if (isLogin) {
      //
    } else {
      router.push("/nauth/login");
    }
  }, [isLogin, router]);
  // const [title, setTitle] = useState("");

  // useEffect(() => {
  //   let nowPath = router.pathname.split("/")[1];
  //   if (nowPath === "") {
  //     setTitle("대시보드");
  //   } else if (nowPath === "userMng") {
  //     setTitle("회원관리");
  //   } else if (nowPath === "medicineMng") {
  //     setTitle("의약품관리");
  //   } else if (nowPath === "acct") {
  //     setTitle("관리자설정");
  //   } else {
  //     setTitle("잘못된 페이지");
  //   }
  // }, [router]);

  const goMenu = (pageName: string) => {
    router.push(`/${pageName}`);
  };

  return (
    <>
      <div className="w-full h-[120px] bg-[#e6e6e6] headerFlex">
        <p className="w-[300px] h-[100px] left-[-81px] top-[-5px] text-[40px] text-center text-[#00c1a6]">LOGO</p>
        <div className="headerFlex w-[1200px]">
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
        <div>
          <div>
            <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="absolute " preserveAspectRatio="none">
              <circle cx="40" cy="40" r="40" fill="#AFF4C6">
                <p className="w-[72px] h-[37px] absolute text-2xl text-center text-black">{userName}</p>
              </circle>
            </svg>
            <p className="w-[72px] h-[37px] absolute text-2xl text-center text-black">{userName}</p>
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
