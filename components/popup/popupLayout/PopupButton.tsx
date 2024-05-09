import { useDispatch, useSelector } from "react-redux";
import { confirmAction } from "store/modal/confirm-slice";

type Data = {
  action: any;
  type: any;
  btnOpt: any;
  btmPd: any;
};

const PopupButton = ({ type, action, btnOpt, btmPd }: Data) => {
  const dispatch = useDispatch();
  const callback = useSelector((state: any) => state[type].callback);
  const data = useSelector((state: any) => state[type].data);
  // const isChange = useSelector((state: any) => state[type].isChange);
  // const delCallback = useSelector((state: any) => state[type].delCallback);
  const closeHandler = () => {
    // if (!!data && isChange) {
    //   dispatch(
    //     confirmAction.openModal({
    //       cont: (
    //         <p>
    //           작성중인 내용이 있습니다. <br />
    //           페이지 종료하시겠습니까?
    //         </p>
    //       ),
    //       callback: closeCallback,
    //     })
    //   );
    // } else {
    closeCallback();
    // }
  };
  const closeCallback = () => {
    dispatch(action.closeModal());
    dispatch(confirmAction.closeModal());
  };
  return (
    <>
      <div className="flex">
        {type === "popup" ? (
          <>
            <button className="largbt btn_white" onClick={closeHandler}>
              닫기
            </button>
            {(!!btnOpt?.hidden && btnOpt.hidden) || (
              <button
                className="largbt btn_blue"
                onClick={() => {
                  if (callback && typeof callback === "function") {
                    callback(data);
                  }
                }}
              >
                저장
              </button>
            )}
          </>
        ) : type === "confirm" ? (
          <>
            <button className="btn_gray" onClick={() => dispatch(action.closeModal())}>
              취소
            </button>
            <button
              className={btnOpt?.color ? btnOpt.color : "btn_red"}
              onClick={() => {
                if (callback && typeof callback === "function") {
                  callback(data);
                }
              }}
            >
              {btnOpt?.text ? btnOpt.text : "확인"}
            </button>
          </>
        ) : type === "multi" ? (
          <>
            <button className="btn_white" onClick={() => dispatch(action.closeModal())}>
              취소
            </button>
            {(!!btnOpt?.hidden && btnOpt.hidden) || (
              <button
                className="btn_blue"
                onClick={() => {
                  dispatch(action.closeModal());
                  if (callback && typeof callback === "function") {
                    callback(data);
                  }
                }}
              >
                적용
              </button>
            )}
          </>
        ) : (
          // ) : type === "calendar" ? (
          //   <>
          //     <button className="btn_white" onClick={() => dispatch(action.closeModal())}>
          //       취소
          //     </button>
          //     <button
          //       className="btn_red"
          //       onClick={() => {
          //         if (delCallback && typeof delCallback === "function") {
          //           delCallback(data);
          //         }
          //       }}
          //     >
          //       삭제
          //     </button>
          //     <button
          //       className="largbt btn_blue"
          //       onClick={() => {
          //         if (callback && typeof callback === "function") {
          //           callback(data);
          //         }
          //       }}
          //     >
          //       수정
          //     </button>
          //   </>
          <button
            className="btn_white"
            onClick={() => {
              dispatch(action.closeModal());
              if (callback && typeof callback === "function") {
                callback();
              }
            }}
          >
            확인
          </button>
        )}
      </div>
      {btmPd && <div className="padding10"></div>}
    </>
  );
};

export default PopupButton;
