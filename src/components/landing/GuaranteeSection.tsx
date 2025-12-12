import { motion } from "framer-motion";
import { Shield, CheckCircle2 } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-12 md:py-16 bg-card/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 md:p-10 rounded-2xl border border-primary/30 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Compromisso de <span className="gradient-text">Conteúdo de Valor</span>
            </h3>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              A Imersão Inglês Lucrativo é 100% gratuita porque acreditamos que você precisa 
              conhecer o caminho antes de decidir seguir. Sem pegadinhas, sem vendas forçadas. 
              Apenas conteúdo real que pode mudar sua vida.
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Sem spam</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Sem enrolação</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
