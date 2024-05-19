import { useCallback, useEffect, useState } from "react";
import MedicineDtlTable from "./MedicineDtlTable";
import { useRouter } from "next/router";
import { useAxios } from "@/constants/util/API_UTIL";
import { useDispatch } from "react-redux";
import { alertAction } from "@/store/modal/alert-slice";

const MedicineAddComp = () => {
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [admCmmtM, setAdmCmmtM] = useState("");

  const router = useRouter();
  const { code, response, message, fetchData } = useAxios();
  const dispatch = useDispatch();

  const goMcdnListPage = () => {
    router.push("/medicineMng/mdcnList");
  };

  useEffect(() => {
    getResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, response, message, router]);

  const getResult = useCallback(() => {
    console.log(`code :: ${code} / response :: `, response, "/ message:: ", message);
    if (response && code == "200") {
      // console.log(response);
      if (message) dispatch(alertAction.openModal({ cont: message }));
      router.push("/medicineMng/mdcnList");
      // setMedicineList(tmpList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, message, response]);

  const mDtlAddSave = () => {
    setIsSaveClicked(true);
  };

  const getModifiedData = (modifiedData: any) => {
    if (isSaveClicked) {
      modifiedData.admin_comment = admCmmtM;
      fetchData("post", "/api/medicineMng/addMdcnDtl", modifiedData, true);
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
