import imgExpert from "@/assets/img-expert.webp";

const BioSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-pink">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img src={imgExpert} alt="Naluzz - Tradutora Multitrampo" className="w-full max-w-md mx-auto md:mx-0" />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 uppercase tracking-wide">
                Meet Your Teacher!
              </h2>

              <p className="text-foreground text-lg mb-4">Oi, eu sou a Naluzz!</p>

              <p className="text-foreground text-base md:text-lg leading-relaxed mb-4">
                Monetizo meu inglês há 17 anos como Tradutora Multitrampo e{" "}
                <strong className="text-highlight-orange">já fiz mais de R$ 2 milhões trabalhando do meu jeito,</strong>{" "}
                respeitando minha autenticidade e chutando as caixinhas nas quais os outros tentaram me encaixar à
                força.
              </p>

              <p className="text-foreground text-base md:text-lg leading-relaxed">
                Vou mostrar para você que é possível{" "}
                <strong>
                  fazer MAIS DINHEIRO do que você ganha atualmente, trabalhando menos e vivendo uma vida que realmente
                  faz sentido para você:
                </strong>{" "}
                basta usar seu inglês como ferramenta de trabalho, e então você poderá trabalhar{" "}
                <strong>
                  quantas horas quiser, nos dias em que quiser, sem precisar de diploma e sem precisar ser professor de
                  inglês.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;