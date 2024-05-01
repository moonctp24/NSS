import { useRouter } from "next/router";

const NotFoundComp = () => {
  const router = useRouter();

  return (
    <>
      <div className="mainComponent">
        <div className="inset-1/2	absolute w-[500px] -mt-32 -ml-60">
          <p className="text-8xl font-medium text-center text-[#1e1e1e]">404</p>
          <p className="text-[40px] font-medium text-center text-[#1e1e1e]">존재하지 않는 페이지에요 :(</p>
          <button className="w-[400px] ml-12" onClick={() => router.push("/")}>
            메인으로 돌아가기
          </button>
        </div>
      </div>
    </>
  );
};
export default NotFoundComp;
