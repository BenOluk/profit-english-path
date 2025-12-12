import { Lightbulb, TrendingUp, MapPin, Coins, UserCheck, Zap } from "lucide-react";
import CTAButton from "./CTAButton";

const segments = [
  {
    icon: Lightbulb,
    text: "Quer transformar seu inglês em dinheiro, não só em consumo de conteúdo. E cansou de estudar idioma pra ver série e nada mais.",
  },
  {
    icon: TrendingUp,
    text: "Quer uma nova profissão ou uma fonte de renda extra. E quer reencontrar leveza, sem recomeçar do zero.",
  },
  {
    icon: MapPin,
    text: "Quer sair da CLT e conquistar liberdade de tempo, geográfica e financeira. Sem virar influenciador ou empreender em algo que não faz sentido.",
  },
  {
    icon: Coins,
    text: "Sente que desperdiçou tempo e dinheiro aprendendo inglês — e agora quer retorno monetizando uma habilidade que você já tem.",
  },
  {
    icon: UserCheck,
    text: "Busca uma nova fonte de renda que pague bem e respeite sua individualidade. Sem chefe, sem rotina engessada, sem crachá.",
  },
  {
    icon: Zap,
    text: "Quer aprender algo aplicável, rápido e com retorno real. Sem 4 anos de faculdade, sem gastar com cursos técnicos, sem enrolação.",
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-8">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="glass-card p-6 flex items-start gap-4 group hover:border-gradient-pink/40 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <segment.icon className="w-6 h-6 text-foreground" />
                </div>
                <p className="text-off-white/90 leading-relaxed">
                  {segment.text}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Esse aulão foi feito especialmente para você
          </p>

          <div className="text-center">
            <CTAButton onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}>GARANTA SEU INGRESSO AGORA</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegmentationSection;
