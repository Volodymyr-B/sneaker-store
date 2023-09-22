"use client";

import { useEffect } from "react";
import { motion, useAnimationControls, useScroll } from "framer-motion";
import { BsArrowUp } from "react-icons/bs";

export const ScrollToTopButton = () => {
  const { scrollY } = useScroll();
  const controls = useAnimationControls();

  const onScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollY.on("change", (latestValue) => {
      if (latestValue > 700) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  }, [controls, scrollY]);
  return (
    <motion.button
      className="fixed bottom-12 right-3 w-12 md:w-16 h-12 md:h-16 z-30 rounded-full
       justify-center items-center shadow-glow border-none bg-gray-100 drop-shadow-lg
      lg:hover:text-app-secondary_hover active:text-app-secondary_hover"
      variants={{
        hide: { opacity: 0, display: "none" },
        show: { opacity: 1, display: "flex" },
      }}
      initial="hide"
      animate={controls}
      onClick={onScrollToTop}
    >
      <BsArrowUp size={25} />
    </motion.button>
  );
};
