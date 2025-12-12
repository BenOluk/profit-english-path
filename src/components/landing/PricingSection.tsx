import { motion } from "framer-motion";
import { Check, Gift } from "lucide-react";
import CTAButton from "./CTAButton";

const includedItems = [
  { text: "Acesso à Imersão Gravada de Tradução INGLÊS LUCRATIVO", highlight: true },
  { text: "15 dias de acesso: Libere seu acesso imediatamente e tenha 2 semanas pra assistir ao conteúdo", highlight: false },
  { text: "BÔNUS: Hot List, uma lista com os 25 principais sites para você prospectar trabalhos de tradução.", highlight: false },
];

const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Comece seu <span className="gradient-text italic">aprendizado</span> aqui:
          </h2>
        </motion.div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-gradient-pink to-primary rounded-3xl blur-xl opacity-40" />

            {/* Card */}
            <div className="relative glass-card p-6 md:p-8 rounded-2xl border-2 border-primary/50">
              {/* Included items */}
              <div className="space-y-4 mb-8">
                {includedItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded bg-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index === 2 ? (
                        <Gift className="w-3 h-3 text-primary" />
                      ) : (
                        <Check className="w-3 h-3 text-primary" />
                      )}
                    </div>
                    <span className="text-foreground/90 text-sm leading-relaxed">
                      {index === 0 ? (
                        <>Acesso à <span className="text-gradient-pink font-semibold underline">Imersão Gravada de Tradução INGLÊS LUCRATIVO</span></>
                      ) : index === 1 ? (
                        <><span className="font-semibold">15 dias de acesso:</span> Libere seu acesso imediatamente e tenha 2 semanas pra assistir ao conteúdo</>
                      ) : (
                        <><span className="font-semibold">BÔNUS:</span> Hot List, uma lista com os 25 principais sites para você prospectar trabalhos de tradução.</>
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="text-muted-foreground text-sm text-center mb-4">
                Garanta seu ingresso por apenas
              </p>

              {/* Price */}
              <div className="text-center pb-6 border-b border-border/50">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">R$ 25</span>
                </div>
                <p className="text-muted-foreground text-sm mt-1">
                  à vista
                </p>
                <p className="text-muted-foreground text-xs mt-2">
                  ou 5x de R$ 5,54
                </p>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <CTAButton className="w-full text-center justify-center">
                  QUERO MEU INGRESSO + BÔNUS!
                </CTAButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
