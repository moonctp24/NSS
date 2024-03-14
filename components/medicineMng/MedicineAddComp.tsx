import { useState } from "react";
import MedicineDtlTable from "./MedicineDtlTable";
import { useRouter } from "next/router";

const MedicineAddComp = () => {
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [admCmmtM, setAdmCmmtM] = useState("");

  const router = useRouter();

  const goMcdnListPage = () => {
    router.push("/medicineMng/mdcnList");
  };

  const mDtlAddSave = () => {
    setIsSaveClicked(true);
  };

  const getModifiedData = (modifiedData: any) => {
    if (isSaveClicked) {
      modifiedData.admin_comment = admCmmtM;
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
        <div className="relative w-[200px] h-[40px] flex float-right">
          <button className="h-[40px] float-right" onClick={mDtlAddSave}>
            저장
          </button>
          <button className="h-[40px] btn_gray float-right" onClick={goMcdnListPage}>
            목록
          </button>
        </div>
        <div className="m-auto	mt-20">
          <MedicineDtlTable mDtlInfo={null} isSaveClicked={isSaveClicked} getModifiedData={getModifiedData} />
        </div>
        <h1>관리자 메모</h1>
        <div className="w-full h-[150px] rounded-md bg-[#d9d9d9] border-4 border-[#b6b6b6] p-5">
          <textarea className="admCommentTextArea" value={admCmmtM} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAdmCmmtM(e.target.value)} />
        </div>
      </div>
    </>
  );
};

export default MedicineAddComp;
