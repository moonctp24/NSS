import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Chart = dynamic(
  () => {
    return import("react-apexcharts");
  },
  { ssr: false }
);

const MainComp: NextPage = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [initData, setInitData] = useState<any>();

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
      setInitData([0, 19, 26, 20, 19, 30]);
    }, 1000);
  }, []);

  return (
    <>
      <div className="mainComponent">
        <h1>대시보드</h1>
        {isLoad ? (
          <>
            <div className="headerFlex">
              <div className="w-full">
                <Chart
                  type="line"
                  series={[{ name: "가입자 수 추이", data: initData }]}
                  options={{
                    chart: {
                      height: 100,
                      width: 100,
                    },
                  }}
                />
                <div className="text-center">가입자 수 추이</div>
              </div>
              <div className="w-full">
                <Chart
                  type="line"
                  series={[
                    { name: "사용률", data: [40, 60, 70, 75] },
                    { name: "가입율", data: [30, 26, 34, 40] },
                  ]}
                  options={{
                    chart: {
                      height: 100,
                      width: 100,
                    },
                  }}
                />
              </div>
              <div className="w-full">
                <Chart
                  type="bar"
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
              </div>
            </div>
            <div className="headerFlex">
              <div className="w-full">
                <Chart
                  type="line"
                  series={[
                    { name: "오늘의 기온", data: [19, 26, 20, 9] },
                    { name: "내일의 기온", data: [30, 26, 34, 10] },
                  ]}
                  options={{
                    theme: {
                      mode: "dark",
                    },
                    chart: {
                      height: 100,
                      width: 100,
                    },
                  }}
                />
              </div>
              <div className="w-full">
                <Chart
                  type="line"
                  series={[
                    { name: "오늘의 기온", data: [19, 26, 20, 9] },
                    { name: "내일의 기온", data: [30, 26, 34, 10] },
                  ]}
                  options={{
                    chart: {
                      type: "candlestick",
                      height: 350,
                      width: 500,
                      toolbar: {
                        show: false,
                      },
                      background: "transparent",
                    },
                    stroke: {
                      curve: "smooth",
                      width: 2,
                    },
                    yaxis: {
                      show: false,
                    },
                    plotOptions: {
                      candlestick: {
                        colors: {
                          upward: "#3C90EB",
                          downward: "#DF7D46",
                        },
                      },
                    },
                  }}
                />
              </div>
              <div className="w-full">
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
              </div>
            </div>
          </>
        ) : (
          <div>is loading</div>
        )}
      </div>
    </>
  );
};

export default MainComp;
