"use client";

import { FC, PropsWithChildren, useEffect } from "react";
import { motion } from "framer-motion";
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
      <motion.div
        className="bg-white absolute top-0 right-0 
          h-full overflow-y-scroll drop-shadow-lg"
        initial={{ width: "60px" }}
        animate={{ width: "auto", minWidth: "320px" }}
      >
        <Container>
          <div className="flex flex-col gap-2">
            <div className="flex justify-end">
              <AppIcon icon={<GrClose />} action={onClose} />
            </div>
            <div>{children}</div>
          </div>
        </Container>
      </motion.div>
    </div>
  );
};
