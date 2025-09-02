import { useState, useCallback } from "react";

let toastCount = 0;

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback((props) => {
    const id = toastCount++;
    const newToast = {
      id,
      ...props,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
    }, 5000);

    return {
      id,
      dismiss: () => {
        setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
      },
    };
  }, []);

  return {
    toast,
    toasts,
    dismiss: (toastId) => {
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toastId));
    },
  };
}