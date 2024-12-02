import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface PropsModal {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: PropsModal) => {
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-[335px] md:w-[480px] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
