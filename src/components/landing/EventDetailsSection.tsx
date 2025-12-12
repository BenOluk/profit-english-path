import { motion } from "framer-motion";
import { Calendar, Play } from "lucide-react";
import CTAButton from "./CTAButton";

const EventDetailsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gradient-pink/5 via-transparent to-gradient-purple/5" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 text-center border-gradient-pink/30 glow-purple">
            <div className="inline-flex items-center gap-2 gradient-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-8">
              <Play className="w-4 h-4" />
              Transmissão Exclusiva
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Aulão <span className="gradient-text">Inglês Lucrativo</span>
            </h2>

            <div className="flex items-center justify-center gap-3 text-xl md:text-2xl font-semibold text-foreground mb-10">
              <Calendar className="w-6 h-6 text-highlight" />
              <span>27/11, a partir das 19h</span>
              <span className="text-muted-foreground">(Quinta-feira)</span>
            </div>

            <CTAButton>
              QUERO FAZER DINHEIRO COMO TRADUTOR
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
