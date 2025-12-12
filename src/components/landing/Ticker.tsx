const Ticker = () => {
  const text = "🚨 EXCLUSIVO PARA PESSOAS COM INGLÊS INTERMEDIÁRIO OU AVANÇADO 🚨";
  
  return (
    <div className="gradient-primary py-2.5">
      <div className="flex justify-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-foreground text-center">
          {text}
        </span>
      </div>
    </div>
  );
};

export default Ticker;
