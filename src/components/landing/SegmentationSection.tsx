const segments = [
  {
    icon: "💡",
    text: "Quer transformar seu inglês em dinheiro, não só em consumo de conteúdo. E cansou de estudar idioma pra ver série e nada mais.",
  },
  {
    icon: "📈",
    text: "Quer uma nova profissão ou uma fonte de renda extra. E quer reencontrar leveza, sem recomeçar do zero.",
  },
  {
    icon: "📍",
    text: "Quer sair da CLT e conquistar liberdade de tempo, geográfica e financeira. Sem virar influenciador ou empreender em algo que não faz sentido.",
  },
  {
    icon: "💰",
    text: "Sente que desperdiçou tempo e dinheiro aprendendo inglês — e agora quer retorno monetizando uma habilidade que você já tem.",
  },
  {
    icon: "✅",
    text: "Busca uma nova fonte de renda que pague bem e respeite sua individualidade. Sem chefe, sem rotina engessada, sem crachá.",
  },
  {
    icon: "⚡",
    text: "Quer aprender algo aplicável, rápido e com retorno real. Sem 4 anos de faculdade, sem gastar com cursos técnicos, sem enrolação.",
  },
];

const SegmentationSection = () => {
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
        left: "50%",
        top: 0,
        width: "384px",
        height: "384px",
        backgroundColor: "rgba(126, 51, 255, 0.1)",
        borderRadius: "50%",
        filter: "blur(120px)",
        transform: "translateX(-50%)"
      }} />
      
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 16px",
        position: "relative",
        zIndex: 10
      }}>
        <div>
          <h2 style={{
            fontSize: "clamp(1.875rem, 4vw, 3rem)",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "48px",
            color: "#FFFFFF",
            fontFamily: "'Poppins', sans-serif"
          }}>
            <span style={{ color: "#FF7734" }}>✦</span> Se você...
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto 32px"
          }}>
            {segments.map((segment, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "rgba(26, 26, 26, 0.6)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(51, 51, 51, 0.3)",
                  borderRadius: "16px",
                  padding: "24px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px"
                }}
              >
                <div style={{
                  flexShrink: 0,
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "linear-gradient(94deg, #FF0AD7 12.19%, #7E33FF 96.82%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px"
                }}>
                  {segment.icon}
                </div>
                <p style={{
                  color: "rgba(244, 245, 247, 0.9)",
                  lineHeight: 1.6,
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  {segment.text}
                </p>
              </div>
            ))}
          </div>

          <p style={{
            textAlign: "center",
            color: "rgba(179, 179, 179, 1)",
            fontSize: "18px",
            marginBottom: "32px",
            maxWidth: "560px",
            margin: "0 auto 32px",
            fontFamily: "'Poppins', sans-serif"
          }}>
            Esse aulão foi feito especialmente para você
          </p>

          <div style={{ textAlign: "center" }}>
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
              GARANTA SEU INGRESSO AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegmentationSection;
