import { ReactNode } from "react";
import { create } from "zustand";

interface ModalStore {
  isOpen: boolean;
  children?: ReactNode;
  onOpen: (children: ReactNode) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  isOpen: false,
  children: undefined,
  onOpen: (children: ReactNode) => set({ isOpen: true, children }),
  onClose: () => set({ isOpen: false }),
}));
