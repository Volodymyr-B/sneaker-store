import { FC } from "react";
import { cn } from "@/lib/utils/tw-merge";

interface SeparatorProps {
  vertical?: boolean;
}

export const Separator: FC<SeparatorProps> = ({ vertical = false }) => {
  return (
    <div
      className={cn(
        "w-full h-[1px] my-4 bg-app-secondary_action",
        vertical && "m-0 w-[1px] h-auto"
      )}
    />
  );
};
