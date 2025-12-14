import { Check } from "lucide-react";

const learnings = [
  "Como esse mercado realmente funciona",
  "Como começar do jeito certo",
  "E como transformar seu inglês em até R$5 mil por mês sem precisar mudar de vida — só de rota.",
];

const ArgumentSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative">
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-gradient-purple/10 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 leading-tight">
            A <span className="gradient-text">profissão invisível</span> que pode ser sua{" "}
            <span className="text-highlight">rota de escape</span> silenciosa
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-off-white/80 leading-relaxed">
            <p>
              No mundo todo, tem gente ganhando muito bem trabalhando nos bastidores de tudo que você já consome:{" "}
              <span className="text-foreground font-medium">livros, séries, documentários e filmes.</span>
            </p>

            <p>
              Essa profissão não exige palco, nem diploma, nem câmera ligada. 
              Só exige o que você já tem: <span className="text-highlight font-semibold">um segundo idioma.</span>
            </p>

            <p>
              E ao contrário do que dizem por aí, a tecnologia não matou esse mercado — 
              ela <span className="text-foreground font-medium">valorizou quem sabe usar as ferramentas</span> com inteligência e entrega de verdade.
            </p>

            <p className="text-foreground font-semibold text-xl md:text-2xl py-4">
              O que falta hoje não são máquinas.{" "}
              <span className="gradient-text">É gente qualificada</span> que saiba entregar um bom trabalho.
            </p>

            <p className="text-foreground font-semibold text-xl md:text-2xl">
              E a verdade é:
            </p>

            <p>
              Você pode começar <span className="text-highlight-orange font-semibold">agora</span>, com o inglês que já sabe, 
              e transformar isso em uma fonte real de renda — mesmo que esteja começando do zero na área.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-muted/20">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-8 text-center">
              Na Imersão Inglês Lucrativo, você aprende:
            </h3>

            <div className="space-y-4 max-w-2xl mx-auto">
              {learnings.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArgumentSection;