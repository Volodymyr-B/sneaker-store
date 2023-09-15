import { FC } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { Separator } from "@/components/common/separator";
import { AppButton } from "@/components/UI/app-button";

interface SummaryProps {
  totalPrice: number;
  totalDiscount: number;
}

export const Summary: FC<SummaryProps> = ({ totalPrice, totalDiscount }) => {
  const paymentHandler = () => {
    toast("Work in progress, this button dont work yet", {
      id: "unique",
    });
  };

  return (
    <div className="w-full lg:min-h-[550px] lg:w-auto ">
      <div className="flex flex-col">
        <h3>Summary</h3>
        <p>Subtotal: {Math.ceil(totalPrice * 0.8)} $</p>
        <p>Discount: {totalDiscount} $</p>
        <Separator />
        <p>
          Total: <b>{totalPrice} $</b>
        </p>
        <Separator />
      </div>
      <Link href={`/checkout`}>
        <AppButton className="my-4">Checkout</AppButton>
      </Link>
      <AppButton onClick={paymentHandler} className="py-7 bg-app-primary">
        Pay Pal
      </AppButton>
    </div>
  );
};
