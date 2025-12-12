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

            <p>
              E a verdade é: Você pode começar agora, com o inglês que já sabe, 
              e transformar isso em uma <span className="text-highlight font-semibold">fonte real de renda</span> — 
              mesmo que esteja começando do zero na área.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArgumentSection;
