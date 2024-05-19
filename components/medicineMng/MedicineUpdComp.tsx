import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import MedicineDtlTable from "./MedicineDtlTable";
import { useAxios } from "@/constants/util/API_UTIL";
import axios from "axios";
import Image from "next/image";
import { confirmAction } from "@/store/modal/confirm-slice";
import { useDispatch } from "react-redux";
import { alertAction } from "@/store/modal/alert-slice";

const MedicineUpdComp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [mDtlInfo, setMDtlInfo] = useState<any>(Object || null);
  const [domLoaded, setDomLoaded] = useState(false); // 테이블 데이터 로딩 상태
  const [admCmmtM, setAdmCmmtM] = useState("");
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const { code, response, message, fetchData } = useAxios();
  const [isInitGet, setIsInitGet] = useState(false);
  const [isSave, setIsSave] = useState(false);

  useEffect(() => {
    getResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, response, message, router]);

  const getResult = useCallback(() => {
    // console.log(`code :: ${code} / response :: `, response, "/ message:: ", message);
    if (isInitGet) {
      setIsInitGet(false);
      if (response && code == "200") {
        setMDtlInfo(response);
        setAdmCmmtM(response.admin_comment || "관리자 코멘트는 없습니다");
      } else {
        // console.log("fail");
        // 더미 데이터 세팅
        let tmpResData = {
          id: 2,
          itemNo: "1111",
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
          adminComment: "관리자 코멘트",
        };
        setMDtlInfo(tmpResData);
        setAdmCmmtM(tmpResData.adminComment || "관리자 코멘트는 없습니다");
      }
    }
    if (isSave) {
      setIsSave(false);
      if (response && code == "200") {
        dispatch(alertAction.openModal({ cont: message }));
        router.push("/medicineMng/mdcnList");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, message, response]);

  useEffect(() => {
    setIsInitGet(true);
    const getParam = {
      // itemSeq: router.query.itemSeq,
      id: router.query.itemSeq,
    };
    fetchData("get", "/api/medicineMng/getMdcnDtl", getParam, true);
    setDomLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * 의약품 목록 페이지로 이동
   */
  const goMcdnListPage = () => {
    router.push("/medicineMng/mdcnList");
  };

  /**
   * 의약품 수정사항 저장 클릭 이벤트 함수
   */
  const mDtlUpdSave = () => {
    setIsSaveClicked(true);
  };

  const getModifiedData = (modifiedData: any) => {
    if (isSaveClicked) {
      setIsSave(true);
      modifiedData.adminComment = admCmmtM;
      modifiedData.id = router.query.itemSeq;
      // console.log(modifiedData);
      fetchData("post", "/api/medicineMng/updMdcnDtl", modifiedData, true);
    }
    setIsSaveClicked(false);
  };

  /**
   * 의약품 삭제하기 버튼
   * @param delItem 삭제할 의약품 정보
   */
  const itemDelBtn = () => {
    dispatch(confirmAction.openModal({ cont: mDtlInfo.medicineName + " 를 삭제하시겠습니까?", callback: modalCallback }));
  };
  const modalCallback = () => {
    dispatch(confirmAction.closeModal());
    // console.log(mDtlInfo.medicineName, " real delete");
    const param = {
      id: mDtlInfo.id,
    };
    fetchData("post", "/api/medicineMng/delMedicine", param, true); // 의약품 리스트 조회 통신
  };

  return (
    <>
      <div className="mainComponent">
        <h1>의약품 상세</h1>
        <div className="relative w-[200px] h-[70px] flex float-left">
          <Image src={mDtlInfo.pill_image || "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg"} width={150} height={150} alt="pillImg" style={{ width: "auto", height: "auto" }}></Image>
        </div>
        <div className="relative w-[250px] h-[40px] flex float-right">
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
        <div className="m-auto mt-[130px]">{domLoaded && <MedicineDtlTable mDtlInfo={mDtlInfo} isSaveClicked={isSaveClicked} getModifiedData={getModifiedData} />}</div>
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
