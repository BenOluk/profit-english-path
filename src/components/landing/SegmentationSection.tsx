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
    <section className="segmentation-section">
      <div className="segmentation-glow" />
      
      <div className="segmentation-container">
        <div>
          <h2 className="segmentation-title">
            <span className="orange-text">✦</span> Se você...
          </h2>

          <div className="segmentation-grid">
            {segments.map((segment, index) => (
              <div key={index} className="segment-card">
                <div className="segment-icon">
                  {segment.icon}
                </div>
                <p className="segment-text">
                  {segment.text}
                </p>
              </div>
            ))}
          </div>

          <p className="segmentation-subtitle">
            Esse aulão foi feito especialmente para você
          </p>

          <div className="segmentation-cta">
            <a
              href="#oferta"
              onClick={(e) => { e.preventDefault(); handleClick(); }}
              className="cta-button"
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
