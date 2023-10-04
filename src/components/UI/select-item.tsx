import { FC } from "react";
import { cn } from "@/lib/utils/tw-merge";

interface SelectItemProps {
  selected: boolean;
  onClick: (val: number | string) => void;
  value: number | string;
}

export const SelectItem: FC<SelectItemProps> = ({
  selected,
  onClick,
  value,
}) => {
  return (
    <li
      value={value}
      onClick={() => onClick(value)}
      className={cn(
        "flex list-none outline outline-1 cursor-pointer bg-white lg:hover:bg-app-secondary px-3",
        selected && "bg-app-primary"
      )}
    >
      {value}
    </li>
  );
};
