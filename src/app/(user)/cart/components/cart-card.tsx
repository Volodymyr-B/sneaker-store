import { FC, useState } from "react";
import Link from "next/link";
import { TfiTrash } from "react-icons/tfi";
import { AppIcon } from "@/components/UI/app-icon";
import { SelectItem } from "@/components/UI/select-item";
import { AppSelect } from "@/components/UI/app-select";
import { DiscountedPrice } from "@/components/common/discounted-price";
import { AppImage } from "@/components/common/app-image";
import type { CartProduct } from "@/types/cart";

interface CartCardProps {
  product: CartProduct;
  remove: (id: string) => void;
  changeAmount: (sizeId: string, newAmount: number) => void;
}

export const CartCard: FC<CartCardProps> = ({
  product,
  remove,
  changeAmount,
}) => {
  const [selectVal, setSelectVal] = useState(product.pickedAmount);
  const onChangeAmount = (value: number) => {
    if (value === selectVal) return;
    setSelectVal(value);
    changeAmount(product.amount.id, value);
  };

  return (
    <article
      className="w-full flex gap-1 sm:gap-4 border-solid border-[1px]
    border-app-primary_action text-xs sm:text-base"
    >
      <Link href={`/shop/${product.id}`}>
        <AppImage
          src={product.cover}
          alt={product.name}
          className="h-36 sm:h-60"
        />
      </Link>
      <div className="w-full p-2 sm:p-4">
        <div className="flex justify-between gap-2">
          <p>{product.name}</p>
          {product.isSale ? (
            <DiscountedPrice
              discount={product.discount}
              price={product.price * product.pickedAmount}
              className="hidden sm:inline"
            />
          ) : (
            <p className="text-center">
              {product.price * product.pickedAmount} $
            </p>
          )}
        </div>
        <p>{product.sport}</p>
        <div className="flex justify-between gap-2">
          <p>
            Picked size:
            <span className="uppercase"> {product.amount.size}</span>
          </p>
          <AppSelect selectVal={selectVal}>
            {new Array(product.amount.quantity).fill("").map((_, i) => (
              <SelectItem
                key={i}
                onClick={() => onChangeAmount(i + 1)}
                selected={selectVal === i + 1}
                value={i + 1}
              />
            ))}
          </AppSelect>
        </div>
        <AppIcon icon={<TfiTrash />} action={() => remove(product.amount.id)} />
      </div>
    </article>
  );
};
