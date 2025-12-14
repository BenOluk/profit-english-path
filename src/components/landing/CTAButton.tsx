import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const CTAButton = ({ children, className = "", href, onClick }: CTAButtonProps) => {
  // 1. Removi "animate-pulse" desta string
  const baseClasses = `gradient-primary px-8 py-4 md:px-10 md:py-5 rounded-xl text-base md:text-lg font-bold uppercase tracking-wide text-foreground shadow-lg glow-pink transition-all duration-300 hover:brightness-110 inline-block text-center ${className}`;

  // 2. Definindo a animação para reutilizar (opacidade pulsando)
  const pulseAnimation = {
    opacity: [1, 0.6, 1], // Vai de 100% para 60% e volta para 100%
    scale: [1, 1.02, 1], // (Opcional) Um leve "respiro" no tamanho
  };

  const pulseTransition = {
    duration: 3, // AQUI você controla a velocidade (3 segundos é mais lento)
    repeat: Infinity,
    ease: "easeInOut",
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        // Adicionando a animação customizada
        animate={pulseAnimation}
        transition={pulseTransition}
        whileHover={{ scale: 1.05, opacity: 1 }} // Garante opacidade total no hover
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
      // Adicionando a animação customizada
      animate={pulseAnimation}
      transition={pulseTransition}
      whileHover={{ scale: 1.05, opacity: 1 }}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
};

export default CTAButton;
