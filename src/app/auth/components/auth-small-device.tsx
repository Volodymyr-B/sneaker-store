"use client";

import { useState } from "react";
import { SignInForm } from "@/app/auth/components/sign-in-form";
import { SignUpForm } from "@/app/auth/components/sign-up-form";

export const AuthSmallDevice = () => {
  const [visible, setVisible] = useState(false);

  const leftHandler = () => {
    if (!visible) return;
    setVisible(!visible);
  };
  const rightHandler = () => {
    if (visible) return;
    setVisible(!visible);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-around">
        <button
          className="active:text-app-primary_action"
          onClick={leftHandler}
        >
          <h5>sign-in</h5>
        </button>
        <button
          className="active:text-app-primary_action"
          onClick={rightHandler}
        >
          <h5>sign-up</h5>
        </button>
      </div>
      {visible ? <SignUpForm /> : <SignInForm />}
    </div>
  );
};
