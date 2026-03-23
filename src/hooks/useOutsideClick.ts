import { useEffect, RefObject } from "react";

const useOutsideClick = (
  ref: RefObject<HTMLElement | null>,
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
