import { dateFormat } from "@/constants/util/commUtil";
import { confirmAction } from "@/store/modal/confirm-slice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const MedicineListTable = (props: any) => {
  const medicineList = props.medicineList;
  const dispatch = useDispatch();
  const router = useRouter();

  const itemDelBtn = (itemNo: String) => {
    // alert(itemNo + " 를 삭제하시겠습니까?");
    dispatch(confirmAction.openModal({ cont: itemNo + " 를 삭제하시겠습니까?" }));
    console.log(itemNo + " deleted");
  };

  const goMdcnUpdPage = (itemNo: String) => {
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
          <col width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>의약품명</th>
            <th>이미지</th>
            <th>제조사</th>
            <th>등록일시</th>
            <th>마지막수정일시</th>
            <th>버튼</th>
          </tr>
        </thead>
        <tbody>
          {!!medicineList ? (
            medicineList?.map((m: any, index: number) => {
              if ((props.nowTablePage - 1) * 5 <= index && index < (props.nowTablePage - 1) * 5 + 5) {
                return (
                  <tr key={String(m.item_seq)}>
                    <td className="t_center">{index + 1}</td>
                    <td className="t_left">{m.medicine_name}</td>
                    <td className="t_center">
                      <Image width={50} height={50} src={m.pill_image} alt={"pillImg"}></Image>
                    </td>
                    <td className="t_left">{m.company_name}</td>
                    <td className="t_center">{dateFormat(m.created_at)}</td>
                    <td className="t_center">{dateFormat(m.updated_at)}</td>
                    <td className="">
                      <button
                        className="inTableBtn"
                        onClick={() => {
                          goMdcnUpdPage(m.item_seq);
                        }}
                      >
                        수정
                      </button>
                      <button
                        className="btn_gray inTableBtn"
                        onClick={(e: any) => {
                          itemDelBtn(m.item_seq);
                        }}
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                );
              }
            })
          ) : (
            <tr>
              <td colSpan={7}>목록을 불러올 수 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineListTable;
