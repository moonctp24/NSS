import { dateFormat } from "@/constants/util/commUtil";
import Image from "next/image";
import { useRouter } from "next/router";

const MedicineListTable = (props: any) => {
  const medicineList = props.medicineList;
  const router = useRouter();

  /**
   * 의약품 상세 페이지로 이동
   * @param itemNo 의약품 상세 조회를 위한 키값 (현재는 id -> 추후 itemNo로 변경예정)
   */
  const goMdcnUpdPage = (itemNo: String) => {
    // console.log(itemNo);
    router.push(`/medicineMng/mdcnUpd/${itemNo}`);
  };

  return (
    <div>
      <table className="tbl_item" summary="mdcnList">
        <colgroup>
          <col width="2%" />
          <col width="*%" />
          <col width="*%" />
          <col width="*%" />
          <col width="17%" />
          <col width="17%" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>의약품명</th>
            <th>이미지</th>
            <th>제조사</th>
            <th>등록일시</th>
            <th>마지막수정일시</th>
          </tr>
        </thead>
        <tbody>
          {!!medicineList ? (
            medicineList?.map((m: any, index: number) => {
              if ((props.nowTablePage - 1) * 5 <= index && index < (props.nowTablePage - 1) * 5 + 5) {
                return (
                  <tr key={String(m.id)}>
                    <td className="t_center">{index + 1}</td>
                    <td
                      className="t_left makePointer"
                      onClick={(e: any) => {
                        goMdcnUpdPage(m.id);
                      }}
                    >
                      {m.medicineName}
                    </td>
                    <td className="t_center">
                      <Image
                        width={50}
                        height={50}
                        src={
                          m.pillImage
                            ? m.pillImage.split(".").length < 3
                              ? "https://cdn.icon-icons.com/icons2/1465/PNG/512/740pill_100923.png"
                              : m.pillImage
                            : "https://cdn.icon-icons.com/icons2/1465/PNG/512/740pill_100923.png"
                        }
                        alt={"pillImg"}
                        style={{ width: "50px", height: "auto" }}
                      ></Image>
                    </td>
                    <td className="t_left">{m.companyName}</td>
                    <td className="t_center">{dateFormat(m.createdAt)}</td>
                    <td className="t_center">{dateFormat(m.updateAt)}</td>
                  </tr>
                );
              }
            })
          ) : (
            <tr>
              <td colSpan={6}>목록을 불러올 수 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineListTable;
