import { FC } from "react";
import { AppImage } from "@/components/common/app-image";
import { DiscountedPrice } from "@/components/common/discounted-price";
import type { CartProduct } from "@/types/cart";

interface CheckoutCardProps {
  product: CartProduct;
}

export const CheckoutCard: FC<CheckoutCardProps> = ({ product }) => {
  return (
    <article className="flex justify-center md:justify-between">
      <AppImage src={product.cover} alt={product.name} className="h-24" />
      <p className="flex flex-col items-end">
        <span>{product.name}</span>
        <span>
          Size: <span className="uppercase">{product.amount.size}</span>
        </span>
        <span>Quantity: {product.pickedAmount}</span>
        {product.isSale ? (
          <DiscountedPrice
            discount={product.discount}
            price={product.price * product.pickedAmount}
          />
        ) : (
          <span>{product.price * product.pickedAmount} $</span>
        )}
      </p>
    </article>
  );
};
