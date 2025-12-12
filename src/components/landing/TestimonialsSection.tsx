import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Ex-CLT, agora tradutora freelancer",
    avatar: "MS",
    text: "Eu trabalhava em escritório e tinha inglês parado. Depois da imersão, consegui meus primeiros clientes em menos de 2 meses. Hoje faturo mais de R$4.000 por mês, de casa.",
    rating: 5,
  },
  {
    name: "Ricardo Almeida",
    role: "Tradutor há 1 ano",
    avatar: "RA",
    text: "A Naluzz mostrou um caminho que eu não sabia que existia. Sem enrolação, sem promessa milagrosa — só método e trabalho. Hoje trabalho 4h por dia e tenho mais qualidade de vida.",
    rating: 5,
  },
  {
    name: "Fernanda Costa",
    role: "Mãe e tradutora",
    avatar: "FC",
    text: "Consegui conciliar o trabalho com a maternidade. Traduzo enquanto minha filha dorme e já paguei todas as contas do mês só com tradução. Melhor decisão que tomei.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    role: "Ex-professor de inglês",
    avatar: "CE",
    text: "Eu dava aula particular e ganhava pouco. Hoje faturo 3x mais trabalhando menos. O conteúdo da Naluzz é direto ao ponto, sem encher linguiça.",
    rating: 5,
  },
  {
    name: "Amanda Ribeiro",
    role: "Estudante de tradução",
    avatar: "AR",
    text: "Estava perdida na faculdade, sem saber como entrar no mercado. A imersão me deu clareza total. Já estou fazendo meus primeiros trabalhos pagos!",
    rating: 5,
  },
  {
    name: "Paulo Henrique",
    role: "Tradutor audiovisual",
    avatar: "PH",
    text: "Descobri o nicho de legendagem e nunca mais olhei pra trás. Trabalho com séries e documentários, de casa, ganhando em dólar. Obrigado, Naluzz!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
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
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 relative group hover:border-primary/50 transition-colors"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-highlight-orange text-highlight-orange" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 text-sm md:text-base leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-foreground font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
