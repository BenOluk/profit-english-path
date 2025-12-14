import { motion } from "framer-motion";

const discoveries = [
  {
    emoji: "🔎",
    title: "Como usar seu inglês pra gerar renda real",
    description: "Não é aula de gramática. É como transformar o que você já sabe em dinheiro no Pix.",
  },
  {
    emoji: "🛋",
    title: "O que é a Profissão Invisível que paga bem e não exige aparecer",
    description: "Trabalhe dos bastidores — de onde quiser, com quem quiser.",
  },
  {
    emoji: "🚀",
    title: "Como começar como tradutor, mesmo sem experiência",
    description: "Sem faculdade, sem diploma e sem precisar dominar ferramentas complicadas.",
  },
  {
    emoji: "🎯",
    title: "Onde conseguir seus primeiros clientes e como cobrar mais desde o início",
    description: "O caminho pra sair do amadorismo mais rápido do que você imagina.",
  },
  {
    emoji: "📉",
    title: "Os maiores mitos que te travam (e o que realmente importa nesse mercado)",
    description: "Spoiler: IA não acabou com a tradução — ela só eliminou quem era raso.",
  },
];

const DiscoverySection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-gradient-pink/10 rounded-full blur-[100px]" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
            Na Imersão Inglês Lucrativo, você vai{" "}
            <span className="gradient-text">descobrir:</span>
          </h2>

          <div className="space-y-5">
            {discoveries.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 md:p-8 group hover:border-highlight/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="text-3xl md:text-4xl">{item.emoji}</span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-highlight transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-xl md:text-2xl text-off-white/80 leading-relaxed max-w-3xl mx-auto">
              Nada de conteúdo engessado. É{" "}
              <span className="text-highlight font-semibold">papo reto</span> sobre dinheiro, 
              liberdade e o poder de usar seu inglês com{" "}
              <span className="gradient-text font-semibold">estratégia.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoverySection;
