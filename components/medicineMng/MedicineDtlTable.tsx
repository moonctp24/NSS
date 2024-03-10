import { dateFormat } from "@/constants/util/commUtil";
import Image from "next/image";
import { useEffect, useState } from "react";

const MedicineDtlTable = (props: any) => {
  const mDtl = props.mDtlInfo;
  const [mdcnNm, setMdcnNm] = useState("");
  const [companyNm, setCompanyNm] = useState("");
  const [effct, setEffct] = useState("");
  const [sdEffct, setSdEffct] = useState("");

  useEffect(() => {
    setMdcnNm(mDtl.medicine_name);
    setCompanyNm(mDtl.company_name);
    setEffct(mDtl.effect);
    setSdEffct(mDtl.side_effect);
  }, [mDtl]);

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
                <td>{mDtl.keep_method}</td>
                <td>주의사항</td>
                <td>{mDtl.caution}</td>
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
