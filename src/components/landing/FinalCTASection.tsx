import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
const FinalCTASection = () => {
  return <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-hero via-hero/80 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-gradient-pink/10 via-transparent to-gradient-purple/10" />
      
      {/* Glow effects */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-pink/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-purple/20 rounded-full blur-[100px]" />

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
      }} className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto pra{" "}
            <span className="text-highlight">transformar</span> seu inglês em{" "}
            <span className="gradient-text">renda real?</span>
          </h2>

          <p className="text-xl text-off-white/80 mb-10 max-w-2xl mx-auto">Entre agora na Imersão Gravada e descubra como dar o primeiro passo rumo à sua independência financeira.</p>

          <motion.div whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }}>
            <CTAButton href="https://pay.kiwify.com.br/be0Jzax" className="text-lg md:text-xl px-12 py-6">
              QUERO PARTICIPAR AGORA
            </CTAButton>
          </motion.div>

          <p className="mt-6 text-sm text-muted-foreground">Imersão gravada - Acesso Imediato</p>
        </motion.div>
      </div>
    </section>;
};
export default FinalCTASection;