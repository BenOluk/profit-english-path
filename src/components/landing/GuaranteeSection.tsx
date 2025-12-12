import imgMao from "@/assets/img-mao.webp";

const GuaranteeSection = () => {
  return (
    <section style={{
      padding: "48px 0 64px",
      backgroundColor: "#7E33FF"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 16px"
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            textAlign: "center"
          }}>
            {/* Left hand - hidden on mobile */}
            <div style={{ display: "none" }} className="left-hand">
              <img 
                src={imgMao} 
                alt="Thumbs up" 
                style={{
                  width: "128px",
                  height: "auto",
                  transform: "scaleX(-1)",
                  filter: "grayscale(100%)"
                }}
              />
            </div>

            {/* Text content */}
            <div style={{ textAlign: "center" }}>
              <h3 style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                fontStyle: "italic",
                marginBottom: "12px",
                fontFamily: "'Poppins', sans-serif"
              }}>
                Satisfação garantida ou seu{" "}
                <span style={{
                  background: "linear-gradient(94deg, #FF0AD7 12.19%, #7E33FF 96.82%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>dinheiro de volta</span>
              </h3>
              <p style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                maxWidth: "448px",
                margin: "0 auto",
                fontFamily: "'Poppins', sans-serif"
              }}>
                Até 7 dias após o pagamento, você pode cancelar por qualquer motivo e receberá 100% do valor pago.
              </p>
            </div>

            {/* Right hand */}
            <div style={{ width: "96px" }}>
              <img 
                src={imgMao} 
                alt="Thumbs up" 
                style={{
                  width: "100%",
                  height: "auto",
                  filter: "grayscale(100%)"
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          section > div > div > div {
            flex-direction: row !important;
            gap: 48px !important;
          }
          .left-hand {
            display: block !important;
          }
          section > div > div > div > div:nth-child(2) {
            text-align: left !important;
          }
          section > div > div > div > div:last-child {
            width: 128px !important;
          }
        }
        @media (min-width: 1024px) {
          .left-hand img,
          section > div > div > div > div:last-child {
            width: 160px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default GuaranteeSection;
