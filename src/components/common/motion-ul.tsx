import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/tw-merge";

interface MotionUlProps {
  className?: string;
  animationSpeed?: number;
}

export const MotionUl: FC<PropsWithChildren<MotionUlProps>> = ({
  children,
  className,
  animationSpeed = 0.2,
}) => {
  return (
    <motion.ul
      className={cn("", className)}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: animationSpeed,
          },
        },
        hidden: {
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        },
      }}
    >
      {children}
    </motion.ul>
  );
};
