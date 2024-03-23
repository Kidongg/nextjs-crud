import { useContext } from "react";
import Context from "../providers/Context";

const useModal = () => {
  const {
    isAddPaymentsModal,
    setIsAddPaymentsModal,
    isEditPaymentsModal,
    setIsEditPaymentsModal,
  } = useContext(Context);

  return {
    isAddPaymentsModal,
    setIsAddPaymentsModal,
    isEditPaymentsModal,
    setIsEditPaymentsModal,
  };
};

export default useModal;
