import { dateFormat } from "@/constants/util/commUtil";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const MedicineDtlTable = (props: any) => {
  const mDtl = props.mDtlInfo;
  const [mdcnNm, setMdcnNm] = useState("");
  const [companyNm, setCompanyNm] = useState("");
  const [effct, setEffct] = useState("");
  const [sdEffct, setSdEffct] = useState("");
  const [cautionM, setCautionM] = useState("");
  const [keepM, setKeepM] = useState("");

  useEffect(() => {
    setMdcnNm(mDtl.medicine_name);
    setCompanyNm(mDtl.company_name);
    setEffct(mDtl.effect);
    setSdEffct(mDtl.side_effect);
    setCautionM(mDtl.caution);
    setKeepM(mDtl.keep_method);
  }, [mDtl]);

  useEffect(() => {
    console.log("clicked!!" + props.isSaveClicked);
    if (props.isSaveClicked) {
      let modifiedData = {
        item_seq: mDtl.item_seq,
        medicine_name: mdcnNm,
        company_name: companyNm,
        description: "테스트",
        usage: "물과 함께",
        effect: effct,
        side_effect: sdEffct,
        caution: cautionM,
        keep_method: keepM,
        appearance: "흰색정제",
        pill_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
        class_name: "",
        otc_name: "",
        form_code_name: "",
      };
      props.getModifiedData(modifiedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isSaveClicked]);

  return (
    <div>
      <table className="tbl_item" summary="mdcnDtl">
        {/* <colgroup>
          <col width="2%" />
          <col width="*%" />
          <col width="*%" />
          <col width="*%" />
          <col width="17%" />
          <col width="17%" />
          <col width="20%" />
        </colgroup> */}
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          {!!mDtl ? (
            <>
              <tr>
                <td>번호</td>
                <td className="">{mDtl.item_seq}</td>
                <td>등록일시</td>
                <td>{dateFormat(mDtl.created_at)}</td>
              </tr>
              <tr>
                <td>의약품명</td>
                <td>
                  <input type="text" value={mdcnNm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMdcnNm(e.target.value)}></input>
                </td>
                <td>수정일시</td>
                <td>{dateFormat(mDtl.updated_at)}</td>
              </tr>
              <tr>
                <td>제조사</td>
                <td>
                  <input type="text" value={companyNm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompanyNm(e.target.value)}></input>
                </td>
                <td>제조일자</td>
                <td>{dateFormat(mDtl.updated_at)}</td>
              </tr>
              <tr>
                <td>약 종류</td>
                <td>{mDtl.appearance}</td>
                <td>약 이미지</td>
                <td>
                  <Image src={mDtl.pill_image} width={50} height={50} alt="pillImg"></Image>
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
            <tr>
              <td colSpan={4}>내용을 불러올 수 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineDtlTable;
