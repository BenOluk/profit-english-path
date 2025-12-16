import { motion } from "framer-motion";

const Ticker = () => {
  // 1. Removi os emojis da string de texto para separar o estilo
  const text = "EXCLUSIVO PARA PESSOAS COM INGLÊS INTERMEDIÁRIO OU AVANÇADO";

  // Duplicate content for seamless loop
  const items = Array(8).fill(text);

  return (
    <div className="relative z-20 w-full overflow-hidden bg-gradient-pink/20 backdrop-blur-sm border-y border-white/10 py-3">
      <motion.div
        className="flex whitespace-nowrap w-max"
        animate={{ x: "-50%" }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Loop original */}
        {items.map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            {/* Emoji em um span normal (mantém a cor original) */}
            <span className="mr-2 text-sm md:text-base">🚨</span>

            {/* Texto com o efeito gradient */}
            <span className="gradient-text font-semibold text-sm md:text-base">{item}</span>

            {/* Emoji final */}
            <span className="ml-2 text-sm md:text-base">🚨</span>
          </div>
        ))}

        {/* Loop duplicado (para o efeito infinito) */}
        {items.map((item, index) => (
          <div key={`duplicate-${index}`} className="flex items-center mx-8">
            <span className="mr-2 text-sm md:text-base">🚨</span>
            <span className="gradient-text font-semibold text-sm md:text-base">{item}</span>
            <span className="ml-2 text-sm md:text-base">🚨</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;
