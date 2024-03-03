import type { NextPage } from "next";
import { useRouter } from "next/router";

const MainComp: NextPage = () => {
  const router = useRouter();

  const goUserMngBtn = () => {
    router.push("/admin/userMng");
  };
  return (
    <>
      <div>Hello Dashboard</div>
      <div>this is test push2</div>
    </>
  );
};

export default MainComp;
