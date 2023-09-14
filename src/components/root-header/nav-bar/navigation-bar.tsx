"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { IoBagOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { AppIcon } from "@/components/UI/app-icon";
import { CartBadge } from "@/components/UI/cart-badge";

export const NavigationBar = () => {
  const session = useSession();
  return (
    <div className="flex gap-2">
      {!!session.data ? (
        <Link href={"/profile"}>
          <AppIcon icon={<AiOutlineUser />} />
        </Link>
      ) : (
        <Link href={"/auth"}>
          <AppIcon icon={<AiOutlineUser />} />
        </Link>
      )}
      <Link href={"/cart"}>
        <AppIcon icon={<IoBagOutline />}>
          <CartBadge />
        </AppIcon>
      </Link>
    </div>
  );
};
