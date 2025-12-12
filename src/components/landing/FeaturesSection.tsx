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
    <section className="features-section">
      <div className="features-bg" />
      
      <div className="features-container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">
                {feature.title}
              </h3>
              <p className="feature-description">
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
