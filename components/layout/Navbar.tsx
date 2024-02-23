import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const goMenu = (pageName: string) => {
    router.push(`/${pageName}`);
  };

  return (
    <>
      <div className="w-[350px] h-[1080px] bg-[#E6E6E6]">
        <p className="w-[350px] h-28 text-[40px] text-center text-[#00c1a6]">LOGO</p>
        <button className="navBtn" onClick={() => goMenu("")}>
          대시보드
        </button>
        <button className="navBtn" onClick={() => goMenu("userMng")}>
          회원관리
        </button>
        <button className="navBtn" onClick={() => goMenu("medicineMng")}>
          의약품관리
        </button>
        <button className="navBtn" onClick={() => goMenu("admSttng")}>
          관리자설정
        </button>
        <p className="absolute left-[130px] top-[984px] text-xl text-center text-[#020202]">
          <span className="text-xl text-center text-[#020202]">로그아웃</span>
        </p>
      </div>
    </>
  );
};

export default Navbar;
