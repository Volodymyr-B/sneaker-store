import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/tw-merge";

interface SelectLinkItemProps {
  href: string;
  isDisabled: boolean;
}

export const SelectLinkItem: FC<PropsWithChildren<SelectLinkItemProps>> = ({
  href,
  isDisabled,
  children,
}) => {
  return (
    <li
      className={cn(
        "flex outline outline-1 cursor-pointer bg-white lg:hover:bg-app-secondary",
        isDisabled && "bg-app-primary"
      )}
    >
      <Link
        className={cn(
          "w-full px-3",
          isDisabled && "pointer-events-none text-app-primary_action"
        )}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};
