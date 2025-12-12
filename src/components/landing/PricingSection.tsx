const includedItems = [
  { text: "Acesso à Imersão Gravada de Tradução INGLÊS LUCRATIVO", highlight: true },
  { text: "15 dias de acesso: Libere seu acesso imediatamente e tenha 2 semanas pra assistir ao conteúdo", highlight: false },
  { text: "BÔNUS: Hot List, uma lista com os 25 principais sites para você prospectar trabalhos de tradução.", highlight: false },
];

const PricingSection = () => {
  return (
    <section id="oferta" style={{
      padding: "64px 0 96px",
      backgroundColor: "#000000",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(126, 51, 255, 0.05), transparent, transparent)"
      }} />

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 16px",
        position: "relative",
        zIndex: 10
      }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{
            fontSize: "clamp(1.875rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#FFFFFF",
            fontFamily: "'Poppins', sans-serif"
          }}>
            Comece seu{" "}
            <span style={{
              background: "linear-gradient(94deg, #FF0AD7 12.19%, #7E33FF 96.82%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontStyle: "italic"
            }}>aprendizado</span>{" "}
            aqui:
          </h2>
        </div>

        <div style={{ maxWidth: "448px", margin: "0 auto" }}>
          <div style={{ position: "relative" }}>
            {/* Glow effect */}
            <div style={{
              position: "absolute",
              inset: "-4px",
              background: "linear-gradient(to right, #7E33FF, #FF0AD7, #7E33FF)",
              borderRadius: "24px",
              filter: "blur(16px)",
              opacity: 0.4
            }} />

            {/* Card */}
            <div style={{
              position: "relative",
              backgroundColor: "rgba(26, 26, 26, 0.6)",
              backdropFilter: "blur(24px)",
              padding: "32px",
              borderRadius: "16px",
              border: "2px solid rgba(126, 51, 255, 0.5)"
            }}>
              {/* Included items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
                {includedItems.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px"
                    }}
                  >
                    <div style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "4px",
                      backgroundColor: "rgba(126, 51, 255, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px"
                    }}>
                      <span style={{ color: "#7E33FF", fontSize: "12px" }}>
                        {index === 2 ? "🎁" : "✓"}
                      </span>
                    </div>
                    <span style={{
                      color: "rgba(255, 255, 255, 0.9)",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      fontFamily: "'Poppins', sans-serif"
                    }}>
                      {index === 0 ? (
                        <>Acesso à <span style={{ color: "#FF0AD7", fontWeight: 600, textDecoration: "underline" }}>Imersão Gravada de Tradução INGLÊS LUCRATIVO</span></>
                      ) : index === 1 ? (
                        <><span style={{ fontWeight: 600 }}>15 dias de acesso:</span> Libere seu acesso imediatamente e tenha 2 semanas pra assistir ao conteúdo</>
                      ) : (
                        <><span style={{ fontWeight: 600 }}>BÔNUS:</span> Hot List, uma lista com os 25 principais sites para você prospectar trabalhos de tradução.</>
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <p style={{
                color: "rgba(179, 179, 179, 1)",
                fontSize: "14px",
                textAlign: "center",
                marginBottom: "16px",
                fontFamily: "'Poppins', sans-serif"
              }}>
                Garanta seu ingresso por apenas
              </p>

              {/* Price */}
              <div style={{
                textAlign: "center",
                paddingBottom: "24px",
                borderBottom: "1px solid rgba(51, 51, 51, 0.5)"
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "center",
                  gap: "8px"
                }}>
                  <span style={{
                    fontSize: "clamp(2.25rem, 4vw, 3rem)",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    fontFamily: "'Poppins', sans-serif"
                  }}>R$ 25</span>
                </div>
                <p style={{
                  color: "rgba(179, 179, 179, 1)",
                  fontSize: "14px",
                  marginTop: "4px",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  à vista
                </p>
                <p style={{
                  color: "rgba(179, 179, 179, 1)",
                  fontSize: "12px",
                  marginTop: "8px",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  ou 5x de R$ 5,54
                </p>
              </div>

              {/* CTA */}
              <div style={{ paddingTop: "24px" }}>
                <a
                  href="https://pay.kiwify.com.br/be0Jzax"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "linear-gradient(94deg, #FF0AD7 12.19%, #7E33FF 96.82%)",
                    padding: "20px 40px",
                    borderRadius: "12px",
                    fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "#FFFFFF",
                    boxShadow: "0 0 40px rgba(255, 10, 215, 0.4)",
                    display: "block",
                    textAlign: "center",
                    textDecoration: "none",
                    cursor: "pointer",
                    width: "100%",
                    fontFamily: "'Poppins', sans-serif"
                  }}
                >
                  QUERO MEU INGRESSO + BÔNUS!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
