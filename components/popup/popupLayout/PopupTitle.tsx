import { useDispatch, useSelector } from "react-redux";
import { confirmAction } from "store/modal/confirm-slice";

type Data = {
  title: string;
  action: any;
  type: any;
};

const PopupTitle = ({ title, action, type }: Data) => {
  const dispatch = useDispatch();
  // const data = useSelector((state: any) => state[type].data);
  // const isChange = useSelector((state: any) => state[type].isChange);
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
    <div className="pop_title bottomline">
      <h3>{title}</h3>
      <div className="rightArea">
        <button className="smbtn" onClick={closeHandler}>
          <i className="x-large" title="Close"></i>
        </button>
      </div>
    </div>
  );
};

export default PopupTitle;
