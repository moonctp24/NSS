import { useAxios } from "@/constants/util/API_UTIL";
import { codeToKor } from "@/constants/util/commUtil";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const UserMngComp = () => {
  const [usrList, setUsrList] = useState<any>(null);
  const [domLoaded, setDomLoaded] = useState(false); // 테이블 데이터 로딩 상태

  const router = useRouter();
  const { code, response, fetchData } = useAxios();

  useEffect(() => {
    getResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, response, router]);

  const getResult = useCallback(() => {
    // console.log(`code :: ${code} / response :: `, response);
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
                user_id: "memId_00000000000001",
                user_name: "김이름",
                user_status: "ACTIVE",
                user_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
              },
              {
                user_id: "memId_00000000000002",
                user_name: "김이름1",
                user_status: "ADMIN",
                user_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
              },
              {
                user_id: "memId_00000000000003",
                user_name: "김이름2",
                user_status: "INACTIVE",
                user_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
              },
              {
                user_id: "memId_00000000000004",
                user_name: "김이름3",
                user_status: "REMOVED",
                user_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
              },
              {
                user_id: "memId_00000000000005",
                user_name: "김이름4",
                user_status: "BANNED",
                user_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
              },
            ]
      );
      setDomLoaded(true);
    }
  }, [code, response]);

  useEffect(() => {
    fetchData("get", "/api/userMng/getUserList", null, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [productLinkInputText, setProductLinkInputText] = useState("");
  // 돋보기 버튼 클릭
  const searchItemBtnHandler = () => {
    // if (searchItemNm?.length <= 0) {
    //   dispatch(alertAction.openModal({ cont: "조회할 아이템 명을 입력하세요." }));
    //   return false;
    // }
    // setProductLinkInputText(true);
    // console.log("searchItemNm:::", searchItemNm);
    let data = { itemNm: productLinkInputText };
    // fetchData("/api/admin/item/searchItem", data, true);
  };

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
                  value={productLinkInputText}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProductLinkInputText(e.target.value)}
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
                  <div key={String(usr.user_id)}>
                    <div className="w-[400px] usrListGrp px-3 py-3 mx-auto my-0">
                      <div className="flex">
                        <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
                          <Image src={usr.user_image} alt={"usrImg"} layout="fill"></Image>
                        </div>
                        <div className="text-base	text-center px-3 py-3 cursor-pointer	" onClick={() => goUsrMng(usr.user_id)}>
                          {usr.user_name}
                        </div>
                      </div>
                      <div className="text-[#00c1a6] font-bold	py-3">{codeToKor(usr.user_status)}</div>
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
