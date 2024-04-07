import { dateFormat } from "@/constants/util/commUtil";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PrscrptDtlComp = () => {
  const router = useRouter();
  const [prscrptDtlInfo, setPrscrptDtlInfo] = useState(Object || null);

  useEffect(() => {
    // console.log(router.query.itemSeq);
    // item_seq로 상세정보 조회하는 통신
    let dummy = {
      prescriptions_id: "prescriptionsId_00000000000001",
      prescription_name: "처방전1",
      take_days: "5",
      started_at: "20240301",
      finished_at: "20240305",
      hospital_name: "병원1",
      memo: "메모메모",
      created_at: "20240301153021",
      updated_at: "20240301153021",
      mList: [
        {
          when: "아침 식후",
          mCnt: 4,
          mList: [
            { mName: "코푸시럽", cnt: "1개", lastDay: "10일분", totalDay: "10일분" },
            { mName: "모비드캡슐", cnt: "2알", lastDay: "5일분", totalDay: "10일분" },
            { mName: "무코레바정", cnt: "1알", lastDay: "10일분", totalDay: "10일분" },
            { mName: "트라몰서방정", cnt: "반알", lastDay: "10일분", totalDay: "10일분" },
          ],
        },
        {
          when: "점심 식후",
          mCnt: 4,
          mList: [
            { mName: "코푸시럽", cnt: "1개", lastDay: "10일분", totalDay: "10일분" },
            { mName: "모비드캡슐", cnt: "2알", lastDay: "5일분", totalDay: "10일분" },
            { mName: "무코레바정", cnt: "1알", lastDay: "10일분", totalDay: "10일분" },
            { mName: "트라몰서방정", cnt: "반알", lastDay: "10일분", totalDay: "10일분" },
          ],
        },
        {
          when: "저녁 식후",
          mCnt: 4,
          mList: [
            { mName: "코푸시럽", cnt: "1개", lastDay: "10일분", totalDay: "10일분" },
            { mName: "모비드캡슐", cnt: "2알", lastDay: "5일분", totalDay: "10일분" },
            { mName: "무코레바정", cnt: "1알", lastDay: "10일분", totalDay: "10일분" },
            { mName: "트라몰서방정", cnt: "반알", lastDay: "10일분", totalDay: "10일분" },
          ],
        },
      ],
    };
    setPrscrptDtlInfo(dummy);
  }, []);

  return (
    <>
      <div className="mainComponent">
        <h1>처방전 상세</h1>
        <div>처방전명: {prscrptDtlInfo.prescription_name}</div>
        <div>총 복용일: {prscrptDtlInfo.take_days}</div>
        <div>처방병원: {prscrptDtlInfo.hospital_name}</div>
        <div>처방전 메모: {prscrptDtlInfo.memo}</div>{" "}
        <div className="w-[500px] relative overflow-hidden bg-white mx-auto my-0">
          <div className="w-full mt-10">
            <div className="w-[345px] h-[38px] rounded-[10px] bg-white border-[3px] border-[#00c1a6]/75">
              <p className="text-sm text-center text-[#020202]">{dateFormat(prscrptDtlInfo.started_at)}</p>
            </div>
          </div>
          {!!prscrptDtlInfo.mList ? (
            prscrptDtlInfo.mList.map((m: any, index: number) => {
              return (
                <div key={index} className="py-5">
                  <div className="w-full flex">
                    <p className="w-[205px] text-[15px] text-left text-[#020202]">{m.when}</p>
                    <p className="w-[72px] text-xs text-left text-[#00c1a6]/75">1회분량 </p>
                    <p className="w-[72px] text-xs text-left text-[#00c1a6]/75">남은양</p>
                    <p className="w-[72px] text-xs text-left text-[#00c1a6]/75">처방량</p>
                  </div>
                  {m.mList ? (
                    m.mList.map((md: any, index2: number) => {
                      return (
                        <div key={index + String(index2)}>
                          <div className="w-full flex">
                            <p className="w-[205px] h-[30px] text-sm text-left text-[#020202]">{"o " + md.mName}</p>
                            <p className="w-[72px] text-[10px] text-left text-[#232323]">{md.cnt}</p>
                            <p className="w-[72px] text-[10px] text-left text-[#232323]">{md.lastDay}</p>
                            <p className="w-[72px] text-[10px] text-left text-[#232323]">{md.totalDay}</p>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div>none</div>
                  )}
                </div>
              );
            })
          ) : (
            <div>목록을 불러올 수 없습니다.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default PrscrptDtlComp;
