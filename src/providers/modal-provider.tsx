"use client";

import { useModal } from "@/hooks/global/use-modal";
import { useMounted } from "@/hooks/instance/use-mounted";
import { Modal } from "@/components/UI/modal";

export const ModalProvider = () => {
  const isMounted = useMounted();
  const { isOpen, onClose, children } = useModal();

  if (!isMounted || !isOpen) return null;

  return <Modal onClose={onClose}>{children}</Modal>;
};
