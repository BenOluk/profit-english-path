import { motion } from "framer-motion";
import { Check } from "lucide-react";

const learnings = [
  "Como esse mercado realmente funciona",
  "Como começar do jeito certo",
  "E como transformar seu inglês em até R$5 mil por mês sem precisar mudar de vida — só de rota.",
];

const WhatYouLearnSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-gradient-pink/10 rounded-full blur-[100px]" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            No <span className="gradient-text">Aulão Inglês Lucrativo</span>, você aprende:
          </h2>

          <div className="space-y-5">
            {learnings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="flex items-start gap-4 text-left glass-card p-5"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary flex items-center justify-center mt-0.5">
                  <Check className="w-5 h-5 text-foreground" />
                </div>
                <p className="text-lg md:text-xl text-off-white/90 leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
