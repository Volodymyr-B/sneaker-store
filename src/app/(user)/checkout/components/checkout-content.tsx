"use client";

import { FC, useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { shallow } from "zustand/shallow";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";
import toast from "react-hot-toast";
import useCart from "@/hooks/global/use-cart";
import { useMounted } from "@/hooks/instance/use-mounted";
import { post } from "@/lib/utils/crud";
import { createOrderSchema, createOrderValues } from "@/lib/helpers/schema";
import { CreateOrderForm } from "@/app/(user)/checkout/components/create-order-form";
import { OrderDetails } from "@/app/(user)/checkout/components/order-details";
import type { OrderValues } from "@/types/dto-out";
import type { OrderFull } from "@/types/dto-in";

interface CheckoutContentProps {
  userId: string | null;
}

export const CheckoutContent: FC<CheckoutContentProps> = ({ userId }) => {
  const isMounted = useMounted();
  const router = useRouter();

  const [totalPrice, items, removeAll] = useCart(
    (state) => [state.totalPrice, state.items, state.removeAll],
    shallow
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createOrderValues>({ resolver: zodResolver(createOrderSchema) });

  const { trigger, isMutating } = useSWRMutation(
    `/api/checkout`,
    post<OrderFull, OrderValues>
  );

  useEffect(() => {
    if (isMounted && !items.length) redirect(`/cart`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  if (!isMounted) return null;
  if (isMounted && !items.length) return null;

  const onCreateOrder = handleSubmit(async (data) => {
    try {
      const orderVal = {
        ...data,
        buyer: userId,
        totalPrice: totalPrice(),
        orderItem: items.map((prod) => ({
          productName: prod.name,
          productImage: prod.cover,
          productId: prod.id,
          size: prod.amount.size,
          amount: prod.pickedAmount,
          quantityId: prod.amount.id,
        })),
      };
      await trigger(orderVal);
      toast.success("Order successfully created", { id: "unique" });
      removeAll();
      router.refresh();
      router.replace("/success");
    } catch (e) {
      toast.error((e as Error).message, { id: "unique" });
    }
  });

  return (
    <div className="flex gap-8 justify-center flex-col-reverse md:flex-row">
      <CreateOrderForm
        isLoading={isMutating}
        errors={errors}
        onCreateOrder={onCreateOrder}
        register={register}
      />
      <OrderDetails items={items} totalPrice={totalPrice()} />
    </div>
  );
};
