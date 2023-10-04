"use client";

import { FC, PropsWithChildren, useRef, useState } from "react";
import { useClickOutside } from "@/hooks/instance/use-click-outside";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface AppSelectProps {
  selectVal: number;
}

export const AppSelect: FC<PropsWithChildren<AppSelectProps>> = ({
  children,
  selectVal,
}) => {
  const [isOpen, setOpen] = useState(false);
  const divRef = useRef(null);

  useClickOutside(divRef, () => {
    if (!isOpen) return;
    setOpen(false);
  });

  return (
    <>
      <div
        ref={divRef}
        onClick={() => setOpen((prev) => !prev)}
        className="w-16 sm:w-40 h-10 outline outline-1 relative select-none"
      >
        <div className="flex justify-between items-center h-10 px-3">
          <span>{selectVal}</span>
          {isOpen ? (
            <div>
              <IoIosArrowUp />
            </div>
          ) : (
            <div>
              <IoIosArrowDown />
            </div>
          )}
        </div>
        {isOpen && (
          <ul
            className="z-10 absolute top-10 w-full flex flex-col gap-[1px] mt-[1px]
          outline outline-1 max-h-64 overflow-y-auto no-scrollbar"
          >
            {children}
          </ul>
        )}
      </div>
    </>
  );
};
