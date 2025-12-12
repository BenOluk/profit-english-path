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
    <section style={{
      padding: "80px 0 112px",
      backgroundColor: "#000000",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute",
        right: 0,
        bottom: 0,
        width: "320px",
        height: "320px",
        backgroundColor: "rgba(255, 10, 215, 0.1)",
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
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(1.875rem, 4vw, 3rem)",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "48px",
            color: "#FFFFFF",
            fontFamily: "'Poppins', sans-serif"
          }}>
            No Aulão Inglês Lucrativo, você vai{" "}
            <span style={{
              background: "linear-gradient(94deg, #FF0AD7 12.19%, #7E33FF 96.82%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>descobrir:</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {discoveries.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "rgba(26, 26, 26, 0.6)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(51, 51, 51, 0.3)",
                  borderRadius: "16px",
                  padding: "24px 32px"
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "24px"
                }}>
                  <span style={{ fontSize: "clamp(1.875rem, 3vw, 2.25rem)" }}>{item.emoji}</span>
                  <div>
                    <h3 style={{
                      fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "8px",
                      fontFamily: "'Poppins', sans-serif"
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      color: "rgba(179, 179, 179, 1)",
                      lineHeight: 1.6,
                      fontFamily: "'Poppins', sans-serif"
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "48px", textAlign: "center" }}>
            <p style={{
              fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
              color: "rgba(244, 245, 247, 0.8)",
              lineHeight: 1.7,
              maxWidth: "768px",
              margin: "0 auto",
              fontFamily: "'Poppins', sans-serif"
            }}>
              Nada de conteúdo engessado. É{" "}
              <span style={{ color: "#FF7734", fontWeight: 600 }}>papo reto</span> sobre dinheiro, 
              liberdade e o poder de usar seu inglês com{" "}
              <span style={{
                background: "linear-gradient(94deg, #FF0AD7 12.19%, #7E33FF 96.82%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 600
              }}>estratégia.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;
