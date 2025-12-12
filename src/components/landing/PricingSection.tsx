const includedItems = [
  { text: "Acesso à Imersão Gravada de Tradução INGLÊS LUCRATIVO", highlight: true },
  { text: "15 dias de acesso: Libere seu acesso imediatamente e tenha 2 semanas pra assistir ao conteúdo", highlight: false },
  { text: "BÔNUS: Hot List, uma lista com os 25 principais sites para você prospectar trabalhos de tradução.", highlight: false },
];

const PricingSection = () => {
  return (
    <section id="oferta" className="pricing-section">
      <div className="pricing-bg" />

      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">
            Comece seu{" "}
            <span className="gradient-text" style={{ fontStyle: "italic" }}>aprendizado</span>{" "}
            aqui:
          </h2>
        </div>

        <div className="pricing-card-wrapper">
          <div className="pricing-glow" />

          <div className="pricing-card">
            <div className="pricing-items">
              {includedItems.map((item, index) => (
                <div key={index} className="pricing-item">
                  <div className="pricing-check">
                    <span>{index === 2 ? "🎁" : "✓"}</span>
                  </div>
                  <span className="pricing-item-text">
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

            <p className="pricing-label">
              Garanta seu ingresso por apenas
            </p>

            <div className="pricing-price-wrapper">
              <div className="pricing-price-flex">
                <span className="pricing-price">R$ 25</span>
              </div>
              <p className="pricing-cash">
                à vista
              </p>
              <p className="pricing-installments">
                ou 5x de R$ 5,54
              </p>
            </div>

            <div className="pricing-cta">
              <a
                href="https://pay.kiwify.com.br/be0Jzax"
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-button"
              >
                QUERO MEU INGRESSO + BÔNUS!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
