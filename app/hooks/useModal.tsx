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
    // deletePaymentId,
    // setDeletePaymentId,
    // editPaymentId,
    // setEditPaymentId,
  } = useContext(Context);

  return {
    isAddPaymentsModal,
    setIsAddPaymentsModal,
    isEditPaymentsModal,
    setIsEditPaymentsModal,
    isDeletePaymentsModal,
    setIsDeletePaymentsModal,
    // deletePaymentId,
    // setDeletePaymentId,
    // editPaymentId,
    // setEditPaymentId,
  };
};

export default useModal;
