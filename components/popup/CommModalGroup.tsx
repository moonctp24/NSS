import { useSelector } from "react-redux";
import CommAlert from "./CommAlert";
import CommConfirm from "./CommConfirm";

const CommModalGroup = () => {
  const confirmOpen = useSelector((state: any) => state.confirm.isOpen);
  const alertOpen = useSelector((state: any) => state.alert.isOpen);

  return (
    <>
      <div>{alertOpen && <CommAlert />} </div>
      <div>{confirmOpen && <CommConfirm />} </div>
    </>
  );
};

export default CommModalGroup;
