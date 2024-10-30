/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const timeOutIdRef = useRef(null);
  useEffect(() => {
    return () => {
      if (timeOutIdRef.current) {
        clearTimeout(timeOutIdRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args) => {
    if (timeOutIdRef.current) {
      clearTimeout(timeOutIdRef.current);
    } else {
      setTimeout(() => {
        callback(...args);
      }, delay);
    }
  };

  return debouncedCallback;
};

export default useDebounce;