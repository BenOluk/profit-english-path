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
    <section className="whatlearn-section">
      <div className="whatlearn-glow-1" />
      <div className="whatlearn-glow-2" />
      
      <div className="whatlearn-container">
        <div className="whatlearn-content">
          <h2 className="whatlearn-title">
            A verdade é:
          </h2>
          
          <p className="whatlearn-subtitle">
            Você pode começar <span className="orange-text">agora</span>, com o inglês que já sabe, e transformar isso em uma fonte real de renda — mesmo que esteja começando do zero na área.
          </p>

          <h3 className="whatlearn-heading">
            No Aulão Inglês Lucrativo, você aprende:
          </h3>

          <div className="whatlearn-list">
            {learnings.map((item, index) => (
              <div key={index} className="whatlearn-item">
                <div className="whatlearn-check">
                  <span>✓</span>
                </div>
                <p className="whatlearn-item-text">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="whatlearn-cta-wrapper">
            <p className="whatlearn-cta-label">
              ➜ Aulão Inglês Lucrativo - Acesso Imediato
            </p>
            <a
              href="#oferta"
              onClick={(e) => { e.preventDefault(); handleClick(); }}
              className="cta-button"
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
