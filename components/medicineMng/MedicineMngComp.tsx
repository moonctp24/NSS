import { useCallback, useEffect, useState } from "react";
import MedicineListTable from "./MedicineListTable";
import { useRouter } from "next/router";
import { useAxios } from "@/constants/util/API_UTIL";
import SearchComp from "../comm/searchComp/searchComp";

const MedicineMngComp = () => {
  const [domLoaded, setDomLoaded] = useState(false); // 테이블 데이터 로딩 상태
  const [medicineList, setMedicineList] = useState<any>(null);
  const [nowTablePage, setNowTablePage] = useState(1);
  const [ingredientCnt, setIngredientCnt] = useState(0);

  const { code, response, fetchData } = useAxios();

  const router = useRouter();

  useEffect(() => {
    getResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, response, router]);

  const getResult = useCallback(() => {
    // console.log(`code :: ${code} / response :: `, response);
    // console.log(Object.entries(response).length);
    if (response && code == "200") {
      if (true) {
        // 통신 잘됐을 때
        // object 형으로 받아와서 배열 형태로 변환해주기
        const tmpObject = response;
        const tmpList: { [s: string]: any } = [];
        let i = 0;
        for (const [key, value] of Object.entries(tmpObject)) {
          tmpList[i] = value;
          i++;
        }
        // console.log(tmpList);
        setMedicineList(tmpList);
      } else {
        // 통신 안됐을 때
        setMedicineList([
          {
            itemSeq: "medicineId_99999999999995",
            medicineName: "약이름",
            companyName: "약회사",
            pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
            created_at: "20240301153021",
            updated_at: "20240301153021",
          },
          {
            itemSeq: "medicineId_99999999999994",
            medicineName: "약이름2",
            companyName: "약회사2",
            pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
            created_at: "20240301153021",
            updated_at: "20240301153021",
          },
          {
            itemSeq: "medicineId_99999999999993",
            medicineName: "약이름3",
            companyName: "약회사3",
            pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
            created_at: "20240301153021",
            updated_at: "20240301153021",
          },
          {
            itemSeq: "medicineId_99999999999991",
            medicineName: "약이름4",
            companyName: "약회사4",
            pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
            created_at: "20240301153021",
            updated_at: "20240301153021",
          },
          {
            itemSeq: "medicineId_99999999999992",
            medicineName: "약이름5",
            companyName: "약회사5",
            pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
            created_at: "20240301153021",
            updated_at: "20240301153021",
          },
          {
            itemSeq: "medicineId_99999999999980",
            medicineName: "약이름6",
            companyName: "약회사",
            pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
            created_at: "20240301153021",
            updated_at: "20240301153021",
          },
          {
            itemSeq: "medicineId_99999999999981",
            medicineName: "약이름7",
            companyName: "약회사2",
            pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
            created_at: "20240301153021",
            updated_at: "20240301153021",
          },
          {
            itemSeq: "medicineId_99999999999982",
            medicineName: "약이름8",
            companyName: "약회사3",
            pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
            created_at: "20240301153021",
            updated_at: "20240301153021",
          },
          {
            itemSeq: "medicineId_99999999999983",
            medicineName: "약이름9",
            companyName: "약회사4",
            pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
            created_at: "20240301153021",
            updated_at: "20240301153021",
          },
          {
            itemSeq: "medicineId_99999999999984",
            medicineName: "약이름10",
            companyName: "약회사5",
            pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
            created_at: "20240301153021",
            updated_at: "20240301153021",
          },
        ]);
      }
    }
  }, [code, response]);

  useEffect(() => {
    fetchData("get", "/api/medicineMng/getMdcnList", null, true); // 의약품 리스트 조회 통신
    setDomLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIngredientCnt(medicineList?.length); // 테이블 페이징을 위한 의약품 갯수 카운트
    setNowTablePage(1);
  }, [medicineList]);

  /**
   * 의약품 상세 조회 페이지 이동
   */
  const goAddMdcnPage = () => {
    router.push("/medicineMng/mdcnAdd");
  };

  /**
   * 의약품 검색 통신
   * @param searchMdcn 검색할 의약품 단어
   */
  const searchItemBtnHandler = (searchMdcn: string) => {
    let nameParam = {
      name: searchMdcn,
    };
    fetchData("get", "/api/medicineMng/getMdcnList", nameParam, true); // 의약품 리스트 조회 통신
  };

  /**
   * 페이징 처리
   * @returns
   */
  const drawTablePage = () => {
    let tmpArray = [];
    let pageRange = Math.ceil(ingredientCnt / 5);
    for (let index = 1; index <= pageRange; index++) {
      if (index === nowTablePage) {
        // 현재 보고있는 페이지면 css 다르게
        tmpArray.push(
          <strong className="num" onClick={() => clickOtherPageHandler(index)}>
            {index}
          </strong>
        );
      } else {
        tmpArray.push(
          <div className="num" onClick={() => clickOtherPageHandler(index)}>
            {index}
          </div>
        );
      }
    }
    return tmpArray;
  };
  const clickOtherPageHandler = (clickedPage: number) => {
    setNowTablePage(clickedPage);
  };

  return (
    <>
      <div className="mainComponent">
        <h1>의약품 목록</h1>
        <SearchComp searchItemBtnHandler={searchItemBtnHandler} />
        <button className="w-[150px] h-[40px] float-right" onClick={goAddMdcnPage}>
          의약품 추가
        </button>
        <div className="m-auto">{domLoaded && <MedicineListTable medicineList={medicineList} nowTablePage={nowTablePage} />}</div>
        {/* ======= paging ======= */}
        <div className="paging">
          <div className="first" onClick={() => clickOtherPageHandler(1)}>
            <span className="hidden">처음페이지</span>
          </div>
          <div className="prev" onClick={() => clickOtherPageHandler(nowTablePage - 1 < 1 ? 1 : nowTablePage - 1)}>
            <span className="hidden">이전페이지</span>
          </div>
          {drawTablePage()}
          <div className="next" onClick={() => clickOtherPageHandler(nowTablePage + 1 > Math.ceil(ingredientCnt / 5) ? Math.ceil(ingredientCnt / 5) : nowTablePage + 1)}>
            <span className="hidden">다음페이지</span>
          </div>
          <div className="last" onClick={() => clickOtherPageHandler(Math.ceil(ingredientCnt / 5))}>
            <span className="hidden">마지막페이지</span>
          </div>
        </div>
        {/* ======= paging ======= */}
      </div>
    </>
  );
};

export default MedicineMngComp;
