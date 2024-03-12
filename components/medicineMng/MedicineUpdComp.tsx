import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MedicineDtlTable from "./MedicineDtlTable";
import axios from "axios";

const MedicineUpdComp = () => {
  const router = useRouter();
  const [mDtlInfo, setMDtlInfo] = useState<any>(Object || null);
  const [domLoaded, setDomLoaded] = useState(false); // 테이블 데이터 로딩 상태
  const [admCmmtM, setAdmCmmtM] = useState("");
  const [isSaveClicked, setIsSaveClicked] = useState(false);

  useEffect(() => {
    console.log(router.query.itemSeq);
    // item_seq로 상세정보 조회하는 통신
    let tmpResData = {
      item_seq: "medicineId_99999999999995",
      medicine_name: "약이름",
      company_name: "약회사",
      description: "테스트",
      usage: "물과 함께",
      effect: "진통",
      side_effect: "메스꺼움",
      caution: "운전주의",
      keep_method: "실온보관",
      appearance: "흰색정제",
      color_class1: "",
      color_class2: "",
      pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
      class_name: "",
      otc_name: "",
      form_code_name: "",
      created_at: "20240301153021",
      updated_at: "20240301153021",
      admin_comment: "관리자 코멘트",
    };
    setMDtlInfo(tmpResData);
    setDomLoaded(true);
    setAdmCmmtM(tmpResData.admin_comment);
  }, []);

  const goMcdnListPage = () => {
    router.push("/medicineMng/mdcnList");
  };

  const mDtlUpdSave = () => {
    setIsSaveClicked(true);
  };

  const getModifiedData = (modifiedData: any) => {
    if (isSaveClicked) {
      modifiedData.admin_comment = admCmmtM;
      console.log(modifiedData);

      // 의약품 수정 통신
      const AXIOS = axios.create({
        withCredentials: true,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      // const res = AXIOS.post("http://3.39.214.33:8081/api/login", JSON.stringify(data));
      // console.log(res);
    }
    setIsSaveClicked(false);
  };

  return (
    <>
      <div className="mainComponent">
        <h1 className="">의약품 상세</h1>
        <div className="relative w-[200px] h-[40px] flex float-right">
          <button className="h-[40px] float-right" onClick={mDtlUpdSave}>
            저장
          </button>
          <button className="h-[40px] btn_gray float-right" onClick={goMcdnListPage}>
            목록
          </button>
        </div>
        <div className="m-auto	mt-20">{domLoaded && <MedicineDtlTable mDtlInfo={mDtlInfo} isSaveClicked={isSaveClicked} getModifiedData={getModifiedData} />}</div>
        <div className="space20"></div>
        <h1 className="">관리자 메모</h1>
        <div className="w-full h-[150px] rounded-md bg-[#d9d9d9] border-4 border-[#b6b6b6] p-10">
          <input type="text" value={admCmmtM} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAdmCmmtM(e.target.value)}></input>
        </div>
      </div>
    </>
  );
};

export default MedicineUpdComp;
