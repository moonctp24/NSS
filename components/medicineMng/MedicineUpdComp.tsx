import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MedicineDtlTable from "./MedicineDtlTable";
import { useAxios } from "@/constants/util/API_UTIL";
import axios from "axios";

const MedicineUpdComp = () => {
  const router = useRouter();
  const [mDtlInfo, setMDtlInfo] = useState<any>(Object || null);
  const [domLoaded, setDomLoaded] = useState(false); // 테이블 데이터 로딩 상태
  const [admCmmtM, setAdmCmmtM] = useState("");
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const { code, response, fetchData } = useAxios();

  useEffect(() => {
    console.log(router.query.itemSeq);
    let paramD = {
      itemSeq: router.query.itemSeq,
      id: 2,
    };
    // axios
    //   .get("http://3.39.214.33:8081/api/free/medicine", {
    //     params: {
    //       itemSeq: router.query.itemSeq,
    //       id: 2,
    //     },
    //   })
    //   .then(() => {
    //     console.log("success");
    //   })
    //   .catch(() => {
    //     console.log("fail");
    //   });
    fetchData("get", `/api/medicineMng/getMdcnDtl`, paramD, true);
    // item_seq로 상세정보 조회하는 통신
    let tmpResData = {
      id: 2,
      medicineName: "겔포스현탁액(인산알루미늄겔)",
      companyName: "(주)보령",
      description: "",
      usage: "성인은 1회 1포씩, 1일 3~4회 식간(식사 때와 식사 때 사이) 및 취침 시 복용합니다.\n\n연령 또는 증상에 따라 적절히 증감합니다.\n",
      effect: "이 약은 위·십이지장 궤양, 위염, 위산과다(속쓰림, 위통, 구역, 구토)의 제산작용 및 증상의 개선에 사용합니다.\n",
      sideEffect: "변비 등이 나타날 수 있습니다.\n",
      caution: "이 약을 복용하기 전에 신장장애, 변비 환자는 의사 또는 약사와 상의하십시오.\n",
      warning: "",
      interaction: null,
      keepMethod: "빛을 피해 실온에서 보관하십시오.\n",
      appearance: "",
      colorClass1: "",
      colorClass2: "",
      pillImage: "",
      className: "",
      otcName: "",
      formCodeName: "",
      itemSeq: "197400207",
      admin_comment: "관리자 코멘트",
    };
    setMDtlInfo(tmpResData);
    setDomLoaded(true);
    setAdmCmmtM(tmpResData.admin_comment);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      // console.log(modifiedData);
      fetchData("post", "/api/medicineMng/updMdcnDtl", modifiedData, true);
    }
    setIsSaveClicked(false);
  };
  const itemDelBtn = (delItem: any) => {
    // alert(itemNo + " 를 삭제하시겠습니까?");
    // dispatch(confirmAction.openModal({ cont: delItem.medicineName + " 를 삭제하시겠습니까?" }));
    console.log(delItem.medicineName + " deleted");
    axios
      .get("http://3.39.214.33:8081/api/free/medicine", {
        params: {
          itemSeq: delItem.itemSeq,
          id: delItem.itemNo,
        },
      })
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("fail");
      });
    // const AXIOS = axios.create({
    //   withCredentials: true,
    //   headers: {
    //     "Content-Type": "application/json; charset=utf-8",
    //   },
    // });
    // let data = {
    //   item_seq: itemNo,
    // };

    // const res = AXIOS.post("http://3.39.214.33:8081/api/login", JSON.stringify(data));
    // console.log(res);
  };

  return (
    <>
      <div className="mainComponent">
        <h1>의약품 상세</h1>
        <div className="relative w-[200px] h-[40px] flex float-right">
          <button className="h-[40px] float-right" onClick={mDtlUpdSave}>
            저장
          </button>
          <button className="h-[40px] btn_gray float-right" onClick={itemDelBtn}>
            삭제
          </button>
          <button className="h-[40px] btn_gray float-right" onClick={goMcdnListPage}>
            목록
          </button>
        </div>
        <div className="m-auto	mt-20">{domLoaded && <MedicineDtlTable mDtlInfo={mDtlInfo} isSaveClicked={isSaveClicked} getModifiedData={getModifiedData} />}</div>
        <div className="space20"></div>
        <h1>관리자 메모</h1>
        <div className="w-full h-[150px] rounded-md bg-[#d9d9d9] border-4 border-[#b6b6b6] p-5">
          <textarea className="admCommentTextArea" value={admCmmtM} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAdmCmmtM(e.target.value)} />
        </div>
      </div>
    </>
  );
};

export default MedicineUpdComp;
