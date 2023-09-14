"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";
import { post } from "@/lib/utils/crud";
import { signUpSchema, SignUpValues } from "@/lib/helpers/schema";
import { AppButton } from "@/components/UI/app-button";
import { FormInput } from "@/components/UI/form-input";
import type { UserValues } from "@/types/dto-out";
import type { UserFull } from "@/types/dto-in";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>({ resolver: zodResolver(signUpSchema) });

  const { trigger, isMutating } = useSWRMutation(
    `/api/registration`,
    post<UserFull, UserValues>
  );

  const onSubmit = handleSubmit(async ({ confirmPassword, ...data }) => {
    try {
      await trigger(data);
      await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/",
      });
    } catch (e) {
      toast.error((e as Error).message, { id: "unique" });
    }
  });

  return (
    <div className="w-full">
      <h5 className="hidden md:block">sign-up</h5>
      <form onSubmit={onSubmit}>
        <FormInput
          placeholder="name"
          {...register("name")}
          error={errors.name?.message}
        />
        <FormInput
          type="email"
          placeholder="email"
          {...register("email")}
          error={errors.email?.message}
        />
        <FormInput
          type="password"
          placeholder="password"
          {...register("password")}
          error={errors.password?.message}
        />
        <FormInput
          type="password"
          placeholder="confirm password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
        <AppButton disabled={isMutating} isLoading={isMutating} type="submit">
          sign up
        </AppButton>
      </form>
    </div>
  );
};
