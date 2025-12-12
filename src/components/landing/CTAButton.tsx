import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const CTAButton = ({ children, className = "", href, onClick }: CTAButtonProps) => {
  const baseClasses = `gradient-primary px-8 py-4 md:px-10 md:py-5 rounded-xl text-base md:text-lg font-bold uppercase tracking-wide text-foreground shadow-lg glow-pink transition-all duration-300 hover:brightness-110 inline-block text-center animate-button-pulse ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={baseClasses}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
};

export default CTAButton;
