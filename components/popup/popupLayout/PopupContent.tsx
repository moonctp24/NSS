import ViewEditHtml from "components/comm/editor/viewEdit";
import { javaToHtml } from "constants/util/commUtil";

type Data = {
  type: any;
  content: any;
  cntOpt: any;
};

const PopupContent = ({ type, content, cntOpt }: Data) => {
  return (
    <div className="content_InBox">
      {/* {type === "popup" ? (
        <div className="card">{content}</div>
      ) : type === "confirm" ? (
        cntOpt?.type === "refer" ? (
          <div className="p_content">
            <div className="card tableStyle_tint">{content}</div>
          </div>
        ) : (
          <div className="p_content">
            <div className="TT_Box">
              <div className="ipbox">
                <div className="TT_ps">{content}</div>
              </div>
            </div>
          </div>
        )
      ) : type === "multi" ? (
        <>{content}</>
      ) : type === "calendar" ? (
        <div className="card">{content}</div>
      ) : ( */}
      <div className="p_content">
        <div className="TT_Box">
          <div className="ipbox">
            <div className="TT_ps">
              <ViewEditHtml html={javaToHtml(content)} />
            </div>
          </div>
        </div>
      </div>
      {/* )
      } */}
    </div>
  );
};

export default PopupContent;
