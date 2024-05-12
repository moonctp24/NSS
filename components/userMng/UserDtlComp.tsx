import { useAxios } from "@/constants/util/API_UTIL";
import { codeToKor } from "@/constants/util/commUtil";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const UserDtlComp = () => {
  const router = useRouter();
  const [userDtlInfo, setUserDtlInfo] = useState<any>(Object || null);
  const [prescriptionCnt, setPrescriptionCnt] = useState(0);
  const [domLoaded, setDomLoaded] = useState(false); // 테이블 데이터 로딩 상태
  const { code, response, fetchData } = useAxios();

  useEffect(() => {
    getResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, response, router]);

  const getResult = useCallback(() => {
    console.log(`code :: ${code} / response :: `, response);
    if (response && code == "200") {
      if (response.status === 200) {
        setUserDtlInfo(response);
        setPrescriptionCnt(response.prescriptionsIdList?.length);
        setDomLoaded(true);
      } else {
        let usrDtlInfo = {
          userId: "memId_00000000000001",
          userEmail: "test@email.com",
          username: "김이름",
          userStatus: "ADMIN",
          user_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
          prescriptionsIdList: [
            // 이 회원이 받은 처방전 내역
            {
              prescriptionsId: "prescriptionsId_00000000000001",
              prescriptionName: "처방전1",
            },
            {
              prescriptionsId: "prescriptionsId_00000000000002",
              prescriptionName: "처방전2",
            },
            {
              prescriptionsId: "prescriptionsId_00000000000003",
              prescriptionName: "처방전3",
            },
          ],
        };
        setUserDtlInfo(usrDtlInfo);
        setPrescriptionCnt(usrDtlInfo.prescriptionsIdList.length);
        setDomLoaded(true);
      }
    }
  }, [code, response]);

  useEffect(() => {
    console.log(router.query.userSeq);
    // fetchData("get", "/api/userMng/getUserDtl", null, true);
    axios
      .get("http://3.39.214.33:8081/api/free/user", {
        params: {
          userEmail: "test2",
        },
      })
      .then((data) => {
        console.log("success");
        console.log(data);
        if (data.status === 200) {
          // setMDtlInfo(data.data.data);
          // setAdmCmmtM(data.data.data.admin_comment || "관리자 코멘트는 없습니다");
          let usrDtlInfo = {
            userId: "memId_00000000000001",
            userEmail: "test@email.com",
            username: "김이름",
            userStatus: "ADMIN",
            user_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
            prescriptionsIdList: [
              // 이 회원이 받은 처방전 내역
              {
                prescriptionsId: "prescriptionsId_00000000000001",
                prescriptionName: "처방전1",
              },
              {
                prescriptionsId: "prescriptionsId_00000000000002",
                prescriptionName: "처방전2",
              },
              {
                prescriptionsId: "prescriptionsId_00000000000003",
                prescriptionName: "처방전3",
              },
            ],
          };

          setUserDtlInfo(usrDtlInfo);
          setPrescriptionCnt(usrDtlInfo.prescriptionsIdList.length);
          setDomLoaded(true);
        }
      })
      .catch(() => {
        console.log("fail");
        // 더미 데이터 세팅
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goPrscrptDtl = (prscrptId: string) => {
    router.push(`/prescriptionMng/prescriptionDtl/${prscrptId}`);
  };

  /**
   * 등급 선택 이벤트
   */
  const [isClicked, setIsClicked] = useState(false); // server selected YN
  const selectBoxBtnHandler = () => {
    setIsClicked(!isClicked);
  };

  const [stateList, setStateList] = useState<any>(["ACTIVE", "ADMIN", "BANNED", "INACTIVE", "REMOVED"]);
  const [selectedValue, setSelectedValue] = useState<any>(null); // 현재 선택된 status
  let selectedStatusNm = stateList?.map((state: any, index: number) => (
    <li key={index}>
      <div className="selectbutton" onClick={() => answerStateValueSelectedHandler(state)}>
        {codeToKor(state)}
      </div>
    </li>
  ));

  const answerStateValueSelectedHandler = (state: string) => {
    console.log(state);
    setSelectedValue(state);
    setIsClicked(!isClicked);
    let paramD = {
      userEmail: userDtlInfo.userEmail,
      userStatus: state,
    };
    fetchData("post", "/api/userMng/updUserDtl", paramD, true);
  };

  /**
   * 회원 목록으로 이동
   */
  const goUserListPage = () => {
    router.push("/userMng/userList");
  };

  return (
    <>
      <div className="mainComponent">
        <h1>회원관리 상세</h1>
        <div className="w-[500px]">
          <div className=" usrListGrp px-3 py-3">
            <div className="flex">
              <div className="relative h-[50px] w-[50px] rounded-full overflow-hidden">
                <Image src={userDtlInfo.user_image} alt={"usrImg"} layout="fill"></Image>
              </div>
              <div className="text-base	text-center px-3 py-3 cursor-pointer	">{userDtlInfo.username}</div>
              <div className="select_box_small" id="select_box_small">
                <div className={`select_box_small ${isClicked && "open"}`} id="select_box_small">
                  <button className="select_txt_small" id="select_txt_small" onClick={selectBoxBtnHandler}>
                    {codeToKor(selectedValue ? selectedValue : userDtlInfo.userStatus)}
                  </button>
                  {!!selectedStatusNm && <ul className="select_lst">{selectedStatusNm}</ul>}
                </div>
              </div>
            </div>
            <button className="w-[100px] h-[40px] btn_gray float-right" onClick={goUserListPage}>
              목록
            </button>
          </div>
          <hr />
          <div className="padding20">
            <div className="usrListGrp">
              <div className="flex">
                <div>처방내역</div>
                &nbsp;
                <div className="text-[#00c1a6]">{prescriptionCnt}</div>
              </div>
            </div>
            <div className="padding10" />
            {domLoaded &&
              (!!userDtlInfo.prescriptionsIdList ? (
                userDtlInfo.prescriptionsIdList.map((prscrpt: any, index: number) => {
                  return (
                    <div className="padding5" key={String(prscrpt.prescriptionsId)}>
                      <div
                        className="w-[90px] h-[90px] rounded-[10px] bg-white border-[3px] border-[#00c1a6]/75 cursor-pointer"
                        onClick={() => {
                          goPrscrptDtl(prscrpt.prescriptionsId);
                        }}
                      >
                        <p className="ext-sm text-center text-[#020202]">24/02/24</p>
                        <p className="text-sm text-center text-[#020202]">{prscrpt.prescriptionName}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>목록을 불러올 수 없습니다.</div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDtlComp;
