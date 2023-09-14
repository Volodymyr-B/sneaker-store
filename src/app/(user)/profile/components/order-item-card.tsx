import { FC } from "react";
import { AppImage } from "@/components/common/app-image";
import type { OrderItemFull } from "@/types/dto-in";

interface OrderItemCardProps {
  orderItem: OrderItemFull;
}

export const OrderItemCard: FC<OrderItemCardProps> = ({ orderItem }) => {
  return (
    <li
      className="bg-app-primary rounded-lg shadow-md p-2 flex justify-between
    gap-4 min-w-[250px]"
    >
      <div>
        <h6>{orderItem.productName}</h6>
        <span>size: {orderItem.size.toUpperCase()}</span>
        <br />
        <span>amount: {orderItem.amount}</span>
      </div>
      <AppImage
        src={orderItem.productImage}
        alt={orderItem.productName}
        className="h-20"
      />
    </li>
  );
};
