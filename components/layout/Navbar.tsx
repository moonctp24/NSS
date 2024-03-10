import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const goMenu = (pageName: string) => {
    router.push(`/${pageName}`);
  };

  return (
    <>
      <div className="w-1/6 h-[1080px] bg-[#E6E6E6]">
        <p className="w-full h-28 text-[40px] text-center text-[#00c1a6]">LOGO</p>
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
        <button className="navLogoutBtn" onClick={() => goMenu("nauth/login")}>
          로그아웃
        </button>
      </div>
    </>
  );
};

export default Navbar;
