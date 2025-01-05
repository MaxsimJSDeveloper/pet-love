import { useEffect } from "react";

const useOutsideClick = (callback: () => void, isEnabled: boolean) => {
  useEffect(() => {
    if (!isEnabled) return;

    const handleClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".navigation")) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback, isEnabled]);
};

export default useOutsideClick;
