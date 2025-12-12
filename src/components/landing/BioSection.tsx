import { motion } from "framer-motion";
import { Award, Users, Globe, BookOpen } from "lucide-react";

const stats = [
  { icon: Users, value: "+10.000", label: "Alunos formados" },
  { icon: Globe, value: "7+", label: "Anos de mercado" },
  { icon: Award, value: "+500", label: "Traduções entregues" },
  { icon: BookOpen, value: "3", label: "Cursos criados" },
];

const BioSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-gradient-pink/20 border border-primary/30">
              <img
                src="https://placehold.co/600x800/1a1a1a/7E33FF?text=Naluzz"
                alt="Naluzz - Especialista em Tradução"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-gradient-pink/20 rounded-3xl blur-3xl -z-10 opacity-50" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <span className="text-highlight-orange font-semibold text-sm uppercase tracking-wider">
              Quem é a Naluzz
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              A tradutora que ensina pessoas comuns a{" "}
              <span className="gradient-text">faturar com inglês</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Naluzz começou como muita gente: formada em outra área, mas com um inglês
                que parecia "desperdiçado". Depois de descobrir o mercado de tradução,
                transformou uma habilidade subutilizada em uma carreira de sucesso.
              </p>
              <p>
                Hoje, além de tradutora profissional, ela é referência quando o assunto é
                ensinar outras pessoas a fazer o mesmo caminho — com clareza, método e
                resultados reais.
              </p>
              <p>
                Criadora do método <strong className="text-foreground">Tradutor 5K</strong>,
                ela já ajudou milhares de alunos a conquistarem renda extra (ou principal)
                trabalhando de casa, no próprio horário, sem diploma e sem enrolação.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
