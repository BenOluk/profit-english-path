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
    <section style={{
      padding: "64px 0 96px",
      backgroundColor: "rgba(26, 26, 26, 0.5)"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 16px"
      }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            color: "#FF7734",
            fontWeight: 600,
            fontSize: "14px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontFamily: "'Poppins', sans-serif"
          }}>
            Depoimentos reais
          </span>
          <h2 style={{
            fontSize: "clamp(1.875rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#FFFFFF",
            marginTop: "16px",
            marginBottom: "24px",
            fontFamily: "'Poppins', sans-serif"
          }}>
            Pessoas comuns,{" "}
            <span style={{
              background: "linear-gradient(94deg, #FF0AD7 12.19%, #7E33FF 96.82%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>resultados extraordinários</span>
          </h2>
          <p style={{
            color: "rgba(179, 179, 179, 1)",
            fontSize: "18px",
            maxWidth: "640px",
            margin: "0 auto",
            fontFamily: "'Poppins', sans-serif"
          }}>
            Veja o que dizem os alunos que já transformaram seu inglês em renda real
          </p>
        </div>

        {/* Video Testimonials */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          maxWidth: "768px",
          margin: "0 auto 48px"
        }}>
          <div style={{
            backgroundColor: "rgba(26, 26, 26, 0.6)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(51, 51, 51, 0.3)",
            borderRadius: "16px",
            overflow: "hidden"
          }}>
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

          <div style={{
            backgroundColor: "rgba(26, 26, 26, 0.6)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(51, 51, 51, 0.3)",
            borderRadius: "16px",
            overflow: "hidden"
          }}>
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
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "16px"
        }}>
          {screenshotTestimonials.map((img, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "rgba(26, 26, 26, 0.6)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(51, 51, 51, 0.3)",
                borderRadius: "12px",
                overflow: "hidden"
              }}
            >
              <img
                src={img}
                alt={`Depoimento de aluno ${index + 1}`}
                style={{ width: "100%", height: "auto" }}
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
