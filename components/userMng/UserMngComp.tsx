import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserMngComp = () => {
  const [usrList, setUsrList] = useState<any>(null);
  const [domLoaded, setDomLoaded] = useState(false); // 테이블 데이터 로딩 상태

  const router = useRouter();

  const codeToKor = (code: string) => {
    if (code === "ACTIVE") {
      return "일반";
    } else if (code === "ADMIN") {
      return "관리자";
    } else if (code === "INACTIVE") {
      return "비활성화";
    } else if (code === "REMOVED") {
      return "탈퇴";
    } else if (code === "BANNED") {
      return "정지";
    } else {
      return "잘못된 형식";
    }
  };

  useEffect(() => {
    setUsrList([
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
    ]);
    setTrdServerList(["일반", "관리자", "정지", "비활성화", "탈퇴"]);
    setDomLoaded(true);
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

  /**
   * 서버 선택 이벤트
   */
  const [isClicked, setIsClicked] = useState(false); // server selected YN
  const selectBoxBtnHandler = () => {
    setIsClicked(!isClicked);
  };

  const [trdServerList, setTrdServerList] = useState<any>(null); // 조회된 서버 리스트
  const [selectedValue, setSelectedValue] = useState<any>(null); // 현재 선택된 서버
  let selectedServerNm = trdServerList?.map((state: any, index: number) => (
    <li key={index}>
      <div className="selectbutton" onClick={() => answerStateValueSelectedHandler(state)}>
        {state}
      </div>
    </li>
  ));

  const answerStateValueSelectedHandler = (state: string) => {
    console.log(state);
    setSelectedValue(state);
    setIsClicked(!isClicked);
  };

  const goUsrMng = () => {
    router.push("/userMng/userDtl");
  };

  return (
    <>
      <div className="mainComponent">
        <h1>회원관리</h1>
        <div className="w-[700px] h-[800px] relative overflow-hidden bg-white">
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
                    <div className="w-[500px] usrListGrp px-3 py-3">
                      <div className="flex">
                        <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
                          <Image src={usr.user_image} alt={"usrImg"} layout="fill"></Image>
                        </div>
                        <div className="text-base	text-center px-3 py-3 cursor-pointer	" onClick={goUsrMng}>
                          {usr.user_name}
                        </div>
                      </div>
                      <div className="select_box_small" id="select_box_small">
                        <div className={`select_box_small ${isClicked && "open"}`} id="select_box_small">
                          <button className="select_txt_small" id="select_txt_small" onClick={selectBoxBtnHandler}>
                            {/* {selectedValue} */}
                            {codeToKor(usr.user_status)}
                          </button>
                          {!!selectedServerNm && <ul className="select_lst">{selectedServerNm}</ul>}
                        </div>
                      </div>
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
