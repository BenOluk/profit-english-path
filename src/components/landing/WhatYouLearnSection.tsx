import { Check } from "lucide-react";
import CTAButton from "./CTAButton";

const learnings = [
  "Como esse mercado realmente funciona",
  "Como começar do jeito certo",
  "E como transformar seu inglês em até R$5 mil por mês sem precisar mudar de vida — só de rota.",
];

const WhatYouLearnSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-gradient-pink/10 rounded-full blur-[100px]" />
      <div className="absolute left-0 bottom-1/4 w-60 h-60 bg-primary/10 rounded-full blur-[80px]" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            A verdade é:
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            Você pode começar <span className="text-highlight-orange font-semibold">agora</span>, com o inglês que já sabe, e transformar isso em uma fonte real de renda — mesmo que esteja começando do zero na área.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-8">
            No Aulão Inglês Lucrativo, você aprende:
          </h3>

          <div className="space-y-4 mb-10">
            {learnings.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 text-left"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-highlight-orange font-semibold text-lg">
              ➜ Aulão Inglês Lucrativo - Acesso Imediato
            </p>
            <CTAButton onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })} className="mx-auto">
              QUERO ACESSAR O AULÃO AGORA
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
