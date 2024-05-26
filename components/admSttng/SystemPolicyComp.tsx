import { useEffect, useState } from "react";
import SystemPolicyTable from "./SystemPolicyTable";

const SystemPolicyComp = () => {
  const [domLoaded, setDomLoaded] = useState(false); // 테이블 데이터 로딩 상태
  const [sysPolicyList, setSysPolicyList] = useState<any>(null);

  useEffect(() => {
    setSysPolicyList([
      {
        policyId: "1",
        policyName: "정책1",
        policyValue: "Y",
        createdAt: "20240505242323",
        updatedAt: "20240505242323",
      },
      {
        policyId: "2",
        policyName: "정책2",
        policyValue: "N",
        createdAt: "20240505242323",
        updatedAt: "20240505242323",
      },
      {
        policyId: "3",
        policyName: "정책3",
        policyValue: "T",
        createdAt: "20240505242323",
        updatedAt: "20240505242323",
      },
      {
        policyId: "4",
        policyName: "정책4",
        policyValue: "Y",
        createdAt: "20240505242323",
        updatedAt: "20240505242323",
      },
      {
        policyId: "5",
        policyName: "정책5",
        policyValue: "Y",
        createdAt: "20240505242323",
        updatedAt: "20240505242323",
      },
    ]);
    setDomLoaded(true);
  }, []);
  /**
   * 페이징 처리
   * @returns
   */
  const [nowTablePage, setNowTablePage] = useState(1);
  const [ingredientCnt, setIngredientCnt] = useState(0);

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
        <h1>시스템 정책 관리</h1>
        <div className="m-auto">{domLoaded && <SystemPolicyTable policyList={sysPolicyList} nowTablePage={nowTablePage} />}</div>
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
      </div>
    </>
  );
};

export default SystemPolicyComp;
