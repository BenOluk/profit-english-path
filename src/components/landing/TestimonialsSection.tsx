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
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-label">
            Depoimentos reais
          </span>
          <h2 className="testimonials-title">
            Pessoas comuns,{" "}
            <span className="gradient-text">resultados extraordinários</span>
          </h2>
          <p className="testimonials-subtitle">
            Veja o que dizem os alunos que já transformaram seu inglês em renda real
          </p>
        </div>

        <div className="testimonials-videos">
          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                id="panda-2eebd962-41ee-431e-aeeb-ef6dd9f4d985"
                src="https://player-vz-885b350e-f0f.tv.pandavideo.com.br/embed/?v=2eebd962-41ee-431e-aeeb-ef6dd9f4d985"
                className="video-iframe"
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="video-card">
            <div className="video-wrapper" style={{ paddingTop: "177.63713080168776%" }}>
              <iframe
                id="panda-68b92a47-028e-41e2-a518-f0f9b924ef78"
                src="https://player-vz-885b350e-f0f.tv.pandavideo.com.br/embed/?v=68b92a47-028e-41e2-a518-f0f9b924ef78"
                className="video-iframe"
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="testimonials-screenshots">
          {screenshotTestimonials.map((img, index) => (
            <div key={index} className="screenshot-card">
              <img
                src={img}
                alt={`Depoimento de aluno ${index + 1}`}
                className="screenshot-img"
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
