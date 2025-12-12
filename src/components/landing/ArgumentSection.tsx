const ArgumentSection = () => {
  return (
    <section className="argument-section">
      <div className="argument-glow" />
      
      <div className="argument-container">
        <div className="argument-content">
          <h2 className="argument-title">
            A{" "}
            <span className="gradient-text">profissão invisível</span>{" "}
            que pode ser sua{" "}
            <span className="orange-text">rota de escape</span> silenciosa
          </h2>

          <div className="argument-paragraphs">
            <p>
              No mundo todo, tem gente ganhando muito bem trabalhando nos bastidores de tudo que você já consome:{" "}
              <span style={{ color: "#FFFFFF", fontWeight: 500 }}>livros, séries, documentários e filmes.</span>
            </p>

            <p>
              Essa profissão não exige palco, nem diploma, nem câmera ligada. 
              Só exige o que você já tem: <span className="orange-text">um segundo idioma.</span>
            </p>

            <p>
              E ao contrário do que dizem por aí, a tecnologia não matou esse mercado — 
              ela <span style={{ color: "#FFFFFF", fontWeight: 500 }}>valorizou quem sabe usar as ferramentas</span> com inteligência e entrega de verdade.
            </p>

            <p style={{
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "inherit",
              padding: "16px 0"
            }}>
              O que falta hoje não são máquinas.{" "}
              <span className="gradient-text">É gente qualificada</span> que saiba entregar um bom trabalho.
            </p>

            <p>
              E a verdade é: Você pode começar agora, com o inglês que já sabe, 
              e transformar isso em uma <span className="orange-text">fonte real de renda</span> — 
              mesmo que esteja começando do zero na área.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArgumentSection;
