import type { NextPage } from "next";
import { useRouter } from "next/router";

const MainComp: NextPage = () => {
  const router = useRouter();

  const goUserMngBtn = () => {
    router.push("/admin/userMng");
  };
  return (
    <>
      <div className="mainComponent">
        <h1>대시보드</h1>
      </div>
    </>
  );
};

export default MainComp;
