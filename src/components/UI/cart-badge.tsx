"use client";

import useCart from "@/hooks/global/use-cart";
import { useMounted } from "@/hooks/instance/use-mounted";

export const CartBadge = () => {
  const cart = useCart((state) => state.items);
  const isMounted = useMounted();

  if (!isMounted || !cart.length) return null;

  return (
    <div
      className="bg-red-500 w-6 h-6 rounded-full select-none
    flex justify-center items-center absolute -top-2 -right-2"
    >
      <span className="font-bold text-white text-sm">{cart.length}</span>
    </div>
  );
};
