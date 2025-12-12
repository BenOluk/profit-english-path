import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  className?: string;
}

const CTAButton = ({ children, className = "" }: CTAButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`gradient-primary px-8 py-4 md:px-10 md:py-5 rounded-xl text-base md:text-lg font-bold uppercase tracking-wide text-foreground shadow-lg glow-pink transition-all duration-300 hover:brightness-110 ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default CTAButton;
