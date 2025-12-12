import Ticker from "./Ticker";

const HeroSection = () => {
  const handleClick = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-bg-gradient" />
      <div className="hero-bg-overlay" />
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      
      <Ticker />
      
      <div className="hero-container">
        <div className="hero-title-wrapper">
          <h1 className="hero-title">
            VOCÊ ESTÁ USANDO{" "}
            <span className="hero-title-highlight">ERRADO</span>{" "}
            O SEU INGLÊS!
          </h1>
        </div>

        <div className="hero-subtitle-wrapper">
          <p className="hero-subtitle">
            Você estudou inglês por anos, mas no fim só usa pra entender música e série? 
            Enquanto isso, tem gente ganhando mais de{" "}
            <span className="orange-text">R$5 mil por mês</span>{" "}
            com metade do seu nível de inglês — E sem nem precisar aparecer.
          </p>
        </div>

        <div className="hero-description-wrapper">
          <p className="hero-description">
            Descubra a <span style={{ color: "#FFFFFF", fontWeight: 600 }}>profissão invisível</span>, 
            que vai te pagar em Dólar/Euro, usando a ferramenta que você já tem: 
            <span className="orange-text"> O seu segundo idioma.</span>
          </p>
        </div>

        <a
          href="#oferta"
          onClick={(e) => { e.preventDefault(); handleClick(); }}
          className="cta-button"
        >
          QUERO PARTICIPAR DO AULÃO
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
