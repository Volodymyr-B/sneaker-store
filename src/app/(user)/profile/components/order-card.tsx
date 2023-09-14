import { FC } from "react";
import { Separator } from "@/components/common/separator";
import { OrderItemCard } from "@/app/(user)/profile/components/order-item-card";
import type { OrderFull } from "@/types/dto-in";

interface OrderCardProps {
  order: OrderFull;
}

export const OrderCard: FC<OrderCardProps> = ({ order }) => {
  return (
    <li className="flex items-center md:items-start flex-col gap-3 w-full py-4">
      <p>{order.createdAt.toDateString()}</p>
      <ul className="flex justify-center md:justify-start flex-wrap gap-2 md:gap-4">
        {order.orderItems.map((orderItem) => (
          <OrderItemCard key={orderItem.id} orderItem={orderItem} />
        ))}
      </ul>
      <p>
        Total order price: <b>{order.totalPrice} $</b>
      </p>
      <Separator />
    </li>
  );
};
