import { FC } from "react";

interface DiscountedPriceProps {
  discount: number;
  price: number;
  shortView?: boolean;
}

export const DiscountedPrice: FC<DiscountedPriceProps> = ({
  shortView,
  discount,
  price,
}) => {
  return (
    <span className="flex items-center gap-1">
      <b className="text-red-500">
        {Math.ceil(price * (1 - discount / 100))} $
      </b>
      {!shortView && <span className="line-through text-sm">{price} $</span>}
    </span>
  );
};
