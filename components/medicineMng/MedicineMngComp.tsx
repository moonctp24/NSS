import { useCallback, useEffect, useState } from "react";
import MedicineListTable from "./MedicineListTable";
import { useRouter } from "next/router";
import { useAxios } from "@/constants/util/API_UTIL";

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
    if (response && code == "200") {
      // console.log(response);
      const tmpObject = response;
      const tmpList: { [s: string]: any } = [];
      // object 형으로 받아와서 배열 형태로 변환해주기
      let i = 0;
      for (const [key, value] of Object.entries(tmpObject)) {
        tmpList[i] = value;
        i++;
      }
      setMedicineList(tmpList);
    }
  }, [code, response]);

  const goAddMdcnPage = () => {
    router.push("/medicineMng/mdcnAdd");
  };

  useEffect(() => {
    fetchData("get", "/api/medicineMng/getMdcnList", null, true);
    // setMedicineList([
    //   {
    //     item_seq: "medicineId_99999999999995",
    //     medicine_name: "약이름",
    //     company_name: "약회사",
    //     pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    //     created_at: "20240301153021",
    //     updated_at: "20240301153021",
    //   },
    //   {
    //     item_seq: "medicineId_99999999999994",
    //     medicine_name: "약이름2",
    //     company_name: "약회사2",
    //     pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    //     created_at: "20240301153021",
    //     updated_at: "20240301153021",
    //   },
    //   {
    //     item_seq: "medicineId_99999999999993",
    //     medicine_name: "약이름3",
    //     company_name: "약회사3",
    //     pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    //     created_at: "20240301153021",
    //     updated_at: "20240301153021",
    //   },
    //   {
    //     item_seq: "medicineId_99999999999991",
    //     medicine_name: "약이름4",
    //     company_name: "약회사4",
    //     pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    //     created_at: "20240301153021",
    //     updated_at: "20240301153021",
    //   },
    //   {
    //     item_seq: "medicineId_99999999999992",
    //     medicine_name: "약이름5",
    //     company_name: "약회사5",
    //     pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    //     created_at: "20240301153021",
    //     updated_at: "20240301153021",
    //   },
    //   {
    //     item_seq: "medicineId_99999999999980",
    //     medicine_name: "약이름6",
    //     company_name: "약회사",
    //     pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    //     created_at: "20240301153021",
    //     updated_at: "20240301153021",
    //   },
    //   {
    //     item_seq: "medicineId_99999999999981",
    //     medicine_name: "약이름7",
    //     company_name: "약회사2",
    //     pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    //     created_at: "20240301153021",
    //     updated_at: "20240301153021",
    //   },
    //   {
    //     item_seq: "medicineId_99999999999982",
    //     medicine_name: "약이름8",
    //     company_name: "약회사3",
    //     pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    //     created_at: "20240301153021",
    //     updated_at: "20240301153021",
    //   },
    //   {
    //     item_seq: "medicineId_99999999999983",
    //     medicine_name: "약이름9",
    //     company_name: "약회사4",
    //     pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    //     created_at: "20240301153021",
    //     updated_at: "20240301153021",
    //   },
    //   {
    //     item_seq: "medicineId_99999999999984",
    //     medicine_name: "약이름10",
    //     company_name: "약회사5",
    //     pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    //     created_at: "20240301153021",
    //     updated_at: "20240301153021",
    //   },
    // ]);
    setDomLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIngredientCnt(medicineList?.length);
  }, [medicineList]);

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
        <button className="w-[150px] h-[40px] float-right" onClick={goAddMdcnPage}>
          의약품 추가
        </button>
        <div className="m-auto	">{domLoaded && <MedicineListTable medicineList={medicineList} nowTablePage={nowTablePage} />}</div>
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
