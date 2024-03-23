import { useContext } from "react";
import Context from "../providers/Context";

const useModal = () => {
  const { isAddPaymentsModal, setIsAddPaymentsModal } = useContext(Context);

  return { isAddPaymentsModal, setIsAddPaymentsModal };
};

export default useModal;
