import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/tw-merge";

interface NavigationLinkProps {
  href: string;
  isDisabled: boolean;
  className?: string;
}

export const NavigationLink: FC<PropsWithChildren<NavigationLinkProps>> = ({
  href,
  isDisabled,
  children,
  className,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        `flex justify-center min-w-[96px] uppercase font-bold underline underline-offset-4 text-sm
           md:text-base lg:hover:text-app-secondary_hover active:text-app-secondary_hover`,
        className,
        isDisabled && "pointer-events-none text-app-primary"
      )}
    >
      {children}
    </Link>
  );
};
