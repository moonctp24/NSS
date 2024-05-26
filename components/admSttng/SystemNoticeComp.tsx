import { useState } from "react";
import { useDispatch } from "react-redux";
import CommAlert from "../popup/CommAlert";
import { alertAction } from "@/store/modal/alert-slice";

const SystemNoticeComp = () => {
  const [noticeText, setNoticeText] = useState("");

  const dispatch = useDispatch();

  const AllAlert = () => {
    if (noticeText.length <= 0) {
      dispatch(alertAction.openModal({ cont: "공지할 내용을 입력해주세요" }));

      return;
    }
    dispatch(alertAction.openModal({ cont: noticeText }));
  };

  return (
    <>
      <div className="mainComponent">
        <h1>전체공지</h1>
        <div className="w-[800px] h-[500px] items-center">
          <textarea className="sysNoticeTextArea" value={noticeText} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNoticeText(e.target.value)} />
        </div>
        <div className="w-full">
          <button className="w-[200px] h-[50px]" onClick={AllAlert}>
            공지
          </button>
        </div>
      </div>
    </>
  );
};

export default SystemNoticeComp;
