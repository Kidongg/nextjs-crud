import { useContext } from "react";
import Context from "../providers/Context";

const useStatus = () => {
  const {
    deletePaymentId,
    setDeletePaymentId,
    editPaymentId,
    setEditPaymentId,
  } = useContext(Context);

  return {
    editPaymentId,
    setEditPaymentId,
  };
};

export default useStatus;
