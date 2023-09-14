import { FC } from "react";
import Link from "next/link";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { createOrderValues } from "@/lib/helpers/schema";
import { AppButton } from "@/components/UI/app-button";
import { FormInput } from "@/components/UI/form-input";

interface CreateOrderForm {
  register: UseFormRegister<createOrderValues>;
  errors: FieldErrors<createOrderValues>;
  onCreateOrder: () => Promise<void>;
  isLoading: boolean;
}

export const CreateOrderForm: FC<CreateOrderForm> = ({
  register,
  errors,
  onCreateOrder,
  isLoading,
}) => {
  return (
    <form className="lg:w-1/2" onSubmit={onCreateOrder}>
      <h5 className="font-bold">Contact Information</h5>
      <div className="md:flex gap-2">
        <FormInput
          placeholder="first name"
          {...register("firstName")}
          error={errors.firstName?.message}
        />
        <FormInput
          placeholder="last name"
          {...register("lastName")}
          error={errors.lastName?.message}
        />
      </div>
      <FormInput
        placeholder="delivery address"
        {...register("deliveryAddress")}
        error={errors.deliveryAddress?.message}
      />
      <FormInput
        type="number"
        placeholder="phone number"
        {...register("phone")}
        error={errors.phone?.message}
      />
      <FormInput
        placeholder="email"
        {...register("email")}
        error={errors.email?.message}
      />
      <div className="flex flex-col gap-4">
        <AppButton disabled={isLoading} isLoading={isLoading} type="submit">
          checkout
        </AppButton>
        <Link href={`/cart`}>
          <AppButton>to cart</AppButton>
        </Link>
      </div>
    </form>
  );
};
