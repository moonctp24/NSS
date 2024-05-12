import { useAxios } from "@/constants/util/API_UTIL";
import { codeToKor } from "@/constants/util/commUtil";
import { alertAction } from "@/store/modal/alert-slice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const UserMngComp = () => {
  const [usrList, setUsrList] = useState<any>(null);
  const [domLoaded, setDomLoaded] = useState(false); // 테이블 데이터 로딩 상태
  const [searchNm, setSearchNm] = useState(""); // 검색할 사용자 이름
  const [isSearchNm, setIsSearchNm] = useState(false);
  const [isGetInitData, setIsGetInitData] = useState(false);

  const router = useRouter();
  const { code, response, fetchData } = useAxios();
  const dispatch = useDispatch();

  useEffect(() => {
    getResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, response, router]);

  const getResult = useCallback(() => {
    // console.log(`code :: ${code} / response :: `, response);
    if (isGetInitData) {
      setIsGetInitData(false);

      if (response && code == "200") {
        console.log(response);
        const tmpObject = response;
        const tmpList: { [s: string]: any } = [];
        // object 형으로 받아와서 배열 형태로 변환해주기
        let i = 0;
        for (const [key, value] of Object.entries(tmpObject)) {
          tmpList[i] = value;
          i++;
        }
        setUsrList(
          tmpList.length > 0
            ? tmpList
            : [
                {
                  userId: "memId_00000000000001",
                  username: "김이름",
                  userStatus: "ACTIVE",
                  user_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
                },
                {
                  userId: "memId_00000000000002",
                  username: "김이름1",
                  userStatus: "ADMIN",
                  user_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
                },
                {
                  userId: "memId_00000000000003",
                  username: "김이름2",
                  userStatus: "INACTIVE",
                  user_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
                },
                {
                  userId: "memId_00000000000004",
                  username: "김이름3",
                  userStatus: "REMOVED",
                  user_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
                },
                {
                  userId: "memId_00000000000005",
                  username: "김이름4",
                  userStatus: "BANNED",
                  user_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
                },
              ]
        );
        setDomLoaded(true);
      }
    }

    if (isSearchNm) {
      setIsSearchNm(false);
      if (response && code == "200") {
        console.log(response);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, response]);

  /**
   * 최초 회원 리스트 조회
   */
  useEffect(() => {
    setIsGetInitData(true);
    fetchData("get", "/api/userMng/getUserList", null, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * 회원 검색을 위한 돋보기 버튼 클릭
   * @returns
   */
  const searchItemBtnHandler = () => {
    if (searchNm?.length <= 0) {
      dispatch(alertAction.openModal({ cont: "조회할 사용자 이름을 입력하세요." }));
      return false;
    } else {
      setIsSearchNm(true);
    }
    let data = { username: searchNm };
    fetchData("post", "/api/userMng/searchUsername", data, true);
  };

  /**
   * 선택한 회원의 상세 정보 조회 페이지 이동
   * @param userId 회원 식별자
   */
  const goUsrMng = (userId: String) => {
    router.push(`/userMng/userDtl/${userId}`);
  };

  return (
    <>
      <div className="mainComponent">
        <h1>회원관리</h1>
        <div className="w-[500px] h-[800px] relative overflow-hidden bg-white mx-auto my-0">
          <div className="w-full">
            <div className="srch_area">
              <div className="frm_srch">
                <input
                  type="text"
                  id="itemSrch"
                  // ref={itemSrch}
                  className="ipt"
                  placeholder="검색"
                  value={searchNm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchNm(e.target.value)}
                  onKeyDown={(e: React.KeyboardEvent) => {
                    if (e.key === "Enter") {
                      searchItemBtnHandler();
                    }
                  }}
                />
                <button type="submit" className="btn_ico_srch" onClick={searchItemBtnHandler}>
                  <span className="hidden" onClick={searchItemBtnHandler}>
                    검색하기
                  </span>
                </button>
              </div>
            </div>
          </div>
          {domLoaded &&
            (!!usrList ? (
              usrList.map((usr: any, index: number) => {
                return (
                  <div key={String(usr.userId)}>
                    <div className="w-[400px] usrListGrp px-3 py-3 mx-auto my-0">
                      <div className="flex">
                        <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
                          <Image src={usr.user_image || "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg"} alt={"usrImg"} layout="fill"></Image>
                        </div>
                        <div className="text-base	text-center px-3 py-3 cursor-pointer	" onClick={() => goUsrMng(usr.userId)}>
                          {usr.username}
                        </div>
                      </div>
                      <div className="text-[#00c1a6] font-bold	py-3">{codeToKor(usr.userStatus)}</div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>목록을 불러올 수 없습니다.</div>
            ))}
        </div>
      </div>
    </>
  );
};

export default UserMngComp;
