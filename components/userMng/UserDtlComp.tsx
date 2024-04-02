import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserDtlComp = () => {
  const router = useRouter();
  const [userDtlInfo, setUserDtlInfo] = useState<any>(Object || null);
  const [prescriptionCnt, setPrescriptionCnt] = useState(0);
  const [domLoaded, setDomLoaded] = useState(false); // 테이블 데이터 로딩 상태

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
    console.log(router.query.itemSeq);
    // item_seq로 상세정보 조회하는 통신
    let usrDtlInfo = {
      user_id: "memId_00000000000001",
      user_email: "test@email.com",
      user_name: "김이름",
      user_status: "ADMIN",
      user_image: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
      prescriptions_id_list: [
        // 이 회원이 받은 처방전 내역
        {
          prescriptions_id: "prescriptionsId_00000000000001",
          prescription_name: "처방전1",
        },
        {
          prescriptions_id: "prescriptionsId_00000000000002",
          prescription_name: "처방전2",
        },
        {
          prescriptions_id: "prescriptionsId_00000000000003",
          prescription_name: "처방전3",
        },
      ],
    };
    setUserDtlInfo(usrDtlInfo);
    setPrescriptionCnt(usrDtlInfo.prescriptions_id_list.length);
    setDomLoaded(true);
  }, []);

  const goPrscrptDtl = (prscrptId: string) => {
    router.push(`/prescriptionMng/prescriptionDtl/${prscrptId}`);
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
              <div className="text-base	text-center px-3 py-3 cursor-pointer	">{userDtlInfo.user_name}</div>
              <div> {codeToKor(userDtlInfo.user_status)}</div>
            </div>
          </div>
          <hr />
          <div className="padding20">
            <div className="usrListGrp">
              <div className="flex">
                <div>처방내역</div>
                <div className="text-[#00c1a6]">{prescriptionCnt}</div>
              </div>
              {/* <div>&gt;</div> */}
            </div>
            <div className="padding10" />
            {domLoaded &&
              (!!userDtlInfo.prescriptions_id_list ? (
                userDtlInfo.prescriptions_id_list.map((prscrpt: any, index: number) => {
                  return (
                    <div className="padding5" key={String(prscrpt.prescriptions_id)}>
                      <div
                        className="w-[90px] h-[90px] rounded-[10px] bg-white border-[3px] border-[#00c1a6]/75 cursor-pointer"
                        onClick={() => {
                          goPrscrptDtl(prscrpt.prescriptions_id);
                        }}
                      >
                        <p className="ext-sm text-center text-[#020202]">24/02/24</p>
                        <p className="text-sm text-center text-[#020202]">{prscrpt.prescription_name}</p>
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
