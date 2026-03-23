import { useEffect } from "react";

const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
  isEnabled: boolean,
) => {
  useEffect(() => {
    if (!isEnabled) return;

    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, callback, isEnabled]);
};

export default useOutsideClick;
