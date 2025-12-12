const ArgumentSection = () => {
  return (
    <section style={{
      padding: "80px 0 112px",
      backgroundColor: "#000000",
      position: "relative"
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: "50%",
        width: "288px",
        height: "288px",
        backgroundColor: "rgba(126, 51, 255, 0.1)",
        borderRadius: "50%",
        filter: "blur(100px)",
        transform: "translateY(-50%)"
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
            lineHeight: 1.2,
            color: "#FFFFFF",
            fontFamily: "'Poppins', sans-serif"
          }}>
            A{" "}
            <span style={{
              background: "linear-gradient(94deg, #FF0AD7 12.19%, #7E33FF 96.82%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>profissão invisível</span>{" "}
            que pode ser sua{" "}
            <span style={{ color: "#FF7734", fontWeight: 700 }}>rota de escape</span> silenciosa
          </h2>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)",
            color: "rgba(244, 245, 247, 0.8)",
            lineHeight: 1.7,
            fontFamily: "'Poppins', sans-serif"
          }}>
            <p>
              No mundo todo, tem gente ganhando muito bem trabalhando nos bastidores de tudo que você já consome:{" "}
              <span style={{ color: "#FFFFFF", fontWeight: 500 }}>livros, séries, documentários e filmes.</span>
            </p>

            <p>
              Essa profissão não exige palco, nem diploma, nem câmera ligada. 
              Só exige o que você já tem: <span style={{ color: "#FF7734", fontWeight: 600 }}>um segundo idioma.</span>
            </p>

            <p>
              E ao contrário do que dizem por aí, a tecnologia não matou esse mercado — 
              ela <span style={{ color: "#FFFFFF", fontWeight: 500 }}>valorizou quem sabe usar as ferramentas</span> com inteligência e entrega de verdade.
            </p>

            <p style={{
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
              padding: "16px 0"
            }}>
              O que falta hoje não são máquinas.{" "}
              <span style={{
                background: "linear-gradient(94deg, #FF0AD7 12.19%, #7E33FF 96.82%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>É gente qualificada</span> que saiba entregar um bom trabalho.
            </p>

            <p>
              E a verdade é: Você pode começar agora, com o inglês que já sabe, 
              e transformar isso em uma <span style={{ color: "#FF7734", fontWeight: 600 }}>fonte real de renda</span> — 
              mesmo que esteja começando do zero na área.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArgumentSection;
