const FinalCTASection = () => {
  return (
    <section className="final-cta-section">
      <div className="final-cta-bg-gradient" />
      <div className="final-cta-bg-overlay" />
      <div className="final-cta-glow-1" />
      <div className="final-cta-glow-2" />

      <div className="final-cta-container">
        <div className="final-cta-content">
          <h2 className="final-cta-title">
            Pronto pra{" "}
            <span className="orange-text">transformar</span> seu inglês em{" "}
            <span className="gradient-text">renda real?</span>
          </h2>

          <p className="final-cta-subtitle">
            Entre agora na Imersão Gravada e descubra como dar o primeiro passo rumo à sua independência financeira.
          </p>

          <a
            href="https://pay.kiwify.com.br/be0Jzax"
            target="_blank"
            rel="noopener noreferrer"
            className="final-cta-button"
          >
            QUERO PARTICIPAR AGORA
          </a>

          <p className="final-cta-note">
            Aulão gravado - Acesso Imediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
