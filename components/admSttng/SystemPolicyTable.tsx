import { dateFormat } from "@/constants/util/commUtil";
import { useRouter } from "next/router";

const SystemPolicyTable = (props: any) => {
  const policyList = props.policyList;
  console.log(props);
  const router = useRouter();

  // const goUserDtlPage = (policyId: string) => {
  // router.push(`/userMng/userDtl/${policyId}`);
  // };

  return (
    <div>
      <table className="tbl_item" summary="mdcnList">
        <colgroup>
          <col width="2%" />
          <col width="*%" />
          <col width="10%" />
          <col width="20%" />
          <col width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th>정책번호</th>
            <th>정책명</th>
            <th>정책값</th>
            <th>최초생성일</th>
            <th>최종수정일</th>
          </tr>
        </thead>
        <tbody>
          {!!policyList ? (
            policyList?.map((m: any, index: number) => {
              // if ((props.nowTablePage - 1) * 5 <= index && index < (props.nowTablePage - 1) * 5 + 5) {
              return (
                <tr key={String(m.policyId)}>
                  <td className="t_center">{m.policyId}</td>
                  <td
                    className="t_left makePointer"
                    // onClick={(e: any) => {
                    //   goUserDtlPage(m.policyId);
                    // }}
                  >
                    {m.policyName}
                  </td>
                  <td className="t_center">{m.policyValue} </td>
                  <td className="t_center">{dateFormat(m.createdAt)}</td>
                  <td className="t_center">{dateFormat(m.updatedAt)}</td>
                </tr>
              );
              // }
            })
          ) : (
            <tr>
              <td colSpan={5}>목록을 불러올 수 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SystemPolicyTable;
