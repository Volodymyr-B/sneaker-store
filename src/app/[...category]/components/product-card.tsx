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
      <Link prefetch={false} href={`/shop/${product.id}`}>
        <article
          className="lg:hover:outline lg:hover:outline-1 transition-all
        outline-app-primary_action rounded-sm lg:hover:shadow-lg"
        >
          <AppImage src={product.cover} alt={product.name} />
          <div className="flex flex-col gap-1 mt-1 pl-2">
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
          </div>
        </article>
      </Link>
    </>
  );
};
