import { FC } from "react";

interface DiscountedPriceProps {
  discount: number;
  price: number;
}

export const DiscountedPrice: FC<DiscountedPriceProps> = ({
  discount,
  price,
}) => {
  return (
    <span className="flex items-center gap-1">
      <b className="text-red-500">
        {Math.ceil(price * (1 - discount / 100))} $
      </b>
      <span className="hidden sm:inline line-through text-sm">{price} $</span>
    </span>
  );
};
