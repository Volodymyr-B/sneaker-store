import { useEffect, useRef, useState } from "react";

export const useDelayed = () => {
  const [isOpen, setOpen] = useState(false);
  const timer = useRef<NodeJS.Timeout>();

  const openHandler = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setOpen(true);
    }, 100);
  };

  const closeHandler = () => {
    clearTimeout(timer.current);
    if (!isOpen) return;
    timer.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);
  return [isOpen, openHandler, closeHandler] as const;
};
