import { motion } from "framer-motion";
import imgMao from "@/assets/img-mao.webp";

const GuaranteeSection = () => {
  return (
    <section className="py-12 md:py-16 bg-hero-purple">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {/* Left hand */}
            <div className="hidden md:block w-32 lg:w-40">
              <img 
                src={imgMao} 
                alt="Thumbs up" 
                className="w-full h-auto transform -scale-x-100 grayscale"
              />
            </div>

            {/* Text content */}
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground italic mb-3">
                Satisfação garantida ou seu{" "}
                <span className="gradient-text">dinheiro de volta</span>
              </h3>
              <p className="text-foreground/90 text-base md:text-lg max-w-md">
                Até 7 dias após o pagamento, você pode cancelar por qualquer motivo e receberá 100% do valor pago.
              </p>
            </div>

            {/* Right hand */}
            <div className="w-24 md:w-32 lg:w-40">
              <img 
                src={imgMao} 
                alt="Thumbs up" 
                className="w-full h-auto grayscale"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
