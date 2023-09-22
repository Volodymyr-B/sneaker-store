import { FC } from "react";
import { cn } from "@/lib/utils/tw-merge";

interface DiscountedPriceProps {
  discount: number;
  price: number;
  className?: string;
}

export const DiscountedPrice: FC<DiscountedPriceProps> = ({
  discount,
  price,
  className,
}) => {
  return (
    <span className="flex items-center gap-1">
      <b className="text-red-500">
        {Math.ceil(price * (1 - discount / 100))} $
      </b>
      <span className={cn("line-through text-sm", className)}>{price} $</span>
    </span>
  );
};
