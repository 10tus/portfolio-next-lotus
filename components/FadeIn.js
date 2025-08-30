import { motion } from "framer-motion";
import React from "react";

const FadeIn = ({ children, styleCss, y = 100, duration = 1 }) => {
  const secVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: duration,
      },
    },
    hidden: { opacity: 0, y },
  };
  return (
    <motion.div
      variants={secVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={styleCss}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
