import imgExpert from "@/assets/img-expert.webp";

const BioSection = () => {
  return (
    <section style={{
      padding: "64px 0 96px",
      background: "linear-gradient(94deg, #FF0AD7 12.19%, #7E33FF 96.82%)"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 16px"
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px"
          }}>
            {/* Image */}
            <div style={{ width: "100%", maxWidth: "400px" }}>
              <img
                src={imgExpert}
                alt="Naluzz - Tradutora Multitrampo"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            {/* Content */}
            <div style={{ width: "100%", textAlign: "center" }}>
              <h2 style={{
                fontSize: "clamp(1.875rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "24px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontFamily: "'Poppins', sans-serif"
              }}>
                Meet Your Teacher!
              </h2>

              <p style={{
                color: "#FFFFFF",
                fontSize: "18px",
                marginBottom: "16px",
                fontFamily: "'Poppins', sans-serif"
              }}>
                Oi, eu sou a Naluzz!
              </p>

              <p style={{
                color: "#FFFFFF",
                fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                lineHeight: 1.7,
                marginBottom: "16px",
                fontFamily: "'Poppins', sans-serif"
              }}>
                Monetizo meu inglês há 16 anos como Tradutora Multitrampo e{" "}
                <strong style={{ color: "#FF7734" }}>
                  já fiz mais de R$ 2 milhões trabalhando do meu jeito,
                </strong>{" "}
                respeitando minha autenticidade e chutando as caixinhas nas quais os outros tentaram me encaixar à força.
              </p>

              <p style={{
                color: "#FFFFFF",
                fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                lineHeight: 1.7,
                fontFamily: "'Poppins', sans-serif"
              }}>
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

      <style>{`
        @media (min-width: 768px) {
          section > div > div > div {
            flex-direction: row !important;
            text-align: left !important;
          }
          section > div > div > div > div:first-child {
            width: 50% !important;
            max-width: none !important;
          }
          section > div > div > div > div:last-child {
            width: 50% !important;
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BioSection;
