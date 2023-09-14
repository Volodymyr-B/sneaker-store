"use client";

import { signOut } from "next-auth/react";

export const SignOutBtn = () => {
  return (
    <button
      className="bg-app-secondary_action text-white hover:text-app-secondary_hover
      px-4 md:px-8 py-1 rounded-md transition-all duration-300"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Sign Out
    </button>
  );
};
