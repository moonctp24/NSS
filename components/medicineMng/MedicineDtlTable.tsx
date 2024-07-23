import { dateFormat } from "@/constants/util/commUtil";
import { useEffect, useState } from "react";

const MedicineDtlTable = (props: any) => {
  const mDtl = props.mDtlInfo;
  const [mdcnNm, setMdcnNm] = useState("");
  const [companyNm, setCompanyNm] = useState("");
  const [effct, setEffct] = useState("");
  const [sdEffct, setSdEffct] = useState("");
  const [cautionM, setCautionM] = useState("");
  const [keepM, setKeepM] = useState("");
  const [apprnc, setApprnc] = useState("");
  const [ussg, setUssa] = useState("");

  useEffect(() => {
    setMdcnNm(mDtl?.medicineName);
    setCompanyNm(mDtl?.companyName);
    setEffct(mDtl?.effect);
    setSdEffct(mDtl?.sideEffect);
    setCautionM(mDtl?.caution);
    setKeepM(mDtl?.keepMethod);
    setApprnc(mDtl?.appearance);
    setUssa(mDtl?.usage);
  }, [mDtl]);

  useEffect(() => {
    console.log("clicked!!" + props.isSaveClicked);
    if (props.isSaveClicked) {
      let modifiedData = {
        id: mDtl?.id,
        medicineName: mdcnNm,
        companyName: companyNm,
        // description: "테스트",
        usage: ussg,
        effect: effct,
        sideEffect: sdEffct,
        caution: cautionM,
        keepMethod: keepM,
        appearance: apprnc,
        // pillImage: "https://cdn.icon-icons.com/icons2/1465/PNG/512/740pill_100923.png",
        // className: "",
        // otcName: "",
        // formCodeName: "",
      };
      props.getModifiedData(modifiedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isSaveClicked]);

  return (
    <div>
      <table className="tbl_item" summary="mdcnDtl">
        <tbody className="tableBodyTopBorderStyle">
          {!!mDtl ? ( // 의약품 수정 테이블
            <>
              <tr>
                <td>번호</td>
                <td className="">{mDtl.id}</td>
                <td>등록일시</td>
                <td>{dateFormat(mDtl.createdAt)}</td>
              </tr>
              <tr>
                <td>의약품명</td>
                <td>
                  <input type="text" value={mdcnNm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMdcnNm(e.target.value)}></input>
                </td>
                <td>수정일시</td>
                <td>{dateFormat(mDtl.updateAt)}</td>
              </tr>
              <tr>
                <td>제조사</td>
                <td>
                  <input type="text" value={companyNm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompanyNm(e.target.value)}></input>
                </td>
                <td>제조일자</td>
                <td>{dateFormat(mDtl.createdAt)}</td>
              </tr>
              <tr>
                <td>약 생김새</td>
                <td>
                  <input type="text" value={apprnc} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setApprnc(e.target.value)}></input>
                </td>
                <td>복용법</td>
                <td>
                  <input type="text" value={ussg} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUssa(e.target.value)}></input>
                </td>
              </tr>
              <tr>
                <td>효능</td>
                <td>
                  <input type="text" value={effct} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEffct(e.target.value)}></input>
                </td>
                <td>부작용</td>
                <td>
                  <input type="text" value={sdEffct} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSdEffct(e.target.value)}></input>
                </td>
              </tr>
              <tr>
                <td>보관법</td>
                <td>
                  <input type="text" value={keepM} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKeepM(e.target.value)}></input>
                </td>
                <td>주의사항</td>
                <td>
                  <input type="text" value={cautionM} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCautionM(e.target.value)}></input>
                </td>
              </tr>
            </>
          ) : (
            // <tr>
            //   <td colSpan={4}>내용을 불러올 수 없습니다.</td>
            // </tr>
            // 의약품 추가 테이블
            <>
              <tr>
                <td>번호</td>
                <td className=""></td>
                <td>등록일시</td>
                <td></td>
              </tr>
              <tr>
                <td>의약품명</td>
                <td>
                  <input type="text" value={mdcnNm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMdcnNm(e.target.value)}></input>
                </td>
                <td>수정일시</td>
                <td></td>
              </tr>
              <tr>
                <td>제조사</td>
                <td>
                  <input type="text" value={companyNm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompanyNm(e.target.value)}></input>
                </td>
                <td>제조일자</td>
                <td></td>
              </tr>
              <tr>
                <td>약 생김새</td>
                <td>
                  <input type="text" value={apprnc} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setApprnc(e.target.value)}></input>
                </td>
                <td>복용법</td>
                <td>
                  <input type="text" value={ussg} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUssa(e.target.value)}></input>
                </td>
              </tr>
              <tr>
                <td>효능</td>
                <td>
                  <input type="text" value={effct} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEffct(e.target.value)}></input>
                </td>
                <td>부작용</td>
                <td>
                  <input type="text" value={sdEffct} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSdEffct(e.target.value)}></input>
                </td>
              </tr>
              <tr>
                <td>보관법</td>
                <td>
                  <input type="text" value={keepM} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKeepM(e.target.value)}></input>
                </td>
                <td>주의사항</td>
                <td>
                  <input type="text" value={cautionM} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCautionM(e.target.value)}></input>
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineDtlTable;
