const discoveries = [
  {
    emoji: "🔎",
    title: "Como usar seu inglês pra gerar renda real.",
    description: "Não é aula de gramática. É como transformar o que você já sabe em dinheiro no Pix.",
  },
  {
    emoji: "💼",
    title: "O que é a Profissão Invisível que paga bem e não exige aparecer.",
    description: "Trabalhe dos bastidores — de onde quiser, com quem quiser.",
  },
  {
    emoji: "🚀",
    title: "Como começar como tradutor, mesmo sem experiência.",
    description: "Sem faculdade, sem diploma e sem precisar dominar ferramentas complicadas.",
  },
  {
    emoji: "🎯",
    title: "Onde conseguir seus primeiros clientes e como cobrar mais desde o início.",
    description: "O caminho pra sair do amadorismo mais rápido do que você imagina.",
  },
  {
    emoji: "📉",
    title: "Os maiores mitos que te travam.",
    description: "Spoiler: IA não acabou com a tradução — ela só eliminou quem era raso.",
  },
];

const DiscoverySection = () => {
  return (
    <section className="discovery-section">
      <div className="discovery-glow" />
      
      <div className="discovery-container">
        <div className="discovery-content">
          <h2 className="discovery-title">
            No Aulão Inglês Lucrativo, você vai{" "}
            <span className="gradient-text">descobrir:</span>
          </h2>

          <div className="discovery-list">
            {discoveries.map((item, index) => (
              <div key={index} className="discovery-card">
                <div className="discovery-card-inner">
                  <span className="discovery-emoji">{item.emoji}</span>
                  <div>
                    <h3 className="discovery-card-title">
                      {item.title}
                    </h3>
                    <p className="discovery-card-desc">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="discovery-footer">
            <p className="discovery-footer-text">
              Nada de conteúdo engessado. É{" "}
              <span className="orange-text">papo reto</span> sobre dinheiro, 
              liberdade e o poder de usar seu inglês com{" "}
              <span className="gradient-text" style={{ fontWeight: 600 }}>estratégia.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;
