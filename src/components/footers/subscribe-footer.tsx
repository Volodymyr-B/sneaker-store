"use client";

import { FormEvent } from "react";
import toast from "react-hot-toast";
import { AppButton } from "@/components/UI/app-button";
import { FormInput } from "@/components/UI/form-input";

export const SubscribeFooter = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast("Work in progress, form doesn't work", {
      id: "unique",
    });
  };

  return (
    <footer className="mt-16">
      <form
        onSubmit={onSubmit}
        className="flex gap-3 justify-between flex-col lg:flex-row"
      >
        <div>
          <AppButton type="submit">subscribe</AppButton>
        </div>
        <div className="min-w-[265px]">
          <FormInput
            readOnly
            value="example@gmail.com"
            type="email"
            placeholder="email"
          />
        </div>
      </form>
    </footer>
  );
};
