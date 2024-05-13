import { codeToKor, dateFormat } from "@/constants/util/commUtil";
import { useRouter } from "next/router";

const UserListTable = (props: any) => {
  const usrList = props.usrList;
  const router = useRouter();

  const goUserDtlPage = (userId: string) => {
    router.push(`/userMng/userDtl/${userId}`);
  };

  return (
    <div>
      <table className="tbl_item" summary="mdcnList">
        <colgroup>
          <col width="2%" />
          <col width="*%" />
          <col width="*%" />
          <col width="*%" />
          <col width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th>회원번호</th>
            <th>회원 이메일</th>
            <th>회원 이름</th>
            <th>상태</th>
            <th>계정생성일</th>
          </tr>
        </thead>
        <tbody>
          {!!usrList ? (
            usrList?.map((m: any, index: number) => {
              if ((props.nowTablePage - 1) * 5 <= index && index < (props.nowTablePage - 1) * 5 + 5) {
                return (
                  <tr key={String(m.userId)}>
                    <td className="t_center">{m.userId}</td>
                    <td
                      className="t_left makePointer"
                      onClick={(e: any) => {
                        goUserDtlPage(m.userId); // todo:: id -> itemSeq
                      }}
                    >
                      {m.userEmail}
                    </td>
                    <td className="t_left">{m.username} </td>
                    <td className="t_center">{codeToKor(m.userStatus)}</td>
                    <td className="t_center">{dateFormat(m.createdAt)}</td>
                  </tr>
                );
              }
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

export default UserListTable;
