import Ticker from "./Ticker";

const HeroSection = () => {
  const handleClick = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
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
        top: "25%",
        left: "25%",
        width: "384px",
        height: "384px",
        backgroundColor: "rgba(255, 10, 215, 0.2)",
        borderRadius: "50%",
        filter: "blur(120px)"
      }} />
      <div style={{
        position: "absolute",
        bottom: "25%",
        right: "25%",
        width: "320px",
        height: "320px",
        backgroundColor: "rgba(126, 51, 255, 0.3)",
        borderRadius: "50%",
        filter: "blur(100px)"
      }} />
      
      <Ticker />
      
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "64px 16px",
        position: "relative",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 44px)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{
            fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "24px",
            color: "#FFFFFF",
            fontFamily: "'Poppins', sans-serif"
          }}>
            VOCÊ ESTÁ USANDO{" "}
            <span style={{ color: "#FF7734", fontWeight: 700 }}>ERRADO</span>{" "}
            O SEU INGLÊS!
          </h1>
        </div>

        <div style={{ maxWidth: "768px", margin: "0 auto" }}>
          <p style={{
            fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
            color: "rgba(244, 245, 247, 0.9)",
            lineHeight: 1.7,
            marginBottom: "32px",
            fontFamily: "'Poppins', sans-serif"
          }}>
            Você estudou inglês por anos, mas no fim só usa pra entender música e série? 
            Enquanto isso, tem gente ganhando mais de{" "}
            <span style={{ color: "#FF7734", fontWeight: 600 }}>R$5 mil por mês</span>{" "}
            com metade do seu nível de inglês — E sem nem precisar aparecer.
          </p>
        </div>

        <div style={{ maxWidth: "640px", margin: "0 auto 40px" }}>
          <p style={{
            fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
            color: "rgba(244, 245, 247, 0.7)",
            lineHeight: 1.7,
            fontFamily: "'Poppins', sans-serif"
          }}>
            Descubra a <span style={{ color: "#FFFFFF", fontWeight: 600 }}>profissão invisível</span>, 
            que vai te pagar em Dólar/Euro, usando a ferramenta que você já tem: 
            <span style={{ color: "#FF7734" }}> O seu segundo idioma.</span>
          </p>
        </div>

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
          QUERO PARTICIPAR DO AULÃO
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
