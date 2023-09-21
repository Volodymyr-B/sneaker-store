import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/tw-merge";
import spinner from "@/assets/images/spinner.svg";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isLoading?: boolean;
}

export const AppButton: FC<PropsWithChildren<AppButtonProps>> = ({
  children,
  className,
  isLoading,
  ...props
}) => {
  return (
    <button
      className={cn(
        `flex justify-center items-center w-full lg:w-80 h-6 px-4 py-6
    rounded-full bg-app-secondary_action lg:hover:enabled:text-app-secondary_hover
    active:enabled:text-app-secondary_hover text-white disabled:cursor-default
    disabled:bg-app-primary ease-in-out duration-300`,
        className
      )}
      {...props}
    >
      {!isLoading ? (
        <span className="uppercase">{children}</span>
      ) : (
        <Image src={spinner} alt="..." />
      )}
    </button>
  );
};
