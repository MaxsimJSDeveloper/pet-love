import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import Icon from "./Icon";

interface PropsModal {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: PropsModal) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-[30px] w-[335px] md:w-[480px] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="ml-auto" onClick={onClose}>
          <Icon
            stroke="stroke-[#262626]"
            id="icon-close"
            width="24px"
            height="24px"
          />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
