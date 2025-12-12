import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter inglês fluente para participar?",
    answer:
      "Não! A imersão é voltada para pessoas com inglês intermediário ou avançado. Se você consegue entender filmes/séries sem legenda e se comunicar em inglês básico, já está pronto para começar.",
  },
  {
    question: "A imersão é realmente gratuita?",
    answer:
      "Sim, 100% gratuita! Você terá acesso completo ao conteúdo ao vivo e ao replay por tempo limitado, sem precisar pagar nada.",
  },
  {
    question: "Preciso ter formação em Letras ou Tradução?",
    answer:
      "Absolutamente não! A maioria dos tradutores bem-sucedidos não tem diploma na área. O que importa é dominar o idioma e aprender as técnicas certas — e é exatamente isso que você vai descobrir na imersão.",
  },
  {
    question: "Quanto tempo dura a imersão?",
    answer:
      "A transmissão ao vivo tem duração aproximada de 2 a 3 horas, com conteúdo denso e prático. Você também terá acesso ao replay para assistir no seu ritmo.",
  },
  {
    question: "Vou aprender a conseguir clientes?",
    answer:
      "Sim! Um dos principais tópicos da imersão é mostrar onde estão os clientes e como se posicionar para conseguir trabalhos, mesmo começando do zero.",
  },
  {
    question: "A profissão de tradutor ainda vale a pena com a IA?",
    answer:
      "Mais do que nunca! A IA eliminou apenas os tradutores rasos. Para trabalhos de qualidade, empresas e clientes ainda precisam de profissionais capacitados. Você vai entender exatamente como se posicionar nesse novo cenário.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-highlight-orange font-semibold text-sm uppercase tracking-wider">
            Dúvidas frequentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-border/50 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-foreground text-left font-semibold text-base md:text-lg py-5 hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
