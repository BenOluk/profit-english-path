import { motion } from "framer-motion";
import { Play, Clock, Repeat, Download, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Play,
    title: "Assista no seu tempo",
    description: "Sem pressa, sem correria. Veja e reveja quando quiser.",
  },
  {
    icon: Repeat,
    title: "Replay ilimitado",
    description: "Acesse quantas vezes precisar durante o período disponível.",
  },
  {
    icon: Headphones,
    title: "Conteúdo premium",
    description: "Qualidade de áudio e vídeo profissional.",
  },
  {
    icon: Download,
    title: "Material de apoio",
    description: "Slides e materiais complementares para download.",
  },
];

const RecordedAccessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-hero-purple relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-highlight-orange font-semibold text-sm uppercase tracking-wider">
              Não pôde assistir ao vivo?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Acesso à{" "}
              <span className="text-highlight-orange">Imersão Gravada</span>
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Se você perdeu a transmissão ao vivo ou quer rever o conteúdo com calma, 
              não se preocupe! A gravação completa ficará disponível para você assistir 
              no seu próprio ritmo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="bg-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-foreground/20"
                >
                  <benefit.icon className="w-6 h-6 text-highlight-orange mb-2" />
                  <h3 className="font-semibold text-foreground text-sm mb-1">{benefit.title}</h3>
                  <p className="text-foreground/70 text-xs">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4">
              <Clock className="w-5 h-5 text-highlight-orange" />
              <p className="text-foreground/80 text-sm">
                <strong className="text-foreground">Atenção:</strong> A gravação fica disponível por tempo limitado!
              </p>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden bg-background/20 border-2 border-foreground/20 shadow-2xl">
              {/* Fake video player */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-background/50 to-background/30 relative">
                <img
                  src="https://placehold.co/800x450/1a1a1a/7E33FF?text=Imers%C3%A3o+Gravada"
                  alt="Imersão Gravada"
                  className="w-full h-full object-cover opacity-60"
                />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center glow-pink cursor-pointer">
                    <Play className="w-8 h-8 text-foreground ml-1" fill="currentColor" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-8 bg-gradient-pink/20 rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecordedAccessSection;
