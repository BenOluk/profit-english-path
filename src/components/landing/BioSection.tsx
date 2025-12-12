import imgExpert from "@/assets/img-expert.webp";

const BioSection = () => {
  return (
    <section className="bio-section">
      <div className="bio-container">
        <div className="bio-content">
          <div className="bio-flex">
            <div className="bio-image-wrapper">
              <img
                src={imgExpert}
                alt="Naluzz - Tradutora Multitrampo"
                className="bio-image"
              />
            </div>

            <div className="bio-text-wrapper">
              <h2 className="bio-title">
                Meet Your Teacher!
              </h2>

              <p className="bio-intro">
                Oi, eu sou a Naluzz!
              </p>

              <p className="bio-paragraph">
                Monetizo meu inglês há 16 anos como Tradutora Multitrampo e{" "}
                <strong className="orange-text">
                  já fiz mais de R$ 2 milhões trabalhando do meu jeito,
                </strong>{" "}
                respeitando minha autenticidade e chutando as caixinhas nas quais os outros tentaram me encaixar à força.
              </p>

              <p className="bio-paragraph">
                Vou mostrar para você que é possível{" "}
                <strong>
                  fazer MAIS DINHEIRO do que você ganha atualmente, trabalhando menos e vivendo uma vida que realmente faz sentido para você:
                </strong>{" "}
                basta usar seu inglês como ferramenta de trabalho, e então você poderá trabalhar{" "}
                <strong>
                  quantas horas quiser, nos dias em que quiser, sem precisar de diploma e sem precisar ser professor de inglês.
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
