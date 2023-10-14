import { FC } from "react";
import { cn } from "@/lib/utils/tw-merge";

interface Skeletonprops {
  variant?: "circle" | "square";
  width?: string;
  height?: string;
}

export const Skeleton: FC<Skeletonprops> = ({ variant, height, width }) => {
  return (
    <div
      className={cn(
        "animate-pulse min-h-[12px] bg-gray-200 rounded-lg w-full",
        variant === "circle" && "aspect-[1/1] h-auto rounded-full",
        variant === "square" && "aspect-[1/1] h-auto",
        height && `h-${height}`,
        width && `w-${width}`
      )}
    />
  );
};
