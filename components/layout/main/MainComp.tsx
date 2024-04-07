import type { NextPage } from "next";
import dynamic from "next/dynamic";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Chart = dynamic(
  () => {
    return import("react-apexcharts");
  },
  { ssr: false }
);

const MainComp: NextPage = () => {
  // const router = useRouter();

  // const goUserMngBtn = () => {
  //   router.push("/admin/userMng");
  // };

  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 1000);
  }, []);

  return (
    <>
      <div className="mainComponent">
        <h1>대시보드</h1>
        {isLoad ? (
          <Chart
            type="line"
            series={[
              { name: "오늘의 기온", data: [19, 26, 20, 9] },
              { name: "내일의 기온", data: [30, 26, 34, 10] },
            ]}
            options={{
              chart: {
                height: 100,
                width: 100,
              },
            }}
          />
        ) : (
          <div>is loading</div>
        )}
      </div>
    </>
  );
};

export default MainComp;
