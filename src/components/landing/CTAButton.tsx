import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const CTAButton = ({
  children,
  className = "",
  href,
  onClick,
  isPulsing = false,
}: CTAButtonProps & { isPulsing?: boolean }) => {
  // Condicionalmente adicione a classe da animação
  const pulseClass = isPulsing ? "animate-pulse-custom relative" : "";

  const baseClasses = `gradient-primary px-8 py-4 md:px-10 md:py-5 rounded-xl text-base md:text-lg font-bold uppercase tracking-wide text-foreground shadow-lg glow-pink transition-all duration-300 hover:brightness-110 inline-block text-center ${className} ${pulseClass}`;

  if (href) {
    return (
      <motion.a
        // ... outras props
        className={baseClasses} // baseClasses agora inclui a classe do pulso
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      // ... outras props
      className={baseClasses} // baseClasses agora inclui a classe do pulso
    >
      {children}
    </motion.button>
  );
};
