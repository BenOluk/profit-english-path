import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como saber se meu conhecimento de inglês (ou outro segundo idioma) é suficiente para trabalhar com tradução?",
    answer:
      "O que eu sempre falo pro pessoal quando me perguntam isso na caixinha de perguntas do Instagram é o seguinte: se seu inglês (ou qualquer outro segundo idioma) é bom o suficiente para você ouvir músicas estrangeiras e entendê-las; se você consegue assistir às séries que gosta sem depender de legenda; e se você gosta de aprender coisas novas, seu conhecimento é suficiente sim para começar.\n\nO Tradutor Profissional não precisa saber TUDO de seus idiomas de trabalho. Temos ferramentas que podem nos ajudar durante os projetos, quando encontramos uma palavra que nunca vimos na vida. (PS: isso acontece com seu idioma materno também. Você talvez não conheça a palavra \"estapafúrdio\", e nem por isso você duvidaria da sua capacidade de falar português, certo? 🙂)",
  },
  {
    question: "Na Imersão, você explica como conseguir clientes? Essa é minha maior insegurança.",
    answer:
      "Sim, na imersão, eu dou algumas estratégias iniciais de prospecção para você saber por onde começar. No material complementar opcional Dashboard do Tradutor Iniciante, você recebe um checklist de sites para usar em sua rotina de prospecção. Acrescente ao seu ingresso se desejar.\n\nVocê também recebe um Bônus exclusivo para te ajudar a fechar seus primeiros trabalhos de tradução: a HOT LIST, uma lista de 25 sites altamente indicados para você prospectar clientes e começar a fazer dinheiro como tradutor profissional.",
  },
  {
    question: "Meu segundo idioma não é o inglês, posso participar da Imersão Inglês Lucrativo mesmo assim?",
    answer:
      "Claro! O Inglês Lucrativo não é uma aula de idiomas; ele é uma imersão que te orienta para iniciar como tradutor. Inscreva-se no Inglês Lucrativo para aprender os primeiros passos para usar o segundo idioma que você já sabe e transformá-lo numa ferramenta de trabalho. Aprenda o que você precisa saber sobre o mercado de tradução, programas e recursos que vão te ajudar a entregar qualidade em suas traduções, técnicas de prospecção de clientes e orientações para saber como precificar o trabalho.",
  },
  {
    question: "Não tenho muito tempo sobrando, a Imersão é muito longa?",
    answer:
      "A Imersão Inglês Lucrativo foi criada para entregar o máximo de conteúdo possível em aproximadamente 4h de forma leve e descontraída, ideal para jovens que têm PRESSA de fazer dinheiro. Por isso, é uma imersão relativamente curta sem ser superficial, e você não precisa de muita disponibilidade para assistir. Em pouco menos de 4h, você consegue assistir a todo o conteúdo da imersão e ainda tem acesso a um convite especial para levar seus estudos adiante de forma profissionalizante. Você também pode aplicar os conteúdos da imersão com a ajuda do material complementar opcional Dashboard do TRADUTOR INICIANTE, que você poderá acrescentar ao seu ingresso se desejar.",
  },
  {
    question: "Em quanto tempo consigo fazer dinheiro com essas habilidades?",
    answer:
      "Tenho relatos de alunos que, apenas 30 dias após começarem a estudar com a gente, já tinham fechado seu primeiro cliente na profissão da Tradução. A velocidade do resultado depende do quanto você vai se dedicar à prospecção de clientes e à busca por oportunidades que se encaixam no que você deseja. Muitos alunos nossos têm \"sangue nos olhos\" e se jogam com vontade, conseguindo resultados super rapidamente. Enquanto outros procrastinam e cedem ao autoboicote, e acabam demorando para ter resultado. Qual tipo de aluno você pretende ser? Aquele que faz o que tem que ser feito e constrói resultado, ou aquele que espera o cliente cair do céu?",
  },
  {
    question: "Quanto tempo de acesso?",
    answer:
      "A Imersão Inglês Lucrativo é um conteúdo online criado pra pessoas que têm pressa pra mudar de vida. Por isso, não queremos que você se enrole pra assistir!\n\nSeu ingresso te dá direito a 15 dias de acesso ao conteúdo, sendo que você pode começar AGORA MESMO, com o acesso imediato liberado logo após a confirmação do pagamento do ingresso.\n\nEntão, se não tiver disponibilidade pra começar HOJE a assistir, organize-se para assistir nos próximos 15 dias.\n\nVocê também tem a opção de adquirir o Resumão escrito da imersão no Notion, que poderá ser salvo na sua conta do Notion pra você guardar pra sempre e consultar a qualquer momento após seus 15 dias de acesso. Acrescente este e outros materiais complementares opcionais ao seu ingresso se desejar.",
  },
  {
    question: "A Imersão é só para quem nunca traduziu antes? Ou quem tem experiência também pode fazer?",
    answer:
      "A Imersão Inglês Lucrativo foi pensada para pessoas iniciantes no mercado da Tradução. Por isso, quem mais se beneficia deste conteúdo é a pessoa que não tem experiência no mercado da Tradução como profissional qualificado, ou pessoas que estão desatualizadas e desejam se informar sobre as tendências atuais do mercado.",
  },
  {
    question: "Como faço para assistir à Imersão Inglês Lucrativo?",
    answer:
      "Após finalizar sua matrícula, você receberá um e-mail com os dados de acesso no seu e-mail cadastrado na matrícula do Ingresso.",
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
