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
    deletePaymentId,
    setDeletePaymentId,
  } = useContext(Context);

  return {
    isAddPaymentsModal,
    setIsAddPaymentsModal,
    isEditPaymentsModal,
    setIsEditPaymentsModal,
    isDeletePaymentsModal,
    setIsDeletePaymentsModal,
    deletePaymentId,
    setDeletePaymentId,
  };
};

export default useModal;
