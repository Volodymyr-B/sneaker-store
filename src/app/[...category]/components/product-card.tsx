import { FC } from "react";
import Link from "next/link";
import { AppImage } from "@/components/common/app-image";
import { DiscountedPrice } from "@/components/common/discounted-price";
import type { ProductShort } from "@/types/dto-in";

interface ProductCardProps {
  product: ProductShort;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <>
      <Link href={`/shop/${product.id}`}>
        <article className="flex flex-col gap-1">
          <AppImage src={product.cover} alt={product.name} />
          <h5>{product.name}</h5>
          <div className="flex gap-2">
            <p>{product.sport}</p>
            <p>{product.type}</p>
          </div>
          {product.isSale ? (
            <DiscountedPrice
              discount={product.discount}
              price={product.price}
            />
          ) : (
            <p>{product.price} $</p>
          )}
        </article>
      </Link>
    </>
  );
};
