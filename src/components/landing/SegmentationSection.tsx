import CTAButton from "./CTAButton";

const segments = [
  {
    emoji: "💸",
    title: "Quer transformar seu inglês em dinheiro, não só em consumo de conteúdo",
    description: "E cansou de estudar idioma pra ver série e nada mais",
  },
  {
    emoji: "🧑‍💼",
    title: "Quer uma nova profissão ou uma fonte de renda extra",
    description: "E quer reencontrar leveza, sem recomeçar do zero",
  },
  {
    emoji: "🚪",
    title: "Quer sair da CLT e conquistar liberdade de tempo, geográfica e financeira",
    description: "Sem virar influenciador ou empreender em algo que não faz sentido",
  },
  {
    emoji: "⏳",
    title: "Sente que desperdiçou tempo e dinheiro aprendendo inglês — e agora quer retorno",
    description: "Monetizando uma habilidade que você já tem",
  },
  {
    emoji: "🚀",
    title: "Busca uma nova fonte de renda que pague bem e respeite sua individualidade",
    description: "Sem chefe, sem rotina engessada, sem crachá",
  },
  {
    emoji: "📚",
    title: "Quer aprender algo aplicável, rápido e com retorno real",
    description: "Sem 4 anos de faculdade, sem gastar com cursos técnicos, sem enrolação",
  },
];

const SegmentationSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card relative overflow-hidden">
      <div className="absolute left-1/2 top-0 w-96 h-96 bg-gradient-purple/10 rounded-full blur-[120px] -translate-x-1/2" />
      
      <div className="container relative z-10">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
            <span className="text-highlight">✦</span> Se você...
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-12">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="glass-card p-6 flex items-start gap-4 group hover:border-gradient-pink/40 transition-all duration-300"
              >
                <span className="text-3xl">{segment.emoji}</span>
                <div>
                  <p className="text-foreground font-semibold leading-relaxed mb-1">
                    {segment.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {segment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xl md:text-2xl font-bold text-foreground mb-8">
            Você <span className="text-highlight">PRECISA</span> participar da Imersão INGLÊS LUCRATIVO
          </p>

          <div className="text-center">
            <CTAButton onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}>
              GARANTA SEU INGRESSO AGORA
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegmentationSection;