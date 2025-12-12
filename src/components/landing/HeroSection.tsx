import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gradient-purple via-gradient-purple/80 to-background overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-pink/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-purple/30 rounded-full blur-[100px]" />
      
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 text-foreground">
            VOCÊ ESTÁ USANDO{" "}
            <span className="text-highlight">ERRADO</span>{" "}
            O SEU INGLÊS!
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl lg:text-2xl text-off-white/90 leading-relaxed mb-8">
            Você estudou inglês por anos, mas no fim só usa pra entender música e série? 
            Enquanto isso, tem gente ganhando mais de{" "}
            <span className="text-highlight font-semibold">R$5 mil por mês</span>{" "}
            com metade do seu nível de inglês — E sem nem precisar aparecer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-base md:text-lg text-off-white/70 leading-relaxed">
            Descubra a <span className="text-foreground font-semibold">profissão invisível</span>, 
            que vai te pagar em Dólar/Euro, usando a ferramenta que você já tem: 
            <span className="text-highlight"> O seu segundo idioma.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <CTAButton onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}>QUERO PARTICIPAR DO AULÃO</CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
