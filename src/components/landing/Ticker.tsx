import { motion } from "framer-motion";

const Ticker = () => {
  const text = "🚨 EXCLUSIVO PARA PESSOAS COM INGLÊS INTERMEDIÁRIO OU AVANÇADO 🚨";

  // Duplicate content for seamless loop
  const items = Array(8).fill(text);

  return (
    <div className="relative z-20 w-full overflow-hidden bg-gradient-pink/20 backdrop-blur-sm border-y border-white/10 py-3">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: "-50%" }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear" as const,
        }}
      >
        {items.map((item, index) => (
          <span key={index} className="gradient-text font-semibold mx-8 text-sm md:text-base">
            {item}
          </span>
        ))}
        {items.map((item, index) => (
          <span key={`duplicate-${index}`} className="gradient-text font-semibold mx-8 text-sm md:text-base">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;
