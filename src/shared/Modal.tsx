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
        className="bg-white p-6 rounded-lg max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
