// 일단 안쓰고 있는 파일
type Data = {
  children: any;
};

const PopupFooter = ({ children }: Data) => {
  return <div className="card card_BG_gray">{children}</div>;
};

export default PopupFooter;
