import { FC, PropsWithChildren } from "react";

interface PopUpProps {
  close: () => void;
}

export const PopUp: FC<PropsWithChildren<PopUpProps>> = ({
  children,
  close,
}) => {
  return (
    <div className="fixed inset-0 top-[60px]">
      <div className="bg-white">{children}</div>
      <div onMouseEnter={close} className="w-full h-full backdrop-blur-sm" />
    </div>
  );
};
