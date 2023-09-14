"use client";

import { FC, useState } from "react";
import toast from "react-hot-toast";
import type { Session } from "next-auth";
import useCart from "@/hooks/global/use-cart";
import { CommentForm } from "@/app/shop/[id]/components/comment-form";
import { CommentsList } from "@/app/shop/[id]/components/comments-list";
import { QuantitiesList } from "@/app/shop/[id]/components/quantities-list";
import { DiscountedPrice } from "@/components/common/discounted-price";
import { AppButton } from "@/components/UI/app-button";
import { AppImage } from "@/components/common/app-image";
import { Separator } from "@/components/common/separator";
import type { ProductFull } from "@/types/dto-in";

interface DetailedProductProps {
  product: ProductFull;
  session: Session | null;
}

export const DetailedProduct: FC<DetailedProductProps> = ({
  product,
  session,
}) => {
  const addItem = useCart((state) => state.addItem);

  const [pickedSize, setPickedSize] = useState("");
  const onPickSize = (val: string) => {
    setPickedSize(val);
  };

  const addToCart = () => {
    const { comments, quantities, ...prod } = product;
    const amount = quantities.find((el) => el.size === pickedSize);
    if (!amount) return toast.error("some data is missing", { id: "unique" });
    addItem({ ...prod, amount, pickedAmount: 1 });
  };

  return (
    <div
      className="flex flex-col justify-center items-center 
        lg:items-start lg:flex-row gap-8"
    >
      <div className="flex-1 w-full">
        <AppImage
          src={product.cover}
          alt={product.name}
          className="max-h-[670px] m-auto"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-2 md:gap-4">
        <h3>{product.name}</h3>
        <h5 className="font-bold">{`${product.sport} ${product.type}`}</h5>
        {product.isSale ? (
          <DiscountedPrice discount={product.discount} price={product.price} />
        ) : (
          <p>{product.price} $</p>
        )}
        <QuantitiesList
          quantities={product.quantities}
          pickedSize={pickedSize}
          onPick={onPickSize}
        />
        <AppButton disabled={!pickedSize} onClick={addToCart}>
          Add to Bag
        </AppButton>
        <p>{product.description}</p>
        <Separator />
        {!!product.comments.length ? (
          <CommentsList comments={product.comments} />
        ) : (
          <p>No comments yet</p>
        )}
        {session?.user && (
          <CommentForm productId={product.id} user={session.user} />
        )}
      </div>
    </div>
  );
};
