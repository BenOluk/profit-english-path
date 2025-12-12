import { motion } from "framer-motion";
import { Check, Sparkles, Clock, Video, Users, MessageCircle, Shield } from "lucide-react";
import CTAButton from "./CTAButton";

const includedItems = [
  { icon: Video, text: "Acesso à Imersão Inglês Lucrativo (Ao Vivo)" },
  { icon: Clock, text: "Replay disponível por 7 dias" },
  { icon: Users, text: "Comunidade exclusiva no Telegram" },
  { icon: MessageCircle, text: "Tira-dúvidas ao vivo durante o evento" },
  { icon: Shield, text: "Certificado de participação" },
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
          <span className="text-highlight-orange font-semibold text-sm uppercase tracking-wider">
            Inscrição
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Garanta sua vaga{" "}
            <span className="gradient-text">100% Gratuita</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Por tempo limitado, você pode participar da Imersão Inglês Lucrativo sem pagar nada
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-gradient-pink to-primary rounded-3xl blur-xl opacity-30 animate-pulse" />

            {/* Card */}
            <div className="relative glass-card p-8 md:p-10 rounded-2xl border-2 border-primary/50">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-highlight-orange text-foreground text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  VAGAS LIMITADAS
                </span>
              </div>

              {/* Price */}
              <div className="text-center pt-4 pb-6 border-b border-border/50">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-muted-foreground line-through text-xl">R$ 97,00</span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl md:text-6xl font-bold gradient-text">GRÁTIS</span>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  Apenas para esta edição especial
                </p>
              </div>

              {/* Included items */}
              <div className="py-6 space-y-4">
                <p className="text-foreground font-semibold text-center mb-4">
                  O que você recebe:
                </p>
                {includedItems.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/90 text-sm md:text-base">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <CTAButton className="w-full text-center justify-center">
                  QUERO MINHA VAGA GRATUITA
                </CTAButton>
                <p className="text-center text-muted-foreground text-xs mt-4">
                  🔒 Seus dados estão seguros e não serão compartilhados
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
