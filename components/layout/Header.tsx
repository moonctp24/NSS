import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
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
        <button className="navLogoutBtn" onClick={() => goMenu("nauth/login")}>
          로그아웃
        </button>
      </div>
    </>
  );
};

export default Header;
