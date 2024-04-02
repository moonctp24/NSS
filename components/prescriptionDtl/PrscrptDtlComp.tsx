import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PrscrptDtlComp = () => {
  const router = useRouter();
  const [prscrptDtlInfo, setPrscrptDtlInfo] = useState(Object || null);

  useEffect(() => {
    console.log(router.query.itemSeq);
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
    };
    setPrscrptDtlInfo(dummy);
  }, []);

  return (
    <>
      <div className="mainComponent">
        <div className="w-[390px] h-[1000px] relative overflow-hidden bg-white">
          <div className="w-[443px] h-[571px]">
            <p className="w-[205px] h-[30px] absolute left-[19px] top-[218px] text-[15px] text-left text-[#020202]">아침 식후</p>
            <div className="w-[294px] h-[517px]">
              <p className="w-[205px] h-[30px] absolute left-[76px] top-[258px] text-sm text-left text-[#020202]">코푸시럽</p>
              <div className="w-[102px] h-[113px]">
                <p className="absolute left-[268px] top-[258px] text-[10px] text-left text-[#232323]">1개</p>
                <p className="w-[72px] h-3.5 absolute left-[297px] top-[258px] text-[10px] text-left text-[#232323]">10일분 10일분</p>
                <div className="w-[101px] h-3.5">
                  <p className="absolute left-[268px] top-[291px] text-[10px] text-left text-[#232323]">2알</p>
                  <p className="w-[72px] h-3.5 absolute left-[297px] top-[290px] text-[10px] text-left text-[#232323]">5일분 10일분`</p>
                </div>
                <div className="w-[101px] h-3">
                  <p className="absolute left-[269px] top-[323px] text-[10px] text-left text-[#232323]">1알</p>
                  <p className="w-[73px] absolute left-[297px] top-[323px] text-[10px] text-left text-[#232323]">10일분 10일분</p>
                </div>
                <div className="w-[101px] h-4">
                  <p className="absolute left-[268px] top-[355px] text-[10px] text-left text-[#232323]">반알</p>
                  <p className="w-[72px] h-4 absolute left-[297px] top-[355px] text-[10px] text-left text-[#232323]">10일분 10일분</p>
                </div>
              </div>
              <div className="w-[102px] h-[113px]">
                <p className="absolute left-[261px] top-[460px] text-[10px] text-left text-[#232323]">1개</p>
                <p className="w-[72px] h-3.5 absolute left-[290px] top-[460px] text-[10px] text-left text-[#232323]">10일분 10일분</p>
                <div className="w-[101px] h-3.5">
                  <p className="absolute left-[261px] top-[493px] text-[10px] text-left text-[#232323]">2알</p>
                  <p className="w-[72px] h-3.5 absolute left-[290px] top-[492px] text-[10px] text-left text-[#232323]">5일분 10일분`</p>
                </div>
                <div className="w-[101px] h-3">
                  <p className="absolute left-[262px] top-[525px] text-[10px] text-left text-[#232323]">1알</p>
                  <p className="w-[73px] absolute left-[290px] top-[525px] text-[10px] text-left text-[#232323]">10일분 10일분</p>
                </div>
                <div className="w-[101px] h-4">
                  <p className="absolute left-[261px] top-[557px] text-[10px] text-left text-[#232323]">반알</p>
                  <p className="w-[72px] h-4 absolute left-[290px] top-[557px] text-[10px] text-left text-[#232323]">10일분 10일분</p>
                </div>
              </div>
              <div className="w-[102px] h-[113px]">
                <p className="absolute left-[260px] top-[662px] text-[10px] text-left text-[#232323]">1개</p>
                <p className="w-[72px] h-3.5 absolute left-[289px] top-[662px] text-[10px] text-left text-[#232323]">10일분 10일분</p>
                <div className="w-[101px] h-3.5">
                  <p className="absolute left-[260px] top-[695px] text-[10px] text-left text-[#232323]">2알</p>
                  <p className="w-[72px] h-3.5 absolute left-[289px] top-[694px] text-[10px] text-left text-[#232323]">5일분 10일분`</p>
                </div>
                <div className="w-[101px] h-3">
                  <p className="absolute left-[261px] top-[727px] text-[10px] text-left text-[#232323]">1알</p>
                  <p className="w-[73px] absolute left-[289px] top-[727px] text-[10px] text-left text-[#232323]">10일분 10일분</p>
                </div>
                <div className="w-[101px] h-4">
                  <p className="absolute left-[260px] top-[759px] text-[10px] text-left text-[#232323]">반알</p>
                  <p className="w-[72px] h-4 absolute left-[289px] top-[759px] text-[10px] text-left text-[#232323]">10일분 10일분</p>
                </div>
              </div>
            </div>
            <div className="w-[254px] h-[60px]">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[26.5px] top-[263.5px]" preserveAspectRatio="none">
                <circle cx="4" cy="4" r="3.5" fill="white" stroke="#777777"></circle>
              </svg>
              <p className="w-[205px] h-[30px] absolute left-[75px] top-[294px] text-sm text-left text-[#020202]">모비드캡슐</p>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[25.5px] top-[299.5px]" preserveAspectRatio="none">
                <circle cx="4" cy="4" r="3.5" fill="white" stroke="#777777"></circle>
              </svg>
            </div>
            <div className="w-[254px] h-[30px]">
              <p className="w-[205px] h-[30px] absolute left-[75px] top-[327px] text-sm text-left text-[#020202]">무코레바정</p>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[25.5px] top-[332.5px]" preserveAspectRatio="none">
                <circle cx="4" cy="4" r="3.5" fill="white" stroke="#777777"></circle>
              </svg>
            </div>
            <div className="w-[254px] h-[30px]">
              <p className="w-[205px] h-[30px] absolute left-[75px] top-[357px] text-sm text-left text-[#020202]">트라몰서방정</p>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[25.5px] top-[362.5px]" preserveAspectRatio="none">
                <circle cx="4" cy="4" r="3.5" fill="white" stroke="#777777"></circle>
              </svg>
            </div>
            <div className="w-[262px] h-[169px]">
              <p className="w-[205px] h-[30px] absolute left-[27px] top-[620px] text-[15px] text-left text-[#020202]">저녁 식후</p>
              <div className="w-[254px] h-[30px]">
                <p className="w-[205px] h-[30px] absolute left-[84px] top-[660px] text-sm text-left text-[#020202]">코푸시럽</p>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[34.5px] top-[665.5px]" preserveAspectRatio="none">
                  <circle cx="4" cy="4" r="3.5" fill="white" stroke="#777777"></circle>
                </svg>
              </div>
              <div className="w-[254px] h-[30px]">
                <p className="w-[205px] h-[30px] absolute left-[83px] top-[696px] text-sm text-left text-[#020202]">모비드캡슐</p>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[33.5px] top-[701.5px]" preserveAspectRatio="none">
                  <circle cx="4" cy="4" r="3.5" fill="white" stroke="#777777"></circle>
                </svg>
              </div>
              <div className="w-[254px] h-[30px]">
                <p className="w-[205px] h-[30px] absolute left-[83px] top-[729px] text-sm text-left text-[#020202]">무코레바정</p>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[33.5px] top-[734.5px]" preserveAspectRatio="none">
                  <circle cx="4" cy="4" r="3.5" fill="white" stroke="#777777"></circle>
                </svg>
              </div>
              <div className="w-[254px] h-[30px]">
                <p className="w-[205px] h-[30px] absolute left-[83px] top-[759px] text-sm text-left text-[#020202]">트라몰서방정</p>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[33.5px] top-[764.5px]" preserveAspectRatio="none">
                  <circle cx="4" cy="4" r="3.5" fill="white" stroke="#777777"></circle>
                </svg>
              </div>
            </div>
            <div className="w-[262px] h-[169px]">
              <p className="w-[205px] h-[30px] absolute left-[27px] top-[419px] text-[15px] text-left text-[#020202]">점심 식후</p>
              <div className="w-[254px] h-[30px]">
                <p className="w-[205px] h-[30px] absolute left-[84px] top-[459px] text-sm text-left text-[#020202]">코푸시럽</p>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[34.5px] top-[464.5px]" preserveAspectRatio="none">
                  <circle cx="4" cy="4" r="3.5" fill="white" stroke="#777777"></circle>
                </svg>
              </div>
              <div className="w-[254px] h-[30px]">
                <p className="w-[205px] h-[30px] absolute left-[83px] top-[495px] text-sm text-left text-[#020202]">모비드캡슐</p>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[33.5px] top-[500.5px]" preserveAspectRatio="none">
                  <circle cx="4" cy="4" r="3.5" fill="white" stroke="#777777"></circle>
                </svg>
              </div>
              <div className="w-[254px] h-[30px]">
                <p className="w-[205px] h-[30px] absolute left-[83px] top-[528px] text-sm text-left text-[#020202]">무코레바정</p>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[33.5px] top-[533.5px]" preserveAspectRatio="none">
                  <circle cx="4" cy="4" r="3.5" fill="white" stroke="#777777"></circle>
                </svg>
              </div>
              <div className="w-[254px] h-[30px]">
                <p className="w-[205px] h-[30px] absolute left-[83px] top-[558px] text-sm text-left text-[#020202]">트라몰서방정</p>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[33.5px] top-[563.5px]" preserveAspectRatio="none">
                  <circle cx="4" cy="4" r="3.5" fill="white" stroke="#777777"></circle>
                </svg>
              </div>
            </div>
            <p className="w-[205px] absolute left-[257px] top-[219px] text-xs text-left text-[#00c1a6]/75">1회분량 남은양 처방량</p>
            <p className="w-[205px] absolute left-[243px] top-[416px] text-xs text-left text-[#00c1a6]/75">1회분량 남은양 처방량</p>
            <p className="w-[205px] absolute left-[245px] top-[632px] text-xs text-left text-[#00c1a6]/75">1회분량 남은양 처방량</p>
          </div>
          <div className="w-[345px] h-[38px]">
            <div className="w-[345px] h-[38px] absolute left-[13.5px] top-[157.5px] rounded-[10px] bg-white border-[3px] border-[#00c1a6]/75"></div>
            <p className="w-[317.89px] h-[38px] absolute left-[24.86px] top-[159px] text-sm text-center text-[#020202]">24/02/24</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrscrptDtlComp;
