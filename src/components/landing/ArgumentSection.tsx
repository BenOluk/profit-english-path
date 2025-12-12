import { motion } from "framer-motion";

const ArgumentSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative">
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-gradient-purple/10 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 leading-tight">
            A <span className="gradient-text">profissão invisível</span> que pode ser sua{" "}
            <span className="text-highlight">rota de escape</span> silenciosa
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-off-white/80 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              No mundo todo, tem gente ganhando muito bem trabalhando nos bastidores de tudo que você já consome:{" "}
              <span className="text-foreground font-medium">livros, séries, documentários e filmes.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Essa profissão não exige palco, nem diploma, nem câmera ligada. 
              Só exige o que você já tem: <span className="text-highlight font-semibold">um segundo idioma.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              E ao contrário do que dizem por aí, a tecnologia não matou esse mercado — 
              ela <span className="text-foreground font-medium">valorizou quem sabe usar as ferramentas</span> com inteligência e entrega de verdade.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-foreground font-semibold text-xl md:text-2xl py-4"
            >
              O que falta hoje não são máquinas.{" "}
              <span className="gradient-text">É gente qualificada</span> que saiba entregar um bom trabalho.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              E a verdade é: Você pode começar agora, com o inglês que já sabe, 
              e transformar isso em uma <span className="text-highlight font-semibold">fonte real de renda</span> — 
              mesmo que esteja começando do zero na área.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArgumentSection;
