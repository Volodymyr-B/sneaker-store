"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { signInSchema, SignInValues } from "@/lib/helpers/schema";
import { FormInput } from "@/components/UI/form-input";
import { AppButton } from "@/components/UI/app-button";

export const SignInForm = () => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || `/`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValues>({ resolver: zodResolver(signInSchema) });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      }).then((res) => {
        if (res?.error) {
          toast.error("Credentials do not match!", { id: "unique" });
        } else router.push(callbackUrl);
      });
    } catch (e) {
      toast.error((e as Error).message, { id: "unique" });
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className="w-full">
      <h5 className="hidden md:block">sign-in</h5>
      <form onSubmit={onSubmit}>
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
        <AppButton disabled={isLoading} isLoading={isLoading} type="submit">
          sign in
        </AppButton>
      </form>
    </div>
  );
};
