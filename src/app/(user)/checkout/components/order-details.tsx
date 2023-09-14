import { FC } from "react";
import { CheckoutCard } from "@/app/(user)/checkout/components/checkout-card";
import { Separator } from "@/components/common/separator";
import type { CartProduct } from "@/types/cart";

interface OrderDetailsProps {
  items: CartProduct[];
  totalPrice: number;
}

export const OrderDetails: FC<OrderDetailsProps> = ({ items, totalPrice }) => {
  return (
    <div className="flex flex-col md:gap-4 min-w-[290px]">
      <h5 className="font-bold ">Order details</h5>
      <Separator />
      <div className="flex-col gap-4 hidden md:flex">
        {items.map((product) => (
          <CheckoutCard
            key={`${product.id}${product.amount.id}`}
            product={product}
          />
        ))}
      </div>
      <p className="font-bold flex gap-1 justify-center md:justify-between">
        <span>Total price:</span> <span>{totalPrice} $</span>
      </p>
    </div>
  );
};
