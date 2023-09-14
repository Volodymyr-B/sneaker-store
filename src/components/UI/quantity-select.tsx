import { FC, useRef, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useClickOutside } from "@/hooks/instance/use-click-outside";
import { cn } from "@/lib/utils/tw-merge";

interface AppSelectProps {
  optionsQuantity: number;
  selectVal: number;
  onChangeVal: (value: number) => void;
}

export const QuantitySelect: FC<AppSelectProps> = ({
  optionsQuantity,
  selectVal,
  onChangeVal,
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
          <ul className="z-10 absolute top-10 w-full flex flex-col gap-[1px] mt-[1px]">
            {new Array(optionsQuantity).fill("").map((_, i) => (
              <li
                key={i}
                onClick={() => onChangeVal(i + 1)}
                className={cn(
                  "list-none outline outline-1 cursor-pointer bg-white hover:bg-blue-400 px-3",
                  selectVal === i + 1 && "bg-app-primary"
                )}
              >
                {i + 1}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
