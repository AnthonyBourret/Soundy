import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Toaster } from 'react-hot-toast';
import toastNotify from './toastNotify';

type Toast = {
  type?: 'success' | 'error' | 'warning' | 'info';
  message: string;
  addToast: (type: Toast['type'], message: string) => void;
};

const ToastContext = createContext<Toast | undefined>(undefined);

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toastState, setToast] = useState<Toast | null>(null);

  const addToast = useMemo(() => (
    type: Toast['type'],
    message: Toast['message'],
  ) => {
    setToast({ type, message, addToast });
    toastNotify(type, message);
  }, []);

  return useMemo(() => (
    <ToastContext.Provider value={{
      message: toastState?.message || '',
      addToast,
      type: toastState?.type,
    }}
    >
      <Toaster
        containerClassName="mb-16"
        position="bottom-right"
        reverseOrder
      />
      {children}
    </ToastContext.Provider>
  ), [toastState?.message, toastState?.type, addToast, children]);
};

export const useNewToast = () => {
  const { addToast } = useContext(ToastContext) ?? {};
  if (!addToast) {
    throw new Error('useShowToast must be used within a ToastProvider');
  }

  return addToast;
};
