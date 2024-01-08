import { useEffect } from "react";

export const useClickOutSite = (ref, func) => {
  useEffect(() => {
    const click = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return false;
      }
      func();
    };
    document.addEventListener("mousedown", click);
    document.addEventListener("touchstart", click);
    return () => {
      document.removeEventListener("mousedown", click);
      document.removeEventListener("touchstart", click);
    };
  }, [ref]);
};
