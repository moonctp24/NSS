import { useAxios } from "@/constants/util/API_UTIL";
import { useCallback, useEffect, useState } from "react";

const DevTestComp = () => {
  // const { code, response, fetchData } = useAxios();
  const { code, response, fetchData } = useAxios();
  const [number, setNumber] = useState(0);

  useEffect(() => {
    getResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, response]);

  const getResult = useCallback(() => {
    console.log(`code :: ${code} / response :: `, response);
    if (response && code == "200") {
      console.log("success");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, response]);

  const failAPI = () => {
    fetchData("post", "/api/devtest/failapi", null, true);
  };

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -mt-[150px] -ml-[200px] ">
        <h1>COUNT TEST</h1>
        <div className="flex">
          <button
            className="w-[100px] h-[70px] text-center text-6xl"
            onClick={() => {
              setNumber(number - 1);
            }}
          >
            -
          </button>
          <div className="w-[200px] pl-[50px] text-center pr-[50px] text-6xl">{number}</div>
          <button
            className="w-[100px] h-[70px] text-center text-6xl"
            onClick={() => {
              setNumber(number + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <h1>API FAIL TEST</h1>
        <button onClick={failAPI}>api</button>
      </div>
    </>
  );
};

export default DevTestComp;
