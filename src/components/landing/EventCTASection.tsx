import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
const EventCTASection = () => {
  return <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gradient-purple/20 via-transparent to-gradient-pink/20" />

      <div className="container relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Imersão Inglês Lucrativo</span>
          </h2>

          <p className="text-xl md:text-2xl text-foreground font-semibold mb-2">Imersão Gravada</p>

          <p className="text-lg md:text-xl text-highlight-orange font-bold mb-2">Acesso Imediato</p>

          <p className="text-lg text-muted-foreground mb-8">15 dias de acesso </p>

          <p className="text-lg text-muted-foreground mb-8">Bônus Exclusivo: Hot List: 25 principais sites pra conseguir trabalhos na internet</p>

          <CTAButton onClick={() => document.getElementById("oferta")?.scrollIntoView({
          behavior: "smooth"
        })}>
            QUERO FAZER DINHEIRO COMO TRADUTOR
          </CTAButton>
        </motion.div>
      </div>
    </section>;
};
export default EventCTASection;