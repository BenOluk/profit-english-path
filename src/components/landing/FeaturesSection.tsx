const features = [
  {
    icon: "🕐",
    title: "Trabalhe só 3h por dia",
    description: "Mais leveza, mais tempo pra você",
  },
  {
    icon: "🏠",
    title: "100% Home Office",
    description: "Clientes do mundo todo, você no seu sofá",
  },
  {
    icon: "🎓",
    title: "Sem diploma, sem enrolação",
    description: "Você já tem o que precisa pra começar agora",
  },
];

const FeaturesSection = () => {
  return (
    <section style={{
      padding: "80px 0 112px",
      backgroundColor: "#000000",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(126, 51, 255, 0.1), transparent)"
      }} />
      
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 16px",
        position: "relative",
        zIndex: 10
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "32px"
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "rgba(26, 26, 26, 0.6)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(51, 51, 51, 0.3)",
                borderRadius: "16px",
                padding: "32px",
                textAlign: "center"
              }}
            >
              <div style={{
                width: "64px",
                height: "64px",
                margin: "0 auto 24px",
                borderRadius: "16px",
                background: "linear-gradient(94deg, #FF0AD7 12.19%, #7E33FF 96.82%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px"
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "12px",
                fontFamily: "'Poppins', sans-serif"
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: "rgba(179, 179, 179, 1)",
                fontSize: "16px",
                fontFamily: "'Poppins', sans-serif"
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
