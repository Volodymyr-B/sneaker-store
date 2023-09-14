"use client";

import { FC, PropsWithChildren, useState } from "react";

interface AppAccordionProps {
  title: string;
}

export const AppAccordion: FC<PropsWithChildren<AppAccordionProps>> = ({
  children,
  title,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button
        className="flex justify-between items-center"
        onClick={() => setIsActive(!isActive)}
      >
        <h6>{title}</h6>
        <div
          className="w-7 h-7 bg-app-primary_action hover:bg-app-primary_hover rounded-full text-2xl 
        flex justify-center items-center"
        >
          {isActive ? "-" : "+"}
        </div>
      </button>
      {isActive && <>{children}</>}
    </>
  );
};
