const FinalCTASection = () => {
  return (
    <section style={{
      padding: "80px 0 128px",
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#000000"
    }}>
      {/* Background gradient */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, #7E33FF, rgba(126, 51, 255, 0.8), #000000)"
      }} />
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to right, rgba(255, 10, 215, 0.1), transparent, rgba(126, 51, 255, 0.1))"
      }} />
      
      {/* Glow effects */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: "25%",
        width: "384px",
        height: "384px",
        backgroundColor: "rgba(255, 10, 215, 0.2)",
        borderRadius: "50%",
        filter: "blur(120px)"
      }} />
      <div style={{
        position: "absolute",
        top: "25%",
        right: "25%",
        width: "320px",
        height: "320px",
        backgroundColor: "rgba(126, 51, 255, 0.2)",
        borderRadius: "50%",
        filter: "blur(100px)"
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
            fontSize: "clamp(1.875rem, 4vw, 3rem)",
            fontWeight: 700,
            marginBottom: "24px",
            color: "#FFFFFF",
            fontFamily: "'Poppins', sans-serif"
          }}>
            Pronto pra{" "}
            <span style={{ color: "#FF7734" }}>transformar</span> seu inglês em{" "}
            <span style={{
              background: "linear-gradient(94deg, #FF0AD7 12.19%, #7E33FF 96.82%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>renda real?</span>
          </h2>

          <p style={{
            fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)",
            color: "rgba(244, 245, 247, 0.8)",
            marginBottom: "40px",
            maxWidth: "640px",
            margin: "0 auto 40px",
            fontFamily: "'Poppins', sans-serif"
          }}>
            Entre agora na Imersão Gravada e descubra como dar o primeiro passo rumo à sua independência financeira.
          </p>

          <a
            href="https://pay.kiwify.com.br/be0Jzax"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(94deg, #FF0AD7 12.19%, #7E33FF 96.82%)",
              padding: "24px 48px",
              borderRadius: "12px",
              fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)",
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
            QUERO PARTICIPAR AGORA
          </a>

          <p style={{
            marginTop: "24px",
            fontSize: "14px",
            color: "rgba(179, 179, 179, 1)",
            fontFamily: "'Poppins', sans-serif"
          }}>
            Aulão gravado - Acesso Imediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
