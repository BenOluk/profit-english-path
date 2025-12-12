const Ticker = () => {
  const text = "🚨 EXCLUSIVO PARA PESSOAS COM INGLÊS INTERMEDIÁRIO OU AVANÇADO 🚨";
  
  return (
    <div className="gradient-primary overflow-hidden py-2.5">
      <div className="ticker-animation flex whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-8 text-sm font-semibold uppercase tracking-wide text-foreground">
            {text}
          </span>
        ))}
        {[...Array(4)].map((_, i) => (
          <span key={`dup-${i}`} className="mx-8 text-sm font-semibold uppercase tracking-wide text-foreground">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
