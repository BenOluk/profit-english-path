const learnings = [
  "Como esse mercado realmente funciona",
  "Como começar do jeito certo",
  "E como transformar seu inglês em até R$5 mil por mês sem precisar mudar de vida — só de rota.",
];

const WhatYouLearnSection = () => {
  const handleClick = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{
      padding: "80px 0 112px",
      backgroundColor: "#1A1A1A",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute",
        right: 0,
        top: "25%",
        width: "320px",
        height: "320px",
        backgroundColor: "rgba(255, 10, 215, 0.1)",
        borderRadius: "50%",
        filter: "blur(100px)"
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        bottom: "25%",
        width: "240px",
        height: "240px",
        backgroundColor: "rgba(126, 51, 255, 0.1)",
        borderRadius: "50%",
        filter: "blur(80px)"
      }} />
      
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 16px",
        position: "relative",
        zIndex: 10
      }}>
        <div style={{ maxWidth: "768px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            fontSize: "clamp(2.25rem, 4vw, 3.75rem)",
            fontWeight: 700,
            marginBottom: "24px",
            color: "#FFFFFF",
            fontFamily: "'Poppins', sans-serif"
          }}>
            A verdade é:
          </h2>
          
          <p style={{
            fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)",
            color: "rgba(179, 179, 179, 1)",
            lineHeight: 1.7,
            marginBottom: "48px",
            fontFamily: "'Poppins', sans-serif"
          }}>
            Você pode começar <span style={{ color: "#FF7734", fontWeight: 600 }}>agora</span>, com o inglês que já sabe, e transformar isso em uma fonte real de renda — mesmo que esteja começando do zero na área.
          </p>

          <h3 style={{
            fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: "32px",
            fontFamily: "'Poppins', sans-serif"
          }}>
            No Aulão Inglês Lucrativo, você aprende:
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
            {learnings.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  textAlign: "left"
                }}
              >
                <div style={{
                  flexShrink: 0,
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(126, 51, 255, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "4px"
                }}>
                  <span style={{ color: "#7E33FF", fontSize: "14px" }}>✓</span>
                </div>
                <p style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                  color: "rgba(179, 179, 179, 1)",
                  lineHeight: 1.7,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
            <p style={{
              color: "#FF7734",
              fontWeight: 600,
              fontSize: "18px",
              fontFamily: "'Poppins', sans-serif"
            }}>
              ➜ Aulão Inglês Lucrativo - Acesso Imediato
            </p>
            <a
              href="#oferta"
              onClick={(e) => { e.preventDefault(); handleClick(); }}
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
                display: "inline-block",
                textAlign: "center",
                textDecoration: "none",
                cursor: "pointer",
                fontFamily: "'Poppins', sans-serif"
              }}
            >
              QUERO ACESSAR O AULÃO AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
