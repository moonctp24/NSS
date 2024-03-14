import { useState } from "react";
import MedicineDtlTable from "./MedicineDtlTable";

const MedicineAddComp = () => {
  const [isSaveClicked, setIsSaveClicked] = useState(false);

  const mDtlAddSave = () => {
    setIsSaveClicked(true);
  };

  const getModifiedData = (modifiedData: any) => {
    if (isSaveClicked) {
      //   modifiedData.admin_comment = admCmmtM;
      console.log(modifiedData);

      // 의약품 추가 통신
      //   const AXIOS = axios.create({
      //     withCredentials: true,
      //     headers: {
      //       "Content-Type": "application/json; charset=utf-8",
      //     },
      //   });

      // const res = AXIOS.post("http://3.39.214.33:8081/api/login", JSON.stringify(data));
      // console.log(res);
    }
    setIsSaveClicked(false);
  };

  return (
    <>
      <div className="mainComponent">
        <h1>의약품 추가</h1>
        <button className="w-[100px] h-[40px] float-right" onClick={mDtlAddSave}>
          저장
        </button>
        <div className="m-auto	mt-20">
          <MedicineDtlTable mDtlInfo={null} isSaveClicked={isSaveClicked} getModifiedData={getModifiedData} />
        </div>
      </div>
    </>
  );
};

export default MedicineAddComp;
