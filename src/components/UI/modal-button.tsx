"use client";

import { FC, PropsWithChildren } from "react";
import { useModal } from "@/hooks/global/use-modal";
import { AppIcon } from "@/components/UI/app-icon";

interface ModalButtonProps {
  icon: JSX.Element;
}

export const ModalButton: FC<PropsWithChildren<ModalButtonProps>> = ({
  icon,
  children,
}) => {
  const onOpen = useModal((state) => state.onOpen);
  const modalHandler = () => {
    onOpen(children);
  };

  return <AppIcon action={modalHandler} icon={icon} />;
};
