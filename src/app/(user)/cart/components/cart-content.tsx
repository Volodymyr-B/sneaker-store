"use client";

import useCart from "@/hooks/global/use-cart";
import { useMounted } from "@/hooks/instance/use-mounted";
import { EmptyCart } from "@/app/(user)/cart/components/empty-cart";
import { CartCard } from "@/app/(user)/cart/components/cart-card";
import { Summary } from "@/app/(user)/cart/components/summary";

export const CartContent = () => {
  const isMounted = useMounted();
  const { items, removeItem, totalPrice, totalDiscount, changeAmount } =
    useCart();

  if (!isMounted) return null;
  if (!items.length) return <EmptyCart />;

  return (
    <div className="flex gap-4 md:gap-8 flex-wrap lg:flex-nowrap">
      <div className="w-full">
        <h3>Bag</h3>
        <div className="flex flex-col gap-4">
          {items.map((product) => (
            <CartCard
              product={product}
              key={product.amount.id}
              remove={removeItem}
              changeAmount={changeAmount}
            />
          ))}
        </div>
      </div>
      <Summary totalPrice={totalPrice()} totalDiscount={totalDiscount()} />
    </div>
  );
};
