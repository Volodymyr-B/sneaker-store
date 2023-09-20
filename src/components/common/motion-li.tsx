import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

export const MotionLi: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.li
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 },
      }}
    >
      {children}
    </motion.li>
  );
};
