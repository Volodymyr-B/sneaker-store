"use client";

import { FC, PropsWithChildren, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { AppIcon } from "@/components/UI/app-icon";
import { Container } from "@/components/common/container";

interface ModalProps {
  onClose: () => void;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  onClose,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-30">
      <div onClick={onClose} className="w-full h-full backdrop-blur-sm" />
      <div
        className="bg-white absolute top-0 right-0 min-w-[320px]
      h-full overflow-y-scroll drop-shadow-lg"
      >
        <Container>
          <div className="flex flex-col gap-2">
            <div className="flex justify-end">
              <AppIcon icon={<GrClose />} action={onClose} />
            </div>
            <div>{children}</div>
          </div>
        </Container>
      </div>
    </div>
  );
};
