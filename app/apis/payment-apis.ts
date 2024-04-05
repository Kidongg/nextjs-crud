// 결제 조회 API 함수
export const getPayments = async () => {
  const res = await fetch("http://localhost:3001/payments", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  return data;
};

// 결제 추가 API 함수
export const addPayment = async (payment: any) => {
  const res = await fetch("http://localhost:3001/payments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payment),
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  return data;
};

// 결제 수정 API 함수
export const editPayment = async (id: string, payment: Payment) => {
  const res = await fetch(`http://localhost:3001/payments/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payment),
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  return data;
};

// 결제 삭제 API 함수
export const deletePayment = async (id: string) => {
  const res = await fetch(`http://localhost:3001/payments/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  return data;
};

// 결제 상세 조회 API 함수
export const getPayment = async (id: string) => {
  const res = await fetch(`http://localhost:3001/payments/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  return data;
};

//! 타입 정의
interface Payment {
  name: string;
  price: number;
  email: string;
  status: "pending" | "processing" | "success" | "failed";
}
