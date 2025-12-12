import { Search, Briefcase, Rocket, Target, TrendingDown } from "lucide-react";

const discoveries = [
  {
    icon: Search,
    emoji: "🔎",
    title: "Como usar seu inglês pra gerar renda real.",
    description: "Não é aula de gramática. É como transformar o que você já sabe em dinheiro no Pix.",
  },
  {
    icon: Briefcase,
    emoji: "💼",
    title: "O que é a Profissão Invisível que paga bem e não exige aparecer.",
    description: "Trabalhe dos bastidores — de onde quiser, com quem quiser.",
  },
  {
    icon: Rocket,
    emoji: "🚀",
    title: "Como começar como tradutor, mesmo sem experiência.",
    description: "Sem faculdade, sem diploma e sem precisar dominar ferramentas complicadas.",
  },
  {
    icon: Target,
    emoji: "🎯",
    title: "Onde conseguir seus primeiros clientes e como cobrar mais desde o início.",
    description: "O caminho pra sair do amadorismo mais rápido do que você imagina.",
  },
  {
    icon: TrendingDown,
    emoji: "📉",
    title: "Os maiores mitos que te travam.",
    description: "Spoiler: IA não acabou com a tradução — ela só eliminou quem era raso.",
  },
];

const DiscoverySection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-gradient-pink/10 rounded-full blur-[100px]" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
            No Aulão Inglês Lucrativo, você vai{" "}
            <span className="gradient-text">descobrir:</span>
          </h2>

          <div className="space-y-5">
            {discoveries.map((item, index) => (
              <div
                key={index}
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
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl md:text-2xl text-off-white/80 leading-relaxed max-w-3xl mx-auto">
              Nada de conteúdo engessado. É{" "}
              <span className="text-highlight font-semibold">papo reto</span> sobre dinheiro, 
              liberdade e o poder de usar seu inglês com{" "}
              <span className="gradient-text font-semibold">estratégia.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;
