import { useContext } from "react";
import Context from "../providers/Context";

const useModal = () => {
  const {
    isAddPaymentsModal,
    setIsAddPaymentsModal,
    isEditPaymentsModal,
    setIsEditPaymentsModal,
    isDeletePaymentsModal,
    setIsDeletePaymentsModal,
  } = useContext(Context);

  return {
    isAddPaymentsModal,
    setIsAddPaymentsModal,
    isEditPaymentsModal,
    setIsEditPaymentsModal,
    isDeletePaymentsModal,
    setIsDeletePaymentsModal,
  };
};

export default useModal;
