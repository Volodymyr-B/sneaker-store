import { FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils/tw-merge";

interface ContainerProps {
  className?: string;
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("max-w-7xl p-4 lg:p-10 mx-auto h-full", className)}>
      {children}
    </div>
  );
};
