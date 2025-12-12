const Ticker = () => {
  const text = "🚨 EXCLUSIVO PARA PESSOAS COM INGLÊS INTERMEDIÁRIO OU AVANÇADO 🚨";
  
  return (
    <div className="ticker-container">
      <div className="ticker-content">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="ticker-text">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
