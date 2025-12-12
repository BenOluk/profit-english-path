import depoimento1 from "@/assets/new-depoimento1.webp";
import depoimento2 from "@/assets/new-depoimento2.webp";
import depoimento3 from "@/assets/new-depoimento3.webp";
import depoimento4 from "@/assets/new-depoimento4.webp";
import depoimento5 from "@/assets/new-depoimento5.webp";
import depoimento6 from "@/assets/new-depoimento6.webp";
import depoimento7 from "@/assets/new-depoimento7.webp";

const screenshotTestimonials = [
  depoimento1,
  depoimento2,
  depoimento3,
  depoimento4,
  depoimento5,
  depoimento6,
  depoimento7,
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-highlight-orange font-semibold text-sm uppercase tracking-wider">
            Depoimentos reais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Pessoas comuns,{" "}
            <span className="gradient-text">resultados extraordinários</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que dizem os alunos que já transformaram seu inglês em renda real
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div style={{ position: "relative", paddingTop: "177.5%" }}>
              <iframe
                id="panda-2eebd962-41ee-431e-aeeb-ef6dd9f4d985"
                src="https://player-vz-885b350e-f0f.tv.pandavideo.com.br/embed/?v=2eebd962-41ee-431e-aeeb-ef6dd9f4d985"
                style={{ border: "none", position: "absolute", top: 0, left: 0 }}
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                allowFullScreen
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden">
            <div style={{ position: "relative", paddingTop: "177.63713080168776%" }}>
              <iframe
                id="panda-68b92a47-028e-41e2-a518-f0f9b924ef78"
                src="https://player-vz-885b350e-f0f.tv.pandavideo.com.br/embed/?v=68b92a47-028e-41e2-a518-f0f9b924ef78"
                style={{ border: "none", position: "absolute", top: 0, left: 0 }}
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                allowFullScreen
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>

        {/* Screenshot Testimonials */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {screenshotTestimonials.map((img, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              <img
                src={img}
                alt={`Depoimento de aluno ${index + 1}`}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
