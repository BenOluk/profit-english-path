const Ticker = () => {
  const text = "🚨 EXCLUSIVO PARA PESSOAS COM INGLÊS INTERMEDIÁRIO OU AVANÇADO 🚨";
  
  return (
    <div style={{
      background: "linear-gradient(94deg, #FF0AD7 12.19%, #7E33FF 96.82%)",
      overflow: "hidden",
      padding: "10px 0"
    }}>
      <div style={{
        display: "flex",
        whiteSpace: "nowrap",
        animation: "ticker 20s linear infinite"
      }}>
        {[...Array(8)].map((_, i) => (
          <span key={i} style={{
            margin: "0 32px",
            fontSize: "14px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#FFFFFF",
            fontFamily: "'Poppins', sans-serif"
          }}>
            {text}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Ticker;
