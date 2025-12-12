import imgMao from "@/assets/img-mao.webp";

const GuaranteeSection = () => {
  return (
    <section className="guarantee-section">
      <div className="guarantee-container">
        <div className="guarantee-content">
          <div className="guarantee-flex">
            <div className="guarantee-hand-left">
              <img 
                src={imgMao} 
                alt="Thumbs up" 
              />
            </div>

            <div className="guarantee-text-wrapper">
              <h3 className="guarantee-title">
                Satisfação garantida ou seu{" "}
                <span className="gradient-text">dinheiro de volta</span>
              </h3>
              <p className="guarantee-description">
                Até 7 dias após o pagamento, você pode cancelar por qualquer motivo e receberá 100% do valor pago.
              </p>
            </div>

            <div className="guarantee-hand-right">
              <img 
                src={imgMao} 
                alt="Thumbs up" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
